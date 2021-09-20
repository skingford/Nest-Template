/*
 * @Author: kingford
 * @Date: 2021-09-19 23:19:20
 * @LastEditTime: 2021-09-20 09:31:25
 */
/*
 * @Author: kingford
 * @Date: 2021-09-05 23:08:30
 * @LastEditTime: 2021-09-12 14:48:39
 */
import { AutoMap } from '@nartc/automapper';

export class GetListPostsDto {
  @AutoMap()
  id: string;

  @AutoMap()
  title: string;

  @AutoMap()
  content: string;
}
