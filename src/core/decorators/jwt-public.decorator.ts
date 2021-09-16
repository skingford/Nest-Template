/*
 * @Author: kingford
 * @Date: 2021-09-11 23:13:53
 * @LastEditTime: 2021-09-11 23:19:25
 */
import { SetMetadata } from '@nestjs/common';
export const IS_PUBLIC_KEY = 'isPublic';
export const SkipJwtAuth = () => SetMetadata(IS_PUBLIC_KEY, true);
