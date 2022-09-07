"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VAxios = void 0;
const axios_1 = __importDefault(require("axios"));
const axiosCancel_1 = require("./axiosCancel");
const is_1 = require("../is");
const httpEnums_1 = require("./enums/httpEnums");
class VAxios {
    axiosInstance;
    options;
    constructor(options) {
        this.options = options;
        this.axiosInstance = axios_1.default.create(options);
        this.setupInterceptors();
    }
    createAxios(config) {
        this.axiosInstance = axios_1.default.create(config);
    }
    getTransform() {
        const { transform } = this.options;
        return transform;
    }
    getAxios() {
        return this.axiosInstance;
    }
    configAxios(config) {
        if (!this.axiosInstance) {
            return;
        }
        this.createAxios(config);
    }
    setHeader(headers) {
        if (!this.axiosInstance) {
            return;
        }
        Object.assign(this.axiosInstance.defaults.headers, headers);
    }
    setupInterceptors() {
        const transform = this.getTransform();
        if (!transform) {
            return;
        }
        const { requestInterceptors, requestInterceptorsCatch, responseInterceptors, responseInterceptorsCatch } = transform;
        const axiosCanceler = new axiosCancel_1.AxiosCanceler();
        this.axiosInstance.interceptors.request.use((config) => {
            // @ts-ignore
            const { ignoreCancelToken } = config.requestOptions;
            const ignoreCancel = ignoreCancelToken !== undefined
                ? ignoreCancelToken
                : this.options.requestOptions?.ignoreCancelToken;
            !ignoreCancel && axiosCanceler.addPending(config);
            if (requestInterceptors && is_1.isFunction(requestInterceptors)) {
                config = requestInterceptors(config, this.options);
            }
            return config;
        }, undefined);
        requestInterceptorsCatch &&
            is_1.isFunction(requestInterceptorsCatch) &&
            this.axiosInstance.interceptors.request.use(undefined, requestInterceptorsCatch);
        this.axiosInstance.interceptors.response.use((res) => {
            res && axiosCanceler.removePending(res.config);
            if (responseInterceptors && is_1.isFunction(responseInterceptors)) {
                res = responseInterceptors(res);
            }
            return res;
        }, undefined);
        responseInterceptorsCatch &&
            is_1.isFunction(responseInterceptorsCatch) &&
            this.axiosInstance.interceptors.response.use(undefined, responseInterceptorsCatch);
    }
    uploadFile(config, params) {
        const formData = new window.FormData();
        const customFilename = params.name || 'file';
        if (params.filename) {
            formData.append(customFilename, params.file, params.filename);
        }
        else {
            formData.append(customFilename, params.file);
        }
        if (params.data) {
            Object.keys(params.data).forEach(key => {
                const value = params.data[key];
                if (Array.isArray(value)) {
                    value.forEach(item => {
                        formData.append(`${key}[]`, item);
                    });
                    return;
                }
                formData.append(key, params.data[key]);
            });
        }
        return this.axiosInstance.request({
            ...config,
            method: httpEnums_1.RequestEnum.POST,
            data: formData,
            headers: {
                'Content-type': httpEnums_1.ContentTypeEnum.FORM_DATA,
                // @ts-ignore
                ignoreCancelToken: true
            }
        });
    }
    request(config, options) {
        let conf = config;
        const transform = this.getTransform();
        const { requestOptions } = this.options;
        const opt = Object.assign({}, requestOptions, options);
        const { beforeRequestHook, requestCatchHook, transformRequestHook } = transform || {};
        if (beforeRequestHook && is_1.isFunction(beforeRequestHook)) {
            conf = beforeRequestHook(conf, opt);
        }
        // @ts-ignore
        conf.requestOptions = opt;
        return new Promise((resolve, reject) => {
            this.axiosInstance
                .request(conf)
                .then((res) => {
                if (transformRequestHook && is_1.isFunction(transformRequestHook)) {
                    try {
                        const ret = transformRequestHook(res, opt);
                        resolve(ret);
                    }
                    catch (error) {
                        reject(error || new Error('request error!'));
                    }
                    return;
                }
                resolve(res);
            })
                .catch((e) => {
                if (requestCatchHook && is_1.isFunction(requestCatchHook)) {
                    reject(requestCatchHook(e, opt));
                    return;
                }
                reject(e);
            });
        });
    }
    get(config, options) {
        return this.request({ ...config, method: httpEnums_1.RequestEnum.GET }, options);
    }
    post(config, options) {
        return this.request({ ...config, method: httpEnums_1.RequestEnum.POST }, options);
    }
    put(config, options) {
        return this.request({ ...config, method: httpEnums_1.RequestEnum.PUT }, options);
    }
    delete(config, options) {
        return this.request({ ...config, method: httpEnums_1.RequestEnum.DELETE }, options);
    }
}
exports.VAxios = VAxios;
