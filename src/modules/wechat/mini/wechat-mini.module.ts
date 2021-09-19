/*
 * @Author: kingford
 * @Date: 2021-09-17 00:30:01
 * @LastEditTime: 2021-09-19 10:11:14
 */
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MiniUserRepository } from './repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MiniUserRepository]), ConfigModule],
  controllers: [UserController],
  providers: [UserService],
})
export class WeChatMiniModule {}
