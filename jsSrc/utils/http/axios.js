import axios from 'axios'
import { AxiosCanceler } from './axiosCancel'
import { isFunction } from '../is'
import { RequestEnum, ContentTypeEnum } from './enums/httpEnums'
export class VAxios {
  axiosInstance
  options
  constructor(options) {
    this.options = options
    this.axiosInstance = axios.create(options)
    this.setupInterceptors()
  }
  createAxios(config) {
    this.axiosInstance = axios.create(config)
  }
  getTransform() {
    const { transform } = this.options
    return transform
  }
  getAxios() {
    return this.axiosInstance
  }
  configAxios(config) {
    if (!this.axiosInstance) {
      return
    }
    this.createAxios(config)
  }
  setHeader(headers) {
    if (!this.axiosInstance) {
      return
    }
    Object.assign(this.axiosInstance.defaults.headers, headers)
  }
  setupInterceptors() {
    const transform = this.getTransform()
    if (!transform) {
      return
    }
    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch
    } = transform
    const axiosCanceler = new AxiosCanceler()
    this.axiosInstance.interceptors.request.use((config) => {
      // @ts-ignore
      const { ignoreCancelToken } = config.requestOptions
      const ignoreCancel =
        ignoreCancelToken !== undefined
          ? ignoreCancelToken
          : this.options.requestOptions?.ignoreCancelToken
      !ignoreCancel && axiosCanceler.addPending(config)
      if (requestInterceptors && isFunction(requestInterceptors)) {
        config = requestInterceptors(config, this.options)
      }
      return config
    }, undefined)
    requestInterceptorsCatch &&
      isFunction(requestInterceptorsCatch) &&
      this.axiosInstance.interceptors.request.use(
        undefined,
        requestInterceptorsCatch
      )
    this.axiosInstance.interceptors.response.use((res) => {
      res && axiosCanceler.removePending(res.config)
      if (responseInterceptors && isFunction(responseInterceptors)) {
        res = responseInterceptors(res)
      }
      return res
    }, undefined)
    responseInterceptorsCatch &&
      isFunction(responseInterceptorsCatch) &&
      this.axiosInstance.interceptors.response.use(
        undefined,
        responseInterceptorsCatch
      )
  }
  uploadFile(config, params) {
    const formData = new window.FormData()
    const customFilename = params.name || 'file'
    if (params.filename) {
      formData.append(customFilename, params.file, params.filename)
    } else {
      formData.append(customFilename, params.file)
    }
    if (params.data) {
      Object.keys(params.data).forEach((key) => {
        const value = params.data[key]
        if (Array.isArray(value)) {
          value.forEach((item) => {
            formData.append(`${key}[]`, item)
          })
          return
        }
        formData.append(key, params.data[key])
      })
    }
    return this.axiosInstance.request({
      ...config,
      method: RequestEnum.POST,
      data: formData,
      headers: {
        'Content-type': ContentTypeEnum.FORM_DATA,
        // @ts-ignore
        ignoreCancelToken: true
      }
    })
  }
  request(config, options) {
    let conf = config
    const transform = this.getTransform()
    const { requestOptions } = this.options
    const opt = Object.assign({}, requestOptions, options)
    const { beforeRequestHook, requestCatchHook, transformRequestHook } =
      transform || {}
    if (beforeRequestHook && isFunction(beforeRequestHook)) {
      conf = beforeRequestHook(conf, opt)
    }
    // @ts-ignore
    conf.requestOptions = opt
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request(conf)
        .then((res) => {
          if (transformRequestHook && isFunction(transformRequestHook)) {
            try {
              const ret = transformRequestHook(res, opt)
              resolve(ret)
            } catch (error) {
              reject(error || new Error('request error!'))
            }
            return
          }
          resolve(res)
        })
        .catch((e) => {
          if (requestCatchHook && isFunction(requestCatchHook)) {
            reject(requestCatchHook(e, opt))
            return
          }
          reject(e)
        })
    })
  }
  get(config, options) {
    return this.request({ ...config, method: RequestEnum.GET }, options)
  }
  post(config, options) {
    return this.request({ ...config, method: RequestEnum.POST }, options)
  }
  put(config, options) {
    return this.request({ ...config, method: RequestEnum.PUT }, options)
  }
  delete(config, options) {
    return this.request({ ...config, method: RequestEnum.DELETE }, options)
  }
}
