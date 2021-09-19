/*
 * @Author: kingford
 * @Date: 2021-09-17 00:34:26
 * @LastEditTime: 2021-09-19 10:14:25
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
import { WechatMiniUser } from '@/modules/wechat/mini/entities';
import { UserService } from './user.service';
import { LoginMiniDto, UpdateMiniUserDto } from './dto';

@Controller('wechat-mini')
@SkipJwtAuth()
@ApiTags('wechat-mini')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/login')
  @ApiOperation({ summary: '微信用户登录', description: '微信用户登录' })
  async login(@Body() login: LoginMiniDto): Promise<WechatMiniUser> {
    return this.userService.login(login.code);
  }

  @Get('/user')
  @ApiOperation({ summary: '获取微信用户信息', description: '获取用户信息' })
  async findAll(): Promise<WechatMiniUser[]> {
    return this.userService.findAll();
  }

  @Get('/user/:id')
  @ApiOperation({
    summary: '微信用户信息',
    description: '通过id获取微信用户信息',
  })
  async findOne(@Param('id') id: string): Promise<WechatMiniUser> {
    return this.userService.findOne(id);
  }

  @Put('/user/:id')
  @ApiOperation({
    summary: '更新微信用户信息',
    description: '更新微信用户信息',
  })
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateMiniUserDto,
  ): Promise<any> {
    return this.userService.update(id, updateDto);
  }

  @Delete('/user/:id')
  @ApiOperation({
    summary: '删除微信用户信息',
    description: '删除微信用户信息',
  })
  async remove(@Param('id') id: string): Promise<string> {
    return this.userService.remove(id);
  }
}
