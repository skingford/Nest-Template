/*
 * @Author: kingford
 * @Date: 2021-09-11 15:45:31
 * @LastEditTime: 2021-09-11 16:10:49
 */

export default {
  db: {
    type: 'mysql',
    database: 'jin-nest-prod',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456',
    synchronize: false,
  },
  redis: {
    host: '127.0.0.1',
    port: 6379,
  },
};
