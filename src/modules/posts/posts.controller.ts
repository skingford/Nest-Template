/*
 * @Author: kingford
 * @Date: 2021-09-06 08:39:06
 * @LastEditTime: 2021-09-19 23:38:19
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
import { ApiTags, ApiOperation, ApiDefaultResponse } from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { PostEntity } from '@/modules/posts/entities/posts.entity';
import { SkipJwtAuth } from '@/modules/auth/guards/constants';
import { CreateDto, UpdateDto, GetPostsDto } from './dto';

@Controller('posts')
@SkipJwtAuth()
@ApiTags('帖子')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({ summary: '获取帖子', description: '获取帖子列表' })
  @Get()
  async findAll(): Promise<PostEntity[]> {
    return this.postsService.findAll();
  }

  @ApiOperation({ summary: '获取帖子', description: '获取帖子详情' })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<GetPostsDto> {
    return this.postsService.findOne(id);
  }

  @Post()
  async create(@Body() createDto: CreateDto): Promise<PostEntity> {
    return this.postsService.create(createDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateDto) {
    this.postsService.update(id, updateDto);
    return updateDto;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    this.postsService.remove(id);
    return { id };
  }
}
