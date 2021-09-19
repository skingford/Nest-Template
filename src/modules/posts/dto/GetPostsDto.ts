/*
 * @Author: kingford
 * @Date: 2021-09-19 23:25:18
 * @LastEditTime: 2021-09-20 00:57:41
 */
import { AutoMap } from '@nartc/automapper';

export class GetPostsDto {
  @AutoMap()
  id: string;

  @AutoMap()
  title: string;

  // @AutoMap()
  // content: string;
}
