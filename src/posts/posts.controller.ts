/*
 * @Author: kingford
 * @Date: 2021-09-05 09:59:23
 * @LastEditTime: 2021-09-05 13:13:47
 */
/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  HttpCode,
  Body,
} from '@nestjs/common';
import { CreateDto, UpdateDto } from './dto';

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
  create(@Body() createDto: CreateDto): string {
    console.log(createDto);
    return 'This action adds a new post';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateDto) {
    console.log(updateDto);
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
