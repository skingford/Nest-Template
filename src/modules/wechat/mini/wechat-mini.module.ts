/*
 * @Author: kingford
 * @Date: 2021-09-17 00:30:01
 * @LastEditTime: 2021-09-18 00:25:42
 */
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MiniUserRepository } from './repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MiniUserRepository]), ConfigModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class WeChatMiniModule {}
