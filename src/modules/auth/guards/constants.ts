/*
 * @Author: kingford
 * @Date: 2021-09-08 00:17:37
 * @LastEditTime: 2021-09-16 23:08:57
 */
import { SetMetadata } from '@nestjs/common';

export const jwtConstants = {
  secret: 'ywKUGAskcISG2NYq',
  expiresIn: 3, // 3 分钟内过期
};

export const IS_PUBLIC_KEY = 'isPublic';
export const SkipJwtAuth = () => SetMetadata(IS_PUBLIC_KEY, true);
