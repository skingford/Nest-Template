/*
 * @Author: kingford
 * @Date: 2021-09-06 08:39:06
 * @LastEditTime: 2021-09-08 21:33:02
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
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateDto, UpdateDto } from './dto';
import { PostsService } from './posts.service';
import { Posts } from '@/modules/posts/entities/posts.entity';

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<Posts[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Posts> {
    return this.postsService.findOne(id);
  }

  @Post()
  async create(@Body() createDto: CreateDto): Promise<Posts> {
    return this.postsService.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateDto,
  ) {
    this.postsService.update(id, updateDto);
    return updateDto;
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    this.postsService.remove(id);
    return { id };
  }
}
