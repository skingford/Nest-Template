/*
 * @Author: kingford
 * @Date: 2021-09-20 00:16:33
 * @LastEditTime: 2021-09-20 13:15:22
 */
import {
  ProfileBase,
  Profile,
  AutoMapper,
  InjectMapper,
} from 'nestjsx-automapper';
import { GetPostsDto, GetListPostsDto } from '../dto';
import { PostEntity } from '../entities/post.entity';

@Profile()
export class PostsProfile extends ProfileBase {
  constructor(@InjectMapper() mapper: AutoMapper) {
    super();
    mapper.createMap(PostEntity, GetPostsDto);
    mapper.createMap(PostEntity, GetListPostsDto);
  }
}
