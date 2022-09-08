import axios from 'axios'
import { isFunction } from '../is'
let pendingMap = new Map()
export const getPendingUrl = (config) => [config.method, config.url].join('&')
export class AxiosCanceler {
  addPending(config) {
    this.removePending(config)
    const url = getPendingUrl(config)
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!pendingMap.has(url)) {
          pendingMap.set(url, cancel)
        }
      })
  }
  removePending(config) {
    const url = getPendingUrl(config)
    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url)
      cancel && cancel(url)
      pendingMap.delete(url)
    }
  }
  removeAllPending() {
    pendingMap.forEach((cancel) => {
      cancel && isFunction(cancel) && cancel()
    })
    pendingMap.clear()
  }
  reset() {
    pendingMap = new Map()
  }
}
