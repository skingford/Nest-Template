/*
 * @Author: kingford
 * @Date: 2021-09-17 00:34:26
 * @LastEditTime: 2021-09-17 00:56:17
 */
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SkipJwtAuth } from '@/modules/auth/guards/constants';
import { LoginDto } from './dto/LoginDto';

@Controller('wechat-mini')
@SkipJwtAuth()
@ApiTags('wechat-mini')
export class AuthController {
  @Post('/auth')
  @ApiOperation({ summary: '微信授权', description: '微信授权' })
  async login(@Body() login: LoginDto) {
    return login;
  }
}
