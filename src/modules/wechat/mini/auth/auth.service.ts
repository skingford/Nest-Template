/*
 * @Author: kingford
 * @Date: 2021-09-17 12:35:15
 * @LastEditTime: 2021-09-17 12:54:59
 */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { wechatMiniUser } from '@/modules/wechat/mini/entities/user.entity';
import { UserRepository } from '@/modules/wechat/mini/repositories/user.repository';
import { CreateDto } from './dto';
import { getSessionUrl } from '@/modules/wechat/mini/utils';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private config: ConfigService,
  ) {}

  async create(createDto: CreateDto): Promise<wechatMiniUser> {
    const { openid, unionid, session_key } = createDto;
    const user = new wechatMiniUser(openid, session_key, unionid);
    return this.userRepository.save(user);
  }

  async login(code: string): Promise<wechatMiniUser> {
    const config = this.config.get('wechatMini');
    const { appid, secret } = config;
    console.log('config:', config);
    const authUrl = getSessionUrl({ appid, secret, code });

    return { ...config, authUrl };
    // 1. 通过code获取openid
    // 2. 通过openid判断用户是否存在，存在直接返回用户信息，不存在则创建用户
  }
}
