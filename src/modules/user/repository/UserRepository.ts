/*
 * @Author: kingford
 * @Date: 2021-09-09 23:45:41
 * @LastEditTime: 2021-09-09 23:45:41
 */
import { EntityRepository, Repository } from 'typeorm';
import { User } from '@/modules/user/entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}
