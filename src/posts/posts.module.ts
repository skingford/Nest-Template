/*
 * @Author: kingford
 * @Date: 2021-09-05 09:58:20
 * @LastEditTime: 2021-09-05 09:59:51
 */
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
/*
 * @Author: kingford
 * @Date: 2021-09-05 09:58:20
 * @LastEditTime: 2021-09-05 09:58:27
 */
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
