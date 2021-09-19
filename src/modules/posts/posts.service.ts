import { Logger } from './../../utils/log/log4js';
/*
 * @Author: kingford
 * @Date: 2021-09-08 23:16:36
 * @LastEditTime: 2021-09-20 00:59:08
 */
import { Injectable } from '@nestjs/common';
import { PostEntity } from '@/modules/posts/entities/posts.entity';
import { PostsRepository } from '@/modules/posts/repositories/postRepository';
import { CreateDto, UpdateDto, GetPostsDto } from './dto';
import { AutoMapper } from '@nartc/automapper';
import { InjectMapper } from 'nestjsx-automapper';

@Injectable()
export class PostsService {
  constructor(
    private postsRepository: PostsRepository,
    @InjectMapper() private readonly mapper: AutoMapper,
  ) {}

  async create(createDto: CreateDto): Promise<PostEntity> {
    const { title, content } = createDto;
    const posts = new PostEntity();
    posts.title = title;
    posts.content = content;
    return this.postsRepository.save(posts);
  }

  async findAll(): Promise<PostEntity[]> {
    return this.postsRepository.find();
  }

  async findOne(id: string): Promise<any> {
    const posts = await this.postsRepository.findOne(id);
    return this.mapper.map(posts, GetPostsDto, PostEntity);
  }

  async update(id: string, updateDto: UpdateDto) {
    const { title, content } = updateDto;

    return this.postsRepository.update(id, {
      title,
      content,
    });
  }

  async remove(id: string) {
    return this.postsRepository.softDelete(id);
  }
}
