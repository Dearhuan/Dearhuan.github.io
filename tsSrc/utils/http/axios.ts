import type { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import type { RequestOptions, Result, UploadFileParams } from './types/axios'
import type { CreateAxiosOptions } from './axiosTransform'
import axios from 'axios'
import { AxiosCanceler } from './axiosCancel'
import { isFunction } from '../is'
import { RequestEnum, ContentTypeEnum } from './enums/httpEnums'

export class VAxios {
  private axiosInstance: AxiosInstance;
  private readonly options: CreateAxiosOptions;

  constructor(options: CreateAxiosOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options)
    this.setupInterceptors()
  }

  private createAxios(config: CreateAxiosOptions): void {
    this.axiosInstance = axios.create(config)
  }

  private getTransform() {
    const { transform } = this.options
    return transform
  }

  getAxios(): AxiosInstance {
    return this.axiosInstance
  }

  configAxios(config: CreateAxiosOptions) {
    if(!this.axiosInstance){
      return
    }
    this.createAxios(config)
  }

  setHeader(headers: any): void {
    if(!this.axiosInstance){
      return
    }
    Object.assign(this.axiosInstance.defaults.headers, headers)
  }

  private setupInterceptors() {
    const transform = this.getTransform()
    if(!transform){
      return
    }
    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch
    } = transform

    const axiosCanceler = new AxiosCanceler()

    this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      // @ts-ignore
      const { ignoreCancelToken } = config.requestOptions
      const ignoreCancel = 
        ignoreCancelToken !== undefined
          ? ignoreCancelToken
          : this.options.requestOptions?.ignoreCancelToken
      !ignoreCancel && axiosCanceler.addPending(config)
      if(requestInterceptors && isFunction(requestInterceptors)){
        config = requestInterceptors(config, this.options)
      }
      return config
    }, undefined)

    requestInterceptorsCatch &&
     isFunction(requestInterceptorsCatch) &&
      this.axiosInstance.interceptors.request.use(undefined, requestInterceptorsCatch)

    this.axiosInstance.interceptors.response.use((res: AxiosResponse<any>) => {
      res && axiosCanceler.removePending(res.config)
      if(responseInterceptors && isFunction(responseInterceptors)){
        res = responseInterceptors(res)
      }
      return res
    }, undefined)

    responseInterceptorsCatch &&
     isFunction(responseInterceptorsCatch) &&
      this.axiosInstance.interceptors.response.use(undefined, responseInterceptorsCatch) 
  }

  uploadFile<T = any>(config: AxiosRequestConfig, params: UploadFileParams) {
    const formData = new window.FormData()
    const customFilename = params.name || 'file'

    if(params.filename) {
      formData.append(customFilename, params.file, params.filename)
    }else {
      formData.append(customFilename, params.file)
    }

    if(params.data) {
      Object.keys(params.data).forEach(key => {
        const value = params.data![key]
        if(Array.isArray(value)){
          value.forEach(item => {
            formData.append(`${key}[]`, item)
          })
          return
        }
        formData.append(key, params.data![key])
      })
    }

    return this.axiosInstance.request<T>({
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

  request<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    let conf: AxiosRequestConfig = config
    const transform = this.getTransform()

    const { requestOptions } = this.options
    const opt: RequestOptions = Object.assign({}, requestOptions, options)

    const { beforeRequestHook, requestCatchHook, transformRequestHook } = transform || {}
    if(beforeRequestHook && isFunction(beforeRequestHook)){
      conf = beforeRequestHook(conf, opt)
    }
    // @ts-ignore
    conf.requestOptions = opt

    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          if(transformRequestHook && isFunction(transformRequestHook)){
            try {
              const ret = transformRequestHook(res, opt)
              resolve(ret)
            } catch (error) {
              reject(error || new Error('request error!'))
            }
            return
          }
          resolve(res as unknown as Promise<T>)
        })
        .catch((e: Error | AxiosError) => {
          if(requestCatchHook && isFunction(requestCatchHook)){
            reject(requestCatchHook(e, opt))
            return
          }
          reject(e)
        })
    })
  }

  get<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T>{
    return this.request({ ...config, method: RequestEnum.GET }, options)
  }
  post<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T>{
    return this.request({ ...config, method: RequestEnum.POST }, options)
  }
  put<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T>{
    return this.request({ ...config, method: RequestEnum.PUT }, options)
  }
  delete<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T>{
    return this.request({ ...config, method: RequestEnum.DELETE }, options)
  }
}