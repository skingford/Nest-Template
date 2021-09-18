/*
 * @Author: kingford
 * @Date: 2021-09-18 15:13:57
 * @LastEditTime: 2021-09-18 15:13:57
 */

const toString = Object.prototype.toString;

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object');
}
