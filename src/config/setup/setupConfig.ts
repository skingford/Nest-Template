/*
 * @Author: kingford
 * @Date: 2021-09-08 00:47:41
 * @LastEditTime: 2021-09-11 17:18:41
 */
import { TypeOrmModule } from '@nestjs/typeorm';
import type { INestApplication } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { useEnvConfig } from '@/config/hooks/useEnvConfig';

const ENTITY_DIR = __dirname + '/../../**/*.entity{.ts,.js}';
export const API_PREFIX = process.env.API_PREFIX || '/';

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
    load: [useEnvConfig],
    envFilePath: ['.env', loadEnvFile()],
  });
}

// 配置连接数据库
function setupTypeORM() {
  return TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => {
      const { type, host, port, username, password, database, synchronize } =
        config.get('db');

      return {
        type,
        host,
        port,
        username,
        password,
        database,
        entities: [ENTITY_DIR],
        logging: true,
        synchronize, // 同步数据库
        timezone: '+08:00', // 东八区
        cache: {
          duration: 60000, // 1分钟的缓存
        },
        extra: {
          poolMax: 32,
          poolMin: 16,
          queueTimeout: 60000,
          pollPingInterval: 60, // 每隔60秒连接
          pollTimeout: 60, // 连接有效60秒
        },
      };
    },
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
export const CONFIG_LIST = [setupConfigModule(), setupTypeORM()];
