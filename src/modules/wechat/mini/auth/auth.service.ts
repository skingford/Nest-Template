/*
 * @Author: kingford
 * @Date: 2021-09-17 12:35:15
 * @LastEditTime: 2021-09-18 00:42:18
 */
import { Injectable, ForbiddenException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getSessionUrl } from '@/modules/wechat/mini/utils';
import { WechatMiniUser } from '@/modules/wechat/mini/entities/user.entity';
import { MiniUserRepository } from '@/modules/wechat/mini/repositories/user.repository';
import { CreateDto } from './dto';
import { request } from '@/utils/http';
import { Logger } from '@/utils/log';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: MiniUserRepository,
    private config: ConfigService,
  ) {}

  async create(createDto: CreateDto): Promise<WechatMiniUser> {
    const { openid, unionid, session_key } = createDto;
    const user = new WechatMiniUser(openid, session_key, unionid);
    return this.userRepository.save(user);
  }

  async login(code: string): Promise<any> {
    const config = this.config.get('wechatMini');
    const { appid, secret } = config;

    // 1. 通过code获取openid
    const authUrl = getSessionUrl({ appid, secret, code });
    const wxSession = await request({
      url: authUrl,
      method: 'get',
    });

    console.log('wxSession:', wxSession);

    if (wxSession.errcode) {
      const msg = `${wxSession.errcode}:${wxSession.errmsg}`;
      Logger.error(msg);
      throw new ForbiddenException(msg);
    }

    // 2. 通过openid判断用户是否存在，存在直接返回用户信息，不存在则创建用户
    const user = await this.userRepository.findOne({
      openid: wxSession.openid,
    });

    if (user) {
      return user;
    }

    return this.create(wxSession);
  }
}
