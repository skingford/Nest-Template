/*
 * @Author: kingford
 * @Date: 2021-09-17 00:34:26
 * @LastEditTime: 2021-09-18 17:35:38
 */
/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Controller,
  Body,
  Param,
  Post,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SkipJwtAuth } from '@/modules/auth/guards/constants';
import { AuthService } from './auth.service';
import { WechatMiniUser } from '@/modules/wechat/mini/entities/user.entity';
import { LoginMiniDto, UpdateMiniUserDto } from './dto';

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

  @Get('/user')
  @ApiOperation({ summary: '获取用户信息', description: '获取用户信息' })
  async findAll(): Promise<WechatMiniUser[]> {
    return this.authService.findAll();
  }

  @Get('/user/:id')
  @ApiOperation({
    summary: '通过id获取用户信息',
    description: '通过id获取用户信息',
  })
  async findOne(@Param('id') id: string): Promise<WechatMiniUser> {
    return this.authService.findOne(id);
  }

  @Put('/user/:id')
  @ApiOperation({
    summary: '更新用户信息',
    description: '更新用户信息',
  })
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateMiniUserDto,
  ): Promise<any> {
    return this.authService.update(id, updateDto);
  }

  @Delete('/user/:id')
  @ApiOperation({
    summary: '删除用户信息',
    description: '删除用户信息',
  })
  async remove(@Param('id') id: string): Promise<any> {
    return this.authService.remove(id);
  }
}
