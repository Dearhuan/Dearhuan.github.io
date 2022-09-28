---
prev: /notes/OkxHelper.md
next: /notes/autoUpdateNcovBlog.md
---
# 搭建一款天气数据推送机器人

![weather](/images/weather.png)

::: tip 前提条件
企业微信通知需要注册企业微信应用，获取企业ID、应用ID、应用秘钥等
:::

::: warning 提示
企业微信消息通知请参考[企业微信+邮箱通知基金机器人](https://dearhuan.github.io/notes/wxFundBot.html)
:::

- 模块导入
```js
const axios = require("axios");
const dotenv = require("dotenv");
const cheerio = require("cheerio");
const superagent = require("superagent");
const nodemailer = require("nodemailer");

dotenv.config();
```
- 常量定义
```js
const qyweixinUrl = "https://qyapi.weixin.qq.com";
const weatherUrl =
  "https://v0.yiketianqi.com/api?unescape=1&version=v61&appid=43656176&appsecret=I42og6Lm";

const mojiUrl = "https://tianqi.moji.com/weather/china/";

const cityObj = {
  guangzhou: "广州",
};

dotenv.config();

const { WX_COMPANY_ID, WX_APP_ID, WX_APP_SECRET, TIAN_API_KEY } = process.env;
```

- 请求封装
```js
const fetch = (url, method, params, data, cookies) => {
  return new Promise(function (resolve, reject) {
    superagent(method, url)
      .query(params)
      .send(data)
      .set("Content-Type", "application/x-www-form-urlencoded")
      .end(function (err, response) {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
  });
};
```
- 天气数据获取
```js
const getWeather = async (city, location) => {
  //获取墨迹天气
  let url = mojiUrl + city + "/" + location;
  let res = await fetch(url, "GET");
  let $ = cheerio.load(res.text);

  let addressText = $(".search_default")
    .text()
    .trim()
    .split("， ")
    .reverse()
    .join("-");
  let weatherTip = $(".wea_tips em").text();

  const now = $(".wea_weather.clearfix");

  let nowInfo = {
    Temp: now.find("em").text(),
    WeatherText: now.find("b").text(),
    FreshText: now.find(".info_uptime").text(),
    Humidity: $(".wea_about.clearfix").find("span").text(),
    Wind: $(".wea_about.clearfix").find("em").text(),
  };

  let threeDaysData = [];

  $(".forecast .days").each(function (i, elem) {
    const SingleDay = $(elem).find("li");
    threeDaysData.push({
      Day: $(SingleDay[0])
        .text()
        .replace(/(^\s*)|(\s*$)/g, ""),
      WeatherImgUrl: $(SingleDay[1]).find("img").attr("src"),
      WeatherText: $(SingleDay[1])
        .text()
        .replace(/(^\s*)|(\s*$)/g, ""),
      Temperature: $(SingleDay[2])
        .text()
        .replace(/(^\s*)|(\s*$)/g, ""),
      WindDirection: $(SingleDay[3])
        .find("em")
        .text()
        .replace(/(^\s*)|(\s*$)/g, ""),
      WindLevel: $(SingleDay[3])
        .find("b")
        .text()
        .replace(/(^\s*)|(\s*$)/g, ""),
      Pollution: $(SingleDay[4])
        .text()
        .replace(/(^\s*)|(\s*$)/g, ""),
      PollutionLevel: $(SingleDay[4]).find("strong").attr("class"),
    });
  });

  return {
    moji: {
      addressText,
      weatherTip,
      nowInfo,
      threeDaysData,
    },
  };
};
```
- 模板消息邮箱发送
```js
const sendEmailMsg = (data) => {
  const {
    moji: { addressText, weatherTip, nowInfo, threeDaysData },
  } = data;

  const str = threeDaysData
    .map((ele) => {
      return formatOutPutStr(
        "",
        `${ele.Day} ${ele.WeatherText} ${ele.Temperature} ${ele.Pollution}`
      );
    })
    .join("");

  const msg = `<div style="background: linear-gradient(180deg, #1eb2ff, transparent);box-shadow: ${randomRgbaColor()} 0px 0px 10px;">
                  <div style="
                  font-weight: bold;
                  color: #fff;
                  text-align: center;
                  padding: 20px;
                  font-size: 20px;">Weather Tips</div>
                  <div style="display:flex;flex-direction:column;align-items:center;">
                    ${formatOutPutStr("城市", `${addressText}`)}
                    ${formatOutPutStr(
                      "天气",
                      `${nowInfo.Temp}℃ ${nowInfo.WeatherText}`
                    )}
                    ${formatOutPutStr("湿度", `${nowInfo.Humidity}`)}
                    ${formatOutPutStr("风向", `${nowInfo.Wind}`)}
                    ${formatOutPutStr("提示", `${weatherTip}`)}
                    ${formatOutPutStr("更新", `${nowInfo.FreshText}`)}
                    ${str}
                  </div>
                  ${copyRight}
                </div>`;
  sendMail(
    transporter,
    "clearhuan@qq.com",
    msg,
    `【Weather Tips】By Github Actions`
  );
};
```
- 企业微信模板消息
```js
// 消息卡片
const textCardTemplate = (data, city, location) => {
  const {
    moji: { addressText, weatherTip, nowInfo, threeDaysData },
  } = data;

  const str = threeDaysData
    .map((ele) => {
      return `\n${ele.Day} ${ele.WeatherText} ${ele.Temperature} ${ele.Pollution}`;
    })
    .join("");

  // 拼接内容
  let description = `${addressText}
天气：${nowInfo.Temp}℃ ${nowInfo.WeatherText}
湿度：${nowInfo.Humidity}
风向：${nowInfo.Wind}
提示：${weatherTip}
更新：${nowInfo.FreshText}
${str}`;

  const title = `${cityObj[location]}天气`;

  return {
    msgtype: "textcard",
    textcard: {
      title,
      description,
      url: `https://tianqi.moji.com/weather/china/${city}/${location}`,
      btntxt: "详情",
    },
  };
};

// Markdown消息
const markDownTemplate = (data, city, location) => {
  const {
    moji: { addressText, weatherTip, nowInfo, threeDaysData },
  } = data;

  const str = threeDaysData
    .map((ele) => {
      return `\n><font color=\"warning\">${ele.Day}</font> ${ele.WeatherText} <font color=\"info\">${ele.Temperature}</font> ${ele.Pollution}`;
    })
    .join("");

  let markdown = `>**${cityObj[location]}天气**
                  >城市：<font color=\"info\">${addressText}</font>
                  >天气：<font color=\"info\">${nowInfo.Temp}℃ ${nowInfo.WeatherText}</font>
                  >湿度：<font color=\"info\">${nowInfo.Humidity}</font>
                  >风向：<font color=\"info\">${nowInfo.Wind}</font>
                  >提示：<font color=\"info\">${weatherTip}</font>
                  >更新：<font color=\"info\">${nowInfo.FreshText}</font>
                  >${str}
                  >
                  >查看更多：[详情](https://tianqi.moji.com/weather/china/${city}/${location})`;

  return {
    msgtype: "markdown",
    markdown: {
      content: markdown,
    },
  };
};
```
