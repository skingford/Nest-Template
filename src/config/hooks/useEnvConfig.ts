/*
 * @Author: kingford
 * @Date: 2021-09-08 00:40:25
 * @LastEditTime: 2021-09-09 21:00:46
 */
export const useEnvConfig = () => {
  const { env } = process;

  return {
    app: {
      port: env.PORT || 3000,
    },
    db: {
      type: env.TYPEORM_CONNECTION,
      database: env.TYPEORM_DATABASE,
      host: env.TYPEORM_HOST,
      port: parseInt(env.TYPEORM_PORT, 10) || 3306,
      username: env.TYPEORM_USERNAME,
      password: env.TYPEORM_PASSWORD,
      synchronize: env.TYPEORM_SYNC,
    },
    redis: {
      host: env.REDIS_HOST,
      port: parseInt(env.REDIS_PORT) || 6379,
    },
  };
};
