/*
 * @Author: kingford
 * @Date: 2021-09-17 22:59:25
 * @LastEditTime: 2021-09-17 23:57:14
 */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Logger } from '@/utils/log';

// TODO: 日志，错误处理，进一步封装
class HttpRequest {
  private readonly baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl;
  }

  private getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {},
    };
    return config;
  }

  private mergeOptions(source, target) {
    if (typeof target !== 'object' || target == null) {
      return source;
    }
    return Object.assign(source, target);
  }

  // 请求拦截
  interceptors(instance: AxiosInstance, url: string | number | undefined = '') {
    instance.interceptors.request.use(
      (config) => {
        console.log('axios request url:', url);
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      },
    );
    //响应拦截
    instance.interceptors.response.use(
      (res) => {
        //返回数据
        const { data } = res;
        return data;
      },
      (error: any) => {
        Logger.error(error);
        console.log('error==>', error);
        return Promise.reject(error);
      },
    );
  }

  get(url: string, params?: any) {
    this.request({
      url,
      params,
      method: 'get',
    });
  }

  post(url: string, data?: any) {
    this.request({
      url,
      data,
      method: 'post',
    });
  }

  request(options: AxiosRequestConfig) {
    const instance = axios.create();
    const config = this.mergeOptions(this.getInsideConfig(), options);
    this.interceptors(instance, config.url);
    return instance(config);
  }
}

export const http = new HttpRequest();
export const request = http.request.bind(http);
