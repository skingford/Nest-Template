/*
 * @Author: kingford
 * @Date: 2021-09-08 21:11:47
 * @LastEditTime: 2021-09-08 23:50:52
 */
import { EntityRepository, Repository } from 'typeorm';
import { PostEntity } from '@/modules/posts/entities/post.entity';

@EntityRepository(PostEntity)
export class PostsRepository extends Repository<PostEntity> {}
