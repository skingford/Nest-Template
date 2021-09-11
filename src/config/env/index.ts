/*
 * @Author: kingford
 * @Date: 2021-09-11 15:45:43
 * @LastEditTime: 2021-09-11 15:56:24
 */
import * as dev from './env.dev';
import * as prop from './env.prod';

const configs = {
  development: dev,
  production: prop,
};

export const env = configs[process.env.NODE_ENV || 'development'].default;
