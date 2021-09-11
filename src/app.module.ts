/*
 * @Author: kingford
 * @Date: 2021-09-07 23:55:18
 * @LastEditTime: 2021-09-11 20:52:48
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/posts/posts.module';
import { CONFIG_LIST } from '@/config';
import { UserModule } from '@/modules/user/user.module';
import { AuthModule } from '@/modules/auth/auth.module';

const MODULE_LIST = [UserModule, AuthModule, PostsModule];

@Module({
  imports: [...CONFIG_LIST, ...MODULE_LIST],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
