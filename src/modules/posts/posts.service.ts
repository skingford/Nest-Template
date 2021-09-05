/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Posts } from './interface/post.interface';
@Injectable()
export class PostsService {
  private readonly posts: Posts[] = [];

  create(posts: Posts) {
    this.posts.push(posts);
    console.log(this.posts);
  }

  findAll(): Posts[] {
    return this.posts;
  }
}
