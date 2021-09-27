/*
 * @Author: kingford
 * @Date: 2021-09-27 20:26:07
 * @LastEditTime: 2021-09-27 20:30:56
 */
export default () => ({
  app: {
    port: process.env.HOST_PORT || 3000,
  },
  database: {
    type: process.env.TYPEORM_CONNECTION,
    database: process.env.TYPEORM_DATABASE,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT, 10) || 3306,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    synchronize: process.env.TYPEORM_SYNC === 'true' ? true : false,
  },
  wechatMini: {
    appid: process.env.WECHAT_MINI_APPID,
    secret: process.env.WECHAT_MINI_SECRET,
  },
});
