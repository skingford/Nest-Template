/*
 * @Author: kingford
 * @Date: 2021-09-06 08:39:06
 * @LastEditTime: 2021-09-06 08:44:57
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
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { CreateDto, UpdateDto } from './dto';
import { PostsService } from './posts.service';
@Controller('posts')
@ApiUseTags('帖子')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): string {
    return 'This action returns all posts';
  }

  @Get('/error')
  error() {
    //throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      },
      HttpStatus.FORBIDDEN,
    );
  }

  @Get(':id')
  @HttpCode(204)
  findOne(@Param() param): string {
    return 'This action returns all posts' + param.id;
  }

  @Post()
  create(@Body() createDto: CreateDto): string {
    console.log(createDto);
    this.postsService.create(createDto);
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
