'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.AxiosCanceler = exports.getPendingUrl = void 0
const axios_1 = __importDefault(require('axios'))
const is_1 = require('../is')
let pendingMap = new Map()
const getPendingUrl = (config) => [config.method, config.url].join('&')
exports.getPendingUrl = getPendingUrl
class AxiosCanceler {
  addPending(config) {
    this.removePending(config)
    const url = (0, exports.getPendingUrl)(config)
    config.cancelToken =
      config.cancelToken ||
      new axios_1.default.CancelToken((cancel) => {
        if (!pendingMap.has(url)) {
          pendingMap.set(url, cancel)
        }
      })
  }
  removePending(config) {
    const url = (0, exports.getPendingUrl)(config)
    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url)
      cancel && cancel(url)
      pendingMap.delete(url)
    }
  }
  removeAllPending() {
    pendingMap.forEach((cancel) => {
      cancel && (0, is_1.isFunction)(cancel) && cancel()
    })
    pendingMap.clear()
  }
  reset() {
    pendingMap = new Map()
  }
}
exports.AxiosCanceler = AxiosCanceler
