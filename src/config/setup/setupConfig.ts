/*
 * @Author: kingford
 * @Date: 2021-09-08 00:47:41
 * @LastEditTime: 2021-09-11 15:38:10
 */
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { useEnvConfig } from '@/config/hooks/useEnvConfig';

const DOCKER_ENV = process.env.DOCKER_ENV;
const ENTITY_DIR = __dirname + '/../../**/*.entity{.ts,.js}';

// 加载配置文件
function setupConfigModule() {
  return ConfigModule.forRoot({
    load: [useEnvConfig],
    envFilePath: [DOCKER_ENV ? '.docker.env' : '.env'],
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

      console.log('cwd-root:', process.cwd());
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

export const CONFIG_LIST = [setupConfigModule(), setupTypeORM()];
