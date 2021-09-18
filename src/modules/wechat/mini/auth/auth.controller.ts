/*
 * @Author: kingford
 * @Date: 2021-09-17 00:34:26
 * @LastEditTime: 2021-09-18 15:59:21
 */
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SkipJwtAuth } from '@/modules/auth/guards/constants';
import { AuthService } from './auth.service';
import { LoginMiniDto } from './dto/LoginMiniDto';
import { WechatMiniUser } from '@/modules/wechat/mini/entities/user.entity';

@Controller('wechat-mini')
@SkipJwtAuth()
@ApiTags('wechat-mini')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @ApiOperation({ summary: '微信授权', description: '微信授权' })
  async login(@Body() login: LoginMiniDto): Promise<WechatMiniUser> {
    return this.authService.login(login.code);
  }
}
