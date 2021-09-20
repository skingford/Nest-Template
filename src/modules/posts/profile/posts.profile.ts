/*
 * @Author: kingford
 * @Date: 2021-09-20 00:16:33
 * @LastEditTime: 2021-09-20 09:30:42
 */
import {
  ProfileBase,
  Profile,
  AutoMapper,
  InjectMapper,
  ignore,
} from 'nestjsx-automapper';
import { GetPostsDto, GetListPostsDto } from '../dto';
import { PostEntity } from '../entities/posts.entity';

@Profile()
export class PostsProfile extends ProfileBase {
  constructor(@InjectMapper() mapper: AutoMapper) {
    super();
    mapper.createMap(PostEntity, GetPostsDto);
    mapper
      .createMap(PostEntity, GetListPostsDto)
      .forMember((dest) => dest.title, ignore());
  }
}
