/*
 * @Author: kingford
 * @Date: 2021-09-17 01:10:33
 * @LastEditTime: 2021-09-18 00:26:17
 */

import { EntityRepository, Repository } from 'typeorm';
import { WechatMiniUser } from '@/modules/wechat/mini/entities/user.entity';

@EntityRepository(WechatMiniUser)
export class MiniUserRepository extends Repository<WechatMiniUser> {}
