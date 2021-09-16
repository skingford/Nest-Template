/*
 * @Author: kingford
 * @Date: 2021-09-11 19:23:34
 * @LastEditTime: 2021-09-16 23:11:52
 */
import { Role } from '@/common/enums';
import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
