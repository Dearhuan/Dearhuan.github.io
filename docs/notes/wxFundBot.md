# 如何搭建一款企业微信+邮箱通知基金机器人

![wxFundbot](/images/wxFundbot.png)

::: tip 前提条件
企业微信通知需要注册企业微信应用，获取企业ID、应用ID、应用秘钥等
:::

- 模块导入
```js
const axios = require("axios");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
```

- 常量定义
```js
const user = "xxx@xxx.com";
const pass = "xxxxxxxxxxx"; //邮箱授权码
const fundURL = "http://fundgz.1234567.com.cn/js/";
const fundDetailURL = "https://m.1234567.com.cn/index.html?page=jjxq&code=";
const qyweixinUrl = "https://qyapi.weixin.qq.com";
const copyRight = `<p style="margin: 0;padding: 0; text-align:center; color: #ee55aa;font-size:15px; line-height: 80px;">copyright© Dearhuan 2020-2022 All Right Reserved</p>`;
const fundObj = {
  "005918": 11268.82,
  161726: 4922.62,
  161725: 7172.82,
  "003096": 575.96,
  "001513": 244.95,
  "005827": 1423.95,
  "003984": 1295.13,
  "001875": 1457.99,
};

let upFundNum = 0;
let totalFundMoney = 0;

let transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 587,
  secure: false,
  auth: {
    user: user,
    pass: pass,
  },
});

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Shanghai");

dotenv.config();

const { WX_COMPANY_ID, WX_APP_ID, WX_APP_SECRET } = process.env;
```

- 邮件发送
```js
const sendMail = (transporter, to, htmlData, subject) => {
  return new Promise((resolve, reject) => {
    let mailOptions = {
      from: `<${user}>`,
      to: `<${to}>`,
      subject: subject,
      html: htmlData,
    };
    transporter.sendMail(mailOptions, (error, info = {}) => {
      if (error) {
        console.error("邮件发送异常" + error);
        reject(error);
      } else {
        console.log("邮件发送成功", info.messageId);
        console.log("静等下一次发送");
        resolve();
      }
    });
  });
};
```

- 根据企业ID、应用secret 获取token
```js
const getToken = async ({ id, secret }) => {
  try {
    const response = await axios({
      url: `${qyweixinUrl}/cgi-bin/gettoken?corpid=${id}&corpsecret=${secret}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.log(error);
    return "";
  }
};
```

- 发送消息通知到企业微信
```js
const postMsg = async (accessToken, config) => {
  const response = await axios({
    url: `${qyweixinUrl}/cgi-bin/message/send?access_token=${accessToken}`,
    method: "POST",
    data: {
      touser: config.touser || "@all",
      ...config,
    },
  });
  return response.data;
};
```

- 企业微信消息通知
```js
const wxNotify = async (config) => {
  try {
    // 获取token
    const accessToken = await getToken({
      id: WX_COMPANY_ID,
      secret: WX_APP_SECRET,
    });
    // 发送消息
    const defaultConfig = {
      msgType: "text",
      agentid: WX_APP_ID,
      ...config,
    };
    const option = { ...defaultConfig, ...config };
    const res = await postMsg(accessToken, option);
    console.log("wx:信息发送成功！", res);
    return true;
  } catch (error) {
    console.log("wx:信息发送失败！", error);
    return false;
  }
};
```

- 获取基金数据
```js
const getFundInfo = (fundCode) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${fundURL}${fundCode}.js`)
      .then((res) => {
        res.data ? resolve(res.data) : reject("error");
      })
      .catch((err) => {
        reject(err);
      });
  });
};
```

- 设置定时自动执行
> 新建一个github workflow&创建.yml文件
```yml
name: wxFundBot
on:
  workflow_dispatch:
  schedule:
    #时间格式 minute hour day month week 设置的时间是UTC 不是北京时间
    - cron: "10 9 * * *"

jobs:
  start:
    # 运行环境为最新版的Ubuntu
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2  

      #安装node.js
      - name: Setup Node.js
        uses: actions/setup-node@v2  
        with:
          node-version: '14'

      # 安装依赖并且执行脚本
      - name: npm install
        run: npm install
      
      - name: Start task
        run: node index.js
```