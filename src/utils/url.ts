/*
 * @Author: kingford
 * @Date: 2021-05-19 23:04:18
 * @LastEditTime: 2021-05-19 23:37:06
 */
import * as url from 'url';

/**
 * @Author: 水痕
 * @Date: 2021-03-22 11:11:55
 * @LastEditors: 水痕
 * @Description: 根据key从一段url中获取query值
 * @param {string} urlPath url地址
 * @param {string} key 获取单独的一个key
 * @return {*}
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const getUrlQuery = (urlPath: string, key?: string): string | object | undefined => {
  const query = url.parse(urlPath, true).query;
  if (key) {
    return query[key];
  } else {
    return query;
  }
};
