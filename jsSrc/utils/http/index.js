'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.defHttp = void 0
const axios_1 = require('./axios')
const createAxios = (opt) => {
  return new axios_1.VAxios(opt || {})
}
exports.defHttp = createAxios()
