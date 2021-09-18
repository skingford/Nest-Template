/*
 * @Author: kingford
 * @Date: 2021-09-17 22:59:25
 * @LastEditTime: 2021-09-18 15:21:54
 */
import qs from 'qs';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Logger } from '@/utils/log';
import { Result, RequestOptions } from '#/axios';
import { ContentTypeEnum, RequestEnum } from '@/common/enums/httpEnum';

export interface CreateAxiosOptions extends AxiosRequestConfig {
  urlPrefix?: string;
  authenticationScheme?: string;
  requestOptions?: RequestOptions;
}

// TODO: 日志，错误处理，进一步封装
export class HttpClient {
  private options: CreateAxiosOptions;
  private axiosInstance: AxiosInstance;

  constructor(options) {
    this.options = options;
    this.createAxios(options);
    this.setupInterceptors();
  }

  // 创建实例
  private createAxios(config): void {
    this.axiosInstance = axios.create(config);
  }

  // 设置头部
  setHeader(headers: any): void {
    if (!this.axiosInstance) {
      return;
    }
    Object.assign(this.axiosInstance.defaults.headers, headers);
  }

  // 合并对象
  private mergeOptions(source, target) {
    if (typeof target !== 'object' || target == null) {
      return source;
    }
    return Object.assign(source, target);
  }

  private setupInterceptors() {
    // 请求拦截
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        console.log('request.interceptors.config:', config);
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      },
    );
    //响应拦截
    this.axiosInstance.interceptors.response.use(
      (res: AxiosResponse<any>) => {
        console.log('request.response.config.res:', res);
        //返回数据
        const { data } = res;
        return data;
      },
      (error: any) => {
        console.log('request.response.config.error:', error);
        Logger.error(error);
        return Promise.reject(error);
      },
    );
  }

  // support form-data
  supportFormData(config: AxiosRequestConfig) {
    const headers = config.headers || this.options.headers;
    const contentType = headers?.['Content-Type'] || headers?.['content-type'];

    if (
      contentType !== ContentTypeEnum.FORM_URLENCODED ||
      !Reflect.has(config, 'data') ||
      config.method?.toUpperCase() === RequestEnum.GET
    ) {
      return config;
    }

    return {
      ...config,
      data: qs.stringify(config.data, { arrayFormat: 'brackets' }),
    };
  }

  get<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
  ): Promise<T> {
    return this.request({ ...config, method: 'GET' }, options);
  }

  post<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
  ): Promise<T> {
    return this.request({ ...config, method: 'POST' }, options);
  }

  put<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
  ): Promise<T> {
    return this.request({ ...config, method: 'PUT' }, options);
  }

  delete<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
  ): Promise<T> {
    return this.request({ ...config, method: 'DELETE' }, options);
  }

  request<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
  ): Promise<T> {
    let conf: CreateAxiosOptions = this.mergeOptions({}, config);
    const { requestOptions } = this.options;
    const opt: RequestOptions = this.mergeOptions(requestOptions, options);

    conf.requestOptions = opt;
    conf = this.supportFormData(conf);

    return new Promise((resolve, reject) => {
      return this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res) => {
          resolve(res as unknown as Promise<T>);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
