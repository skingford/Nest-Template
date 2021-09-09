/*
 * @Author: kingford
 * @Date: 2021-09-05 09:58:20
 * @LastEditTime: 2021-09-09 23:48:52
 */
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsRepository } from '@/modules/posts/repositories/postRepository';
import { PostEntity } from './entities/posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostsRepository, PostEntity])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
