# Ts封装Axios

## Axios几个常用类型

- AxiosRequestConfig

AxiosRequestConfig是我们使用axios发送请求传递参数的类型。当然它也是我们请求拦截器里面的参数类型。
```ts
axios(config: AxiosRequestConfig)
```
可以看到，这个config里面的参数还是挺多的。我们常用的有url、method、params、data、headers、baseURL、timeout。
```ts
export interface AxiosRequestConfig {
  // `url` 是用于请求的服务器 URL
  url?: string;
  
  // `method` 是创建请求时使用的方法
  method?: Method;
  
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL?: string;
  
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest?: AxiosTransformer | AxiosTransformer[];
  
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse?: AxiosTransformer | AxiosTransformer[];
  
  // `headers` 是即将被发送的自定义请求头
  headers?: any;
  
  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params?: any;
  
  // `paramsSerializer` 是一个负责 `params` 序列化的函数
  paramsSerializer?: (params: any) => string;
  
  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data?: any;
  
  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout?: number;
  
  // 超时提示消息
  timeoutErrorMessage?: string;
  
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials?: boolean;
  
  // `adapter` 允许自定义处理请求，以使测试更轻松
  adapter?: AxiosAdapter;
  
  // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  auth?: AxiosBasicCredentials;
  
  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType?: ResponseType;
  
  // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  xsrfCookieName?: string;
  
  // `xsrfHeaderName` 是携带 xsrf 令牌值的 http 标头的名称
  xsrfHeaderName?: string;
  
  // `onUploadProgress` 允许为上传处理进度事件
  onUploadProgress?: (progressEvent: any) => void;
  
  // `onDownloadProgress` 允许为下载处理进度事件
  onDownloadProgress?: (progressEvent: any) => void;
  
  // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength?: number;
  
  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
  // 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，
  // promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus?: ((status: number) => boolean) | null;
  
  // 请求体最大尺寸
  maxBodyLength?: number;
  
  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects?: number;
  
  // `socketPath` 定义了一个在 node.js 中使用的 UNIX Socket。
  // 只能指定 `socketPath` 或 `proxy`。
  // 如果两者都指定，则使用 `socketPath`。
  socketPath?: string | null;
  
  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。
  httpAgent?: any;
  httpsAgent?: any;
  
  // 'proxy' 定义代理服务器的主机名称和端口
  proxy?: AxiosProxyConfig | false;
  
  // `cancelToken` 指定用于取消请求的 cancel token
  cancelToken?: CancelToken;
  
  // 将其设置为`false`，它将不会解压缩您的响应，而是保留原始的Content-Encoding头。
  // 默认是true
  decompress?: boolean;
  
  // 控制响应数据是否转换
  transitional?: TransitionalOptions
}
```
- AxiosInstance

AxiosInstance是我们使用axios实例对象类型。

我们使用axios.create(config?: AxiosRequestConfig)创建出来的对象都是AxiosInstance类型
```ts
export interface AxiosInstance {
  (config: AxiosRequestConfig): AxiosPromise;
  (url: string, config?: AxiosRequestConfig): AxiosPromise;
  defaults: AxiosRequestConfig;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
  getUri(config?: AxiosRequestConfig): string;
  request<T = any, R = AxiosResponse<T>> (config: AxiosRequestConfig): Promise<R>;
  
  // 拥有如下便捷方法
  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  patch<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
}
```
可以发现，我们可以使用axios.create、axios.all、axios.spread方法，但是AxiosInstance 上并没有create、all、spread等方法，那我们的axios到底是什么类型呢？

- AxiosStatic
```ts
export interface AxiosStatic extends AxiosInstance {
  create(config?: AxiosRequestConfig): AxiosInstance;
  Cancel: CancelStatic;
  CancelToken: CancelTokenStatic;
  isCancel(value: any): boolean;
  
  // 并发请求
  all<T>(values: (T | Promise<T>)[]): Promise<T[]>;
  // 切分并发结果
  spread<T, R>(callback: (...args: T[]) => R): (array: T[]) => R;
  isAxiosError(payload: any): payload is AxiosError;
}

declare const axios: AxiosStatic;
```
可以发现，axios其实是AxiosStatic类型，并且继承了AxiosInstance类型。所以是两者的结合。相较axios.create(config?: AxiosRequestConfig)创建出来的实例对象，axios功能是更强大的。

- AxiosResponse

AxiosResponse是非常重要的，我们的axios请求返回值类型都是AxiosResponse类型。并且我们可以发现AxiosResponse是一个接口泛型，这个泛型会应用到后端返回的data上。所以这块我们可以根据后端接口返回定义不同的类型传递进去。后面笔者在封装常用方法的时候会细说。
```ts
export interface AxiosResponse<T = any>  {
  // 后端接口数据
  data: T;
  // http状态码
  status: number;
  // 来自服务器响应的 HTTP 状态信息
  statusText: string;
  // 响应头
  headers: any;
  // 请求配置信息
  config: AxiosRequestConfig;
  // 请求
  request?: any;
}
```
- AxiosError

AxiosError这个类型也是我们必须要知道的。在我们响应拦截器里面的错误就是AxiosError类型。
```ts
export interface AxiosError<T = any> extends Error {
  config: AxiosRequestConfig;
  code?: string;
  request?: any;
  response?: AxiosResponse<T>;
  isAxiosError: boolean;
  toJSON: () => object;
}
```

## 基础封装

```ts
import axios from 'axios';
import type { AxiosInstance ,AxiosRequestConfig, AxiosResponse } from 'axios';

type Result<T> = {
  code: number;
  message: string;
  result: T;
}

export class Request {
  instance: AxiosInstance;
  baseConfig: AxiosRequestConfig = {
    baseURL: '/api',
    timeout: 60000
  };

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config));

    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const token = localStorage.getItem('token')
        if(token){
          config.headers!.Authorization = token
        }
        return config
      },
      (err: any) => {
        return Promise.reject(err)
      }
    );

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res;
      },
      (err: any) => {
        let message = ''
        switch (err.response.status) {
          case 400:
            message = "请求错误(400)";
            break;
          case 401:
            message = "未授权，请重新登录(401)";
            // 这里可以做清空storage并跳转到登录页的操作
            break;
          case 403:
            message = "拒绝访问(403)";
            break;
          case 404:
            message = "请求出错(404)";
            break;
          case 408:
            message = "请求超时(408)";
            break;
          case 500:
            message = "服务器错误(500)";
            break;
          case 501:
            message = "服务未实现(501)";
            break;
          case 502:
            message = "网络错误(502)";
            break;
          case 503:
            message = "服务不可用(503)";
            break;
          case 504:
            message = "网络超时(504)";
            break;
          case 505:
            message = "HTTP版本不受支持(505)";
            break;
          default:
            message = `连接出错(${err.response.status})!`;
        };
        return Promise.reject(err.response)
      }
    );
  }

  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config);
  }

  public get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>>{
    return this.instance.get(url, config)
  }

  public post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>>{
    return this.instance.post(url, data, config)
  }

  public put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>>{
    return this.instance.put(url, data, config)
  }

  public delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>>{
    return this.instance.delete(url, config)
  }
}

export default new Request({})
```