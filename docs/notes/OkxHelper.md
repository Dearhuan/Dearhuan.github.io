# 搭建一款Okx数据推送机器人

![okxBot](/images/okxbot.png)

::: tip 前提条件
企业微信通知需要注册企业微信应用，获取企业ID、应用ID、应用秘钥等参数

Okx需要申请APIKEY、SECRETKEY、PASSPHRASE等参数
:::

- 模块导入
```js
const axios = require("axios");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const Base64 = require("crypto-js/enc-base64");
const HmacSHA256 = require("crypto-js/hmac-sha256");

dotenv.config();
```

- 常量定义
```js
const {
  WX_COMPANY_ID,
  WX_APP_ID,
  WX_APP_SECRET,
  PASSPHRASE,
  APIKEY,
  SECRETKEY,
} = process.env;

const qyweixinUrl = "https://qyapi.weixin.qq.com";
const domain = "https://www.okx.com";
const timeUrl = "/api/v5/public/time";
const balanceUrl = "/api/v5/account/balance?ccy=USDT,ETH";
const positionUrl = "/api/v5/account/positions?instType=SWAP";
const valuationUrl = "/api/v5/asset/asset-valuation?ccy=CNY";
const exchangeRateUrl = "/api/v5/market/exchange-rate";
const ratioUrl1H =
  "/api/v5/rubik/stat/contracts/long-short-account-ratio?ccy=ETH&period=1H";
const ratioUrl1D =
  "/api/v5/rubik/stat/contracts/long-short-account-ratio?ccy=ETH&period=1D";

const instType = {
  MARGIN: "币币杠杆",
  SWAP: "永续合约",
  FUTURES: "交割合约",
  OPTION: "期权",
};

const mgnMode = {
  cross: "全仓",
  isolated: "逐仓",
};

const posSide = {
  long: "双向持仓多头",
  short: "双向持仓空头",
  net: "单向持仓",
};
const urlObj = {
  balanceUrl: {
    url: balanceUrl,
    method: "GET",
  },
  positionUrl: {
    url: positionUrl,
    method: "GET",
  },
  valuationUrl: {
    url: valuationUrl,
    method: "GET",
  },
  exchangeRateUrl: {
    url: exchangeRateUrl,
    method: "GET",
  },
  ratioUrl1H: {
    url: ratioUrl1H,
    method: "GET",
  },
  ratioUrl1D: {
    url: ratioUrl1D,
    method: "GET",
  },
};
```

- Okx统一接口处理
```js
const getOkxApiData = async (params) => {
  const { url, sign, isoDate, isArrRes, errDesc } = params;
  const requestUrl = domain + url;
  return new Promise((resolve, reject) => {
    axios
      .get(
        requestUrl,
        sign
          ? {
              headers: {
                "OK-ACCESS-KEY": APIKEY,
                "OK-ACCESS-SIGN": sign,
                "OK-ACCESS-TIMESTAMP": isoDate,
                "OK-ACCESS-PASSPHRASE": PASSPHRASE,
              },
            }
          : null
      )
      .then((res) => {
        const data = res.data.data;
        data ? resolve(isArrRes ? data : data[0]) : reject("");
      })
      .catch((err) => {
        console.log(err);
        sendErrorMsg({
          title: null,
          desc: `${errDesc} Error`,
        });
      });
  });
};
```

- Okx数据获取
```js
const queryData = async () => {
  // 获取系统时间
  const t = await getOkxApiData({
    url: timeUrl,
    sign: null,
    isoDate: null,
    isArrRes: 0,
    errDesc: "getServerTime",
  });
  const { ts } = t;
  console.log(t, ts);
  let tDate = new Date(ts * 1);
  let isoDate = tDate.toISOString();
  if (isoDate) {
    Object.keys(urlObj).map((key) => {
      urlObj[key]["sign"] = Base64.stringify(
        HmacSHA256(
          isoDate + urlObj[key]["method"] + urlObj[key]["url"],
          SECRETKEY
        )
      );
    });
    // 获取账户余额
    const account = await getOkxApiData({
      url: balanceUrl,
      sign: urlObj["balanceUrl"]["sign"],
      isoDate,
      isArrRes: 0,
      errDesc: "getAccount",
    });
    console.log(account);
    // 获取持仓信息
    const positions = await getOkxApiData({
      url: positionUrl,
      sign: urlObj["positionUrl"]["sign"],
      isoDate,
      isArrRes: 1,
      errDesc: "getPositions",
    });
    console.log(positions);
    // 获取账户资产估值
    const valuation = await getOkxApiData({
      url: valuationUrl,
      sign: urlObj["valuationUrl"]["sign"],
      isoDate,
      isArrRes: 0,
      errDesc: "getValuation",
    });
    console.log(valuation);
    // 获取法币汇率
    const rate = await getOkxApiData({
      url: exchangeRateUrl,
      sign: urlObj["exchangeRateUrl"]["sign"],
      isoDate,
      isArrRes: 0,
      errDesc: "getUsdCny",
    });
    console.log(rate);
    // 获取合约多空持仓人数比
    const ratioD = await getOkxApiData({
      url: ratioUrl1D,
      sign: urlObj["ratioUrl1D"]["sign"],
      isoDate,
      isArrRes: 0,
      errDesc: "getLongShortRatio1D",
    });
    // 获取合约多空持仓人数比
    const ratio = await getOkxApiData({
      url: ratioUrl1H,
      sign: urlObj["ratioUrl1H"]["sign"],
      isoDate,
      isArrRes: 0,
      errDesc: "getLongShortRatio1H",
    });
    console.log(ratio);
    if (ratio) {
      const mkInfo = markdownInfo({
        account,
        valuation,
        rate,
        ratio,
        ratioD,
      });
      const textInfo = textCardInfo({
        valuation,
        positions,
        rate,
        ratio,
        ratioD,
      });
      const positionsInfo = markdownInfo2(positions);
      await wxNotify(textInfo);
      await wxNotify(positionsInfo);
      await wxNotify(mkInfo);
      sendEmailMsg({
        valuation,
        positions,
        rate,
        ratio,
        ratioD,
      });
    } else {
      sendErrorMsg({
        title: null,
        desc: null,
      });
    }
  }
};
```

::: tip 提示
企业微信消息通知请参考[企业微信+邮箱通知基金机器人](https://dearhuan.github.io/notes/wxFundBot.html)
:::

- 邮件消息发送
```js
const sendEmailMsg = (data) => {
  const { valuation, positions, rate, ratio, ratioD } = data;
  const positionStr = positions
    .map((ele) => {
      return `${formatOutPutStr("币种", ele.instId)}
            ${formatOutPutStr("开仓均价", ele.avgPx)}
            ${formatOutPutStr("标记价格", toFixed(ele.markPx))}
            ${formatOutPutStr("未实现收益", toFixed(ele.upl) + "USDT")}`;
    })
    .join("");
  const msg = `<div style="background: linear-gradient(90deg, #1eb2ff, transparent);box-shadow: ${randomRgbaColor()} 0px 0px 10px;">
                  <div style="
                  font-weight: bold;
                  color: #fff;
                  text-align: center;
                  padding: 20px;
                  font-size: 20px;">Okx Helper</div>
                  ${formatOutPutStr("总资产估值", valuation.totalBal + "CNY")}
                  ${formatOutPutStr(
                    "资金账户",
                    valuation.details.funding + "CNY"
                  )}
                  ${formatOutPutStr(
                    "统一账户",
                    valuation.details.trading + "CNY"
                  )}
                  ${formatOutPutStr(
                    "经典账户",
                    valuation.details.classic + "CNY"
                  )}
                  ${formatOutPutStr("金融账户", valuation.details.earn)}
                  ${formatOutPutStr("1H合约多空比", ratio[1])}
                  ${formatOutPutStr("1D合约多空比", ratioD[1])}
                  ${formatOutPutStr("法币汇率", rate.usdCny)}
                  ${positionStr}
                  ${copyRight}
                </div>`;
  sendMail(
    transporter,
    "clearhuan@qq.com",
    msg,
    `【Okx Helper】By Github Actions`
  );
};
```
- 文字卡片消息
```js
const textCardInfo = (data) => {
  const { valuation, positions, rate, ratio, ratioD } = data;
  const valuationStr = `总资产估值：${valuation.totalBal}CNY
资金账户：${valuation.details.funding}CNY
统一账户：${valuation.details.trading}CNY
经典账户：${valuation.details.classic}CNY
金融账户：${valuation.details.earn}CNY
1H合约多空比：${ratio[1]}
1D合约多空比：${ratioD[1]}
法币汇率：${rate.usdCny}`;
  const positionStr = positions
    .map((ele) => {
      return `\n币种：${ele.instId}
开仓均价：${ele.avgPx}
标记价格：${toFixed(ele.markPx)}
未实现收益：${toFixed(ele.upl)} USDT
      `;
    })
    .join("");
  const description = `${valuationStr}\n
${positionStr}`;
  const title = "Okx Tips";

  return {
    msgtype: "textcard",
    textcard: {
      title,
      description,
      url: "https://api.vvhan.com/api/60s",
      btntxt: "详情",
    },
  };
};
```
- Markdown消息
```js
const markdownInfo = (data) => {
  const { account, valuation, rate, ratio, ratioD } = data;

  const valuationStr = `>总资产估值：<font color=\"info\">${valuation.totalBal}CNY</font>
  资金账户：<font color=\"info\">${valuation.details.funding}CNY</font>
  统一账户：<font color=\"info\">${valuation.details.trading}CNY</font>
  经典账户：<font color=\"info\">${valuation.details.classic}CNY</font>
  金融账户：<font color=\"info\">${valuation.details.earn}CNY</font>
  1H合约多空比：<font color=\"info\">${ratio[1]}</font>
  1D合约多空比：<font color=\"info\">${ratioD[1]}</font>
  法币汇率：<font color=\"info\">${rate.usdCny}</font>
  `;

  const accountStr = account.details
    .map((ele) => {
      return `\n>币种：<font color=\"info\">${ele.ccy}</font>
      >总权益：<font color=\"info\">${toFixed(ele.eq)}</font>
      >余额：<font color=\"info\">${toFixed(ele.cashBal)}</font>
      >可用保证金：<font color=\"info\">${toFixed(ele.availEq)}</font>
      >折算权益：<font color=\"info\">${toFixed(ele.disEq)}</font>
      >占用金额：<font color=\"info\">${toFixed(ele.frozenBal)}</font>
      >挂单冻结数量：<font color=\"info\">${ele.ordFrozen}</font>
      >保证金率：<font color=\"info\">${toFixed(ele.mgnRatio * 100)}%</font>
      >杠杆倍数：<font color=\"info\">${toFixed(ele.notionalLever)}</font>
      >未实现盈亏：<font color=\"info\">${toFixed(ele.upl)}</font>
      >更新时间：<font color=\"info\">${toTimeStr(ele.uTime)}</font>
      `;
    })
    .join("");
  const markdown = `>**Okx Balance Tips**
                    ${valuationStr}
                    ${accountStr}`;
  return {
    msgtype: "markdown",
    markdown: {
      content: markdown,
    },
  };
};
```

- Markdown消息
```js
const markdownInfo2 = (data) => {
  const positionStr = data
    .map((ele) => {
      return `\n>币种：<font color=\"warning\">${ele.instId}</font>
    >产品类型：<font color=\"info\">${instType[ele.instType]}-${
        mgnMode[ele.mgnMode]
      }</font>
    >持仓方向：<font color=\"info\">${posSide[ele.posSide]}</font>
    >持仓数量：<font color=\"info\">${ele.pos}</font>
    >开仓均价：<font color=\"info\">${ele.avgPx}</font>
    >未实现收益：<font color=\"info\">${toFixed(ele.upl)} USDT</font>
    >杠杆倍数：<font color=\"info\">${ele.lever}</font>
    >预估强平价：<font color=\"info\">${ele.liqPx ? ele.liqPx : "- -"}</font>
    >标记价格：<font color=\"info\">${toFixed(ele.markPx)}</font>
    >最新成交价：<font color=\"info\">${toFixed(ele.last)}</font>
    >保证金率：<font color=\"info\">${toFixed(ele.mgnRatio * 100)}%</font>`;
    })
    .join("");
  const markdown = `>**Okx Position Tips**
                    ${positionStr}`;
  return {
    msgtype: "markdown",
    markdown: {
      content: markdown,
    },
  };
};
```

