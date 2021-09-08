import { Injectable } from '@nestjs/common';
import { Posts } from '@/modules/posts/entities/posts.entity';
import { PostsRepository } from '@/db/repositories/postRepository';
import { CreateDto, UpdateDto } from './dto';

@Injectable()
export class PostsService {
  constructor(private postsRepository: PostsRepository) {}

  async create(createDto: CreateDto): Promise<Posts> {
    const { title, content } = createDto;
    const posts = new Posts();
    posts.title = title;
    posts.content = content;
    return this.postsRepository.save(posts);
  }

  async findAll(): Promise<Posts[]> {
    return this.postsRepository.find();
  }

  async findOne(id: number): Promise<Posts> {
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
