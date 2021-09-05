/*
 * @Author: kingford
 * @Date: 2021-09-05 09:59:23
 * @LastEditTime: 2021-09-05 11:21:20
 */
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post, Param, HttpCode } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  findAll(): string {
    return 'This action returns all posts';
  }

  @Get(':id')
  @HttpCode(204)
  findOne(@Param() param): string {
    return 'This action returns all posts' + param.id;
  }

  @Post()
  create(): string {
    return 'This action adds a new post';
  }
}
