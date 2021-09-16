/*
 * @Author: kingford
 * @Date: 2021-09-17 01:10:33
 * @LastEditTime: 2021-09-17 01:14:57
 */

import { EntityRepository, Repository } from 'typeorm';
import { wechatMiniUser } from '@/modules/wechat/mini/entities/user.entity';

@EntityRepository(wechatMiniUser)
export class UserRepository extends Repository<wechatMiniUser> {}
