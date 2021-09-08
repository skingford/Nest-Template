/*
 * @Author: kingford
 * @Date: 2021-09-08 21:11:47
 * @LastEditTime: 2021-09-08 21:13:06
 */
import { EntityRepository, Repository } from 'typeorm';
import { PostsEntity } from '@/modules/posts/entities/posts.entity';

@EntityRepository(PostsEntity)
export class PostsRepository extends Repository<PostsEntity> {}
