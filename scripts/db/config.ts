/*
 * @Author: kingford
 * @Date: 2021-09-08 00:17:37
 * @LastEditTime: 2021-09-10 00:50:50
 */
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';
const ENTITY_DIR = __dirname + '/../../src/**/*.entity{.ts,.js}';

const ormConfig: ConnectionOptions = {
  type: 'mysql',
  database: 'jin-nest-dev',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  entities: [ENTITY_DIR],
};

export default ormConfig;
