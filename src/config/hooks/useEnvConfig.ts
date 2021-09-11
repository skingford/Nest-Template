/*
 * @Author: kingford
 * @Date: 2021-09-08 00:40:25
 * @LastEditTime: 2021-09-11 16:09:09
 */
import { env } from '@/config/env';

export const useEnvConfig = () => {
  const { APP_PORT } = process.env;
  const combineEnv = { ...env, app: { port: APP_PORT } };
  console.log('combineEnv：', combineEnv);
  return combineEnv;
};
