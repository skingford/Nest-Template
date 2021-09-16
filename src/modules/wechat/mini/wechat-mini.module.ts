/*
 * @Author: kingford
 * @Date: 2021-09-17 00:30:01
 * @LastEditTime: 2021-09-17 00:58:10
 */
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService],
})
export class WeChatMiniModule {}
