/*
 * @Author: kingford
 * @Date: 2021-09-05 09:58:20
 * @LastEditTime: 2021-09-30 19:34:47
 */
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsRepository } from '@/modules/posts/repositories/postRepository';
import { PostEntity } from './entities/post.entity';
import './profile/posts.profile';

@Module({
  imports: [TypeOrmModule.forFeature([PostsRepository, PostEntity])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
