/*
 * @Author: kingford
 * @Date: 2021-09-12 23:49:51
 * @LastEditTime: 2021-09-17 00:35:23
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CONFIG_LIST } from '@/config';
import { PostsModule } from './modules/posts/posts.module';
import { UserModule } from '@/modules/user/user.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { WeChatMiniModule } from '@/modules/wechat/mini/wechat-mini.module';

const MODULE_LIST = [UserModule, AuthModule, PostsModule, WeChatMiniModule];

@Module({
  imports: [...CONFIG_LIST, ...MODULE_LIST],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
