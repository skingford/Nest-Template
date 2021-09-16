/*
 * @Author: kingford
 * @Date: 2021-09-17 00:55:29
 * @LastEditTime: 2021-09-17 01:19:48
 */
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { wechatMiniUser } from '@/modules/wechat/mini/entities/user.entity';
import { UserRepository } from '@/modules/wechat/mini/repositories/user.repository';
import { CreateDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async create(createDto: CreateDto): Promise<wechatMiniUser> {
    const { openid, unionid, session_key } = createDto;
    const user = new wechatMiniUser(openid, session_key, unionid);
    return this.userRepository.save(user);
  }
}
