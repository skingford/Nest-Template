/*
 * @Author: kingford
 * @Date: 2021-09-08 00:47:41
 * @LastEditTime: 2021-09-09 17:31:08
 */
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { useEnvConfig } from '../hooks/useEnvConfig';
const DOCKER_ENV = process.env.DOCKER_ENV;

export function setupConfigModule() {
  return ConfigModule.forRoot({
    load: [useEnvConfig],
    envFilePath: [DOCKER_ENV ? '.docker.env' : '.env'],
  });
}

export function setupTypeORM() {
  return TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      const { host, port, username, password, database } =
        configService.get('db');

      console.log(configService.get('db'));

      return {
        type: 'mysql',
        // .env 获取
        host,
        port,
        username,
        password,
        database,
        entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
        synchronize: false,
      };
    },
  });
}
