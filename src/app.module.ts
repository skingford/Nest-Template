/*
 * @Author: kingford
 * @Date: 2021-09-07 23:55:18
 * @LastEditTime: 2021-09-09 20:49:03
 */
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/posts/posts.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CONFIG_LIST } from '@/config';

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
