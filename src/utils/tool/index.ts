/*
 * @Author: kingford
 * @Date: 2021-09-18 15:13:39
 * @LastEditTime: 2021-09-18 15:14:47
 */

import { isObject } from './is';

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key])
      ? deepMerge(src[key], target[key])
      : (src[key] = target[key]);
  }
  return src;
}
