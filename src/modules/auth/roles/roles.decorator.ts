/*
 * @Author: kingford
 * @Date: 2021-09-11 19:23:34
 * @LastEditTime: 2021-09-11 23:11:56
 */
import { Role } from './roles.interface';
import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
