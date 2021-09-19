/*
 * @Author: kingford
 * @Date: 2021-09-20 00:16:33
 * @LastEditTime: 2021-09-20 00:38:27
 */
import {
  ProfileBase,
  Profile,
  AutoMapper,
  InjectMapper,
} from 'nestjsx-automapper';
import { GetPostsDto } from '../dto';
import { PostEntity } from '../entities/posts.entity';

@Profile()
export class PostsProfile extends ProfileBase {
  constructor(@InjectMapper() mapper: AutoMapper) {
    super();
    mapper.createMap(PostEntity, GetPostsDto);
  }
}
