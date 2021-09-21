/*
 * @Author: kingford
 * @Date: 2021-09-11 19:23:34
 * @LastEditTime: 2021-09-21 10:43:42
 */
import { RoleEnum } from '@/common/enums';
import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: RoleEnum[]) => SetMetadata(ROLES_KEY, roles);
