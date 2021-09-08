/*
 * @Author: kingford
 * @Date: 2021-09-05 09:58:20
 * @LastEditTime: 2021-09-08 21:15:55
 */
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsRepository } from '@/db/repositories/postRepository';

@Module({
  imports: [TypeOrmModule.forFeature([PostsRepository])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
