export class AxiosTransform {
  /**
   * @description: Process configuration before request
   * @description: Process configuration before request
   */
  beforeRequestHook
  /**
   * @description: Request successfully processed
   */
  transformRequestHook
  /**
   * @description: 请求失败处理
   */
  requestCatchHook
  /**
   * @description: 请求之前的拦截器
   */
  requestInterceptors
  /**
   * @description: 请求之后的拦截器
   */
  responseInterceptors
  /**
   * @description: 请求之前的拦截器错误处理
   */
  requestInterceptorsCatch
  /**
   * @description: 请求之后的拦截器错误处理
   */
  responseInterceptorsCatch
}
