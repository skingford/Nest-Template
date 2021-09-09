/*
 * @Author: kingford
 * @Date: 2021-09-07 23:55:18
 * @LastEditTime: 2021-09-10 00:12:34
 */
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/posts/posts.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CONFIG_LIST } from '@/config';
import { UserModule } from '@/modules/user/user.module';
import { AuthModule } from '@/modules/auth/auth.module';

const MODULE_LIST = [UserModule, AuthModule, PostsModule];

@Module({
  imports: [...CONFIG_LIST, ...MODULE_LIST],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('posts');
  }
}
