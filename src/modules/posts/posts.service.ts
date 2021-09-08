/*
 * @Author: kingford
 * @Date: 2021-09-08 23:16:36
 * @LastEditTime: 2021-09-08 23:50:32
 */
import { Injectable } from '@nestjs/common';
import { PostEntity } from '@/modules/posts/entities/posts.entity';
import { PostsRepository } from '@/db/repositories/postRepository';
import { CreateDto, UpdateDto } from './dto';

@Injectable()
export class PostsService {
  constructor(private postsRepository: PostsRepository) {}

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

  async findOne(id: number): Promise<PostEntity> {
    return this.postsRepository.findOne(id);
  }

  async update(id: number, updateDto: UpdateDto) {
    const { title, content } = updateDto;

    return this.postsRepository.update(id, {
      title,
      content,
    });
  }

  async remove(id: number) {
    return this.postsRepository.delete({
      id,
    });
  }
}
