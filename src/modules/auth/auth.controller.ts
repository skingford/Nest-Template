/*
 * @Author: kingford
 * @Date: 2021-09-08 00:17:37
 * @LastEditTime: 2021-09-11 23:11:40
 */
import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { SkipJwtAuth } from './guards/constants';
import { LoginDto } from './dto/LoginDto';

@ApiTags('登录验证')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBody({ type: LoginDto })
  @SkipJwtAuth()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
