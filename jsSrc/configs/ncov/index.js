'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.readFileList =
  exports.Exclude_Countrys =
  exports.SINA_URL =
  exports.jsonFilePath =
  exports.base =
  exports.mdPath =
  exports.rootPath =
    void 0
const fs_1 = __importDefault(require('fs'))
const path_1 = __importDefault(require('path'))
exports.rootPath = path_1.default.resolve(__dirname, '../../../')
exports.mdPath = exports.rootPath + '/docs/others'
exports.base = 'others'
exports.jsonFilePath =
  exports.rootPath + '/docs/.vuepress/public/json/others.json'
exports.SINA_URL =
  'https://gwpre.sina.cn/ncp/foreign?_=1584421324452&callback=sinajp_15844213244528328543098388435'
exports.Exclude_Countrys = ['中国']
/**
 * @func readFileList
 * @param {string} path
 * @returns {object}
 * @desc 读取指定目录下的md文件
 */
const readFileList = (path) => {
  const filesList = []
  const files = fs_1.default.readdirSync(path)
  for (const name of files) {
    name.indexOf('.md') > -1 &&
      filesList.push({
        text: name,
        link: `/${exports.base}/${name}`
      })
  }
  return filesList
}
exports.readFileList = readFileList
