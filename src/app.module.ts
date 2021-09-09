/*
 * @Author: kingford
 * @Date: 2021-09-07 23:55:18
 * @LastEditTime: 2021-09-09 18:55:16
 */
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/posts/posts.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { setupConfigModule } from '@/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';

const CONFIG_LIST = [
  setupConfigModule(), // mysql的连接
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => {
      const { host, port, username, password, database } = config.get('db');
      return {
        type: 'mysql',
        host,
        port,
        username,
        password,
        database,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        logging: true,
        synchronize: true, // 同步数据库
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
  }),
];

@Module({
  imports: [...CONFIG_LIST, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('posts');
  }
}
