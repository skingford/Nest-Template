/*
 * @Author: kingford
 * @Date: 2021-09-22 08:54:35
 * @LastEditTime: 2021-09-30 20:30:27
 */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CONFIG_LIST } from '@/config';
import { SharedModule } from '@/modules/shared/shared.module';
import { PostsModule } from '@/modules/posts/posts.module';
import { UserModule } from '@/modules/user/user.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { WeChatMiniModule } from '@/modules/wechat/mini/wechat-mini.module';
import { Connection } from 'typeorm';

const MODULE_LIST = [
  SharedModule,
  UserModule,
  AuthModule,
  PostsModule,
  WeChatMiniModule,
];

@Module({
  imports: [...CONFIG_LIST, ...MODULE_LIST],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {
    console.log('app.connection:', connection);
  }
}
