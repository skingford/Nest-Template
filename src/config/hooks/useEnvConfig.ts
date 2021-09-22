/*
 * @Author: kingford
 * @Date: 2021-09-08 00:40:25
 * @LastEditTime: 2021-09-22 09:13:02
 */
import { APP_KEY, REDIS_KEY, WECHAT_MINI_KEY, DB_KEY } from '../constant';

export const useEnvConfig = () => {
  // env 读取的是环境变量多为字符串
  const { env } = process;

  return {
    [APP_KEY]: {
      port: env.HOST_PORT || 3000,
    },
    [DB_KEY]: {
      type: env.TYPEORM_CONNECTION,
      database: env.TYPEORM_DATABASE,
      host: env.TYPEORM_HOST,
      port: parseInt(env.TYPEORM_PORT, 10) || 3306,
      username: env.TYPEORM_USERNAME,
      password: env.TYPEORM_PASSWORD,
      synchronize: env.TYPEORM_SYNC === 'true' ? true : false,
    },
    [REDIS_KEY]: {
      host: env.REDIS_HOST,
      port: parseInt(env.REDIS_PORT) || 6379,
    },
    [WECHAT_MINI_KEY]: {
      appid: env.WECHAT_MINI_APPID,
      secret: env.WECHAT_MINI_SECRET,
    },
  };
};
