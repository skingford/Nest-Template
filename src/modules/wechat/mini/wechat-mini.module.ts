/*
 * @Author: kingford
 * @Date: 2021-09-17 00:30:01
 * @LastEditTime: 2021-09-17 12:49:44
 */
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { ConfigModule } from '@nestjs/config';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [ConfigModule],
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
})
export class WeChatMiniModule {}
