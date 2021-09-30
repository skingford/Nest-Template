/*
 * @Author: kingford
 * @Date: 2021-09-08 00:47:41
 * @LastEditTime: 2021-09-30 20:30:06
 */

import type { INestApplication } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  AutomapperModule,
  CamelCaseNamingConvention,
} from 'nestjsx-automapper';

import { API_PREFIX } from '@/main';
import configuration from '../configuration';
import { setupTypeORM } from './setupORM';

// 加载环境配置文件
const loadEnvFile = () => {
  const envMap = {
    development: '.env.development',
    production: '.env.production',
  };
  return envMap[process.env.NODE_ENV];
};

// 加载配置
function setupConfigModule() {
  return ConfigModule.forRoot({
    load: [configuration],
    envFilePath: ['.env', loadEnvFile()],
  });
}

// 注册mapper
export function setupMapper() {
  return AutomapperModule.withMapper({
    // sourceNamingConvention: PascalCaseNamingConvention,
    destinationNamingConvention: CamelCaseNamingConvention,
    useUndefined: true,
    skipUnmappedAssertion: true,
    throwError: true,
  });
}

// 注册app全局配置
export function setupAppConfig(app: INestApplication) {
  //允许跨域请求
  app.enableCors();

  // 给请求添加prefix
  app.setGlobalPrefix(API_PREFIX);
}

// 注册全局配置列表
export const CONFIG_LIST = [setupConfigModule(), setupTypeORM(), setupMapper()];
