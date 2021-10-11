/*
 * @Author: kingford
 * @Date: 2021-09-17 12:35:15
 * @LastEditTime: 2021-10-11 20:58:22
 */
import {
  Injectable,
  ForbiddenException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getAuthUrl } from '@/modules/wechat/mini/utils';
import { WechatMiniUser } from '@/modules/wechat/mini/entities/user.entity';
import { MiniUserRepository } from '@/modules/wechat/mini/repositories/user.repository';
import { CreateMiniUserDto, UpdateMiniUserDto } from './dto';
import { defHttp } from '@/utils/http';
import { Logger } from '@/utils/log';
import { WECHAT_MINI_KEY } from '@/config';

import {
  WeChat,
  ApiConfigKit,
  QyApiConfigKit,
  AccessToken,
  QyAccessTokenApi,
  Kits,
  HttpKit,
  MiniProgramApi,
  ApiConfig,
} from 'tnwx';

@Injectable()
export class UserService {
  constructor(
    private userRepository: MiniUserRepository,
    private config: ConfigService,
  ) {}

  async findAll(): Promise<WechatMiniUser[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<WechatMiniUser> {
    return this.userRepository.findOne(id);
  }

  async update(id: string, updateDto: UpdateMiniUserDto): Promise<any> {
    const user = await this.findOne(id);
    if (!user) {
      throw new HttpException(`${id}用户不存在`, HttpStatus.OK);
    }
    const { nickname, phone } = updateDto;
    return this.userRepository.update(id, {
      nickname,
      phone,
    });
  }

  async remove(id: string): Promise<string> {
    const user = await this.findOne(id);
    if (!user) {
      throw new HttpException(`${id}用户不存在`, HttpStatus.OK);
    }

    const {
      raw: { affectedRows },
    } = await this.userRepository.softDelete(id);

    return affectedRows ? '删除成功' : '删除失败';
  }

  // 创建微信用户
  async create(createDto: CreateMiniUserDto): Promise<WechatMiniUser> {
    const { openid, unionid, session_key } = createDto;
    const user = new WechatMiniUser(openid, session_key, unionid);
    return this.userRepository.save(user);
  }

  // 微信用户登录
  async login(code: string): Promise<WechatMiniUser> {
    // 1. 获取微信授权信息
    //const wxSession = await this.getWxSession(code);
    const wxSession = await this.code2Session(code);

    console.log('tn.info:', wxSession);

    // 2. 通过openid判断用户是否注册，已注册直接返回用户信息，否则注册用户
    const { openid } = wxSession;
    const user = await this.userRepository.findOne({
      openid,
    });

    // 3. 用户已注册，直接返回用户信息
    if (user) {
      return user;
    }
    // 4. 用户未注册，创建用户
    return this.create(wxSession);
  }

  // 获取微信授权信息
  async getWxSession(code: string): Promise<CreateMiniUserDto> {
    // 获取配置appid, secret信息
    const config = this.config.get(WECHAT_MINI_KEY);
    const { appid, secret } = config;
    // 发起微信授权请求
    const url = getAuthUrl({ appid, secret, code });
    const wxSession = await defHttp.get({ url });
    if (wxSession.errcode) {
      const msg = `${wxSession.errcode}:${wxSession.errmsg}`;
      Logger.error('获取微信openId失败：' + msg);
      throw new HttpException(msg, HttpStatus.OK);
    }
    return wxSession;
  }

  async code2Session(code: string): Promise<CreateMiniUserDto> {
    const config = this.config.get(WECHAT_MINI_KEY);
    const { appid, secret } = config;

    const devApiConfig = new ApiConfig(appid, secret, 'jinwechatsecrecttoken');

    // 微信公众号、微信小程序、微信小游戏 支持多应用
    ApiConfigKit.putApiConfig(devApiConfig);

    // 开启开发模式,方便调试
    ApiConfigKit.devMode = true;

    // 设置当前应用
    ApiConfigKit.setCurrentAppId(devApiConfig.getAppId);

    const wxSession = await MiniProgramApi.code2Session(
      ApiConfigKit.getAppId,
      ApiConfigKit.getApiConfig.getAppScrect,
      code,
    );

    if (wxSession.errcode) {
      const msg = `${wxSession.errcode}:${wxSession.errmsg}`;
      Logger.error('获取微信openId失败：' + msg);
      throw new HttpException(msg, HttpStatus.OK);
    }

    return wxSession;
  }

  async signature(): Promise<string> {
    const signature = 'bc404eedffb75c8d3cf3346acaf92466a7a793a1';
    const rawData =
      '{"nickName":"Javen","gender":1,"language":"zh_CN","city":"Shenzhen","province":"Guangdong","country":"China","avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/icc2nhPAgI52Yx52hWXknQzYC122WeVIAoE1F9Tia3ZFmj8TUEr6M4rY10GDf4qTFT9RvdM3icDibq9BQ7kooYMW5g/132"}';
    const session_key = 'syOEZf6faXl3JqAKh9FfvQ==';
    const iv = 'wGZm1/t99wRHb4oiwDbybQ==';
    const encryptedData =
      'r9UTG7Yo3xlXZ1++2atDr/7So5b+GevtC4ZkxXeL+vCjYoMp50YB004IcCuPdbZlzd06Pvx0Yd6B92188ttbvkhCYb2uE8Wa8Nr1a/M72984gHj37TX4dX5f8/IMAXGqSPOMVjx14LZPMg8YDFYY5lUlYtHRvsOLl8zboZ9fR2B5+p3juPsnzyxuZZkUHYclRJ3qQzffZHMrelP7IHdMbUHVmsgpfwJc5Is6zhSpi/DKjHJxdIfHjl0wusP1Dy55WymSfxUfaEi63Fln9m8fUXF0mZprbFGl54sxKdabQuaQIL7aeETpMhNEmWBdtIetTuC3bkfBXLlW1b/JkUjBRdU2ZF4tRKHT24I6LnwfQMmXrEcbHA0JdU2CvU/TeF+iqYud4mgo115THVy76jxIPJXm65zbLuUVG6CvzOUSEOyWVSNQ7nbcwA3qrDiEuL4nYPusyoQpsZCxs+FUTEImmATD12R0/6Q1N557Ica59Wo=';
    const key = Buffer.from(session_key, 'base64');
    const baseIv = Buffer.from(iv, 'base64');

    const signature2 = Kits.sha1(rawData + session_key);
    if (signature2 === signature) {
      const ecrypt = Kits.aes128cbcDecrypt(key, baseIv, encryptedData);
      return ecrypt;
    }
    throw new HttpException('签名失败', HttpStatus.OK);
  }
}
