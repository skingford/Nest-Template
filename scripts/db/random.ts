/*
 * @Author: kingford
 * @Date: 2021-09-08 08:46:57
 * @LastEditTime: 2021-09-21 10:46:41
 */
import { User } from '../../src/modules/user/entities/user.entity';
import { Random } from 'mockjs';

export const getInitUsers = () => {
  const admin = new User();
  admin.email = 'admin@admin.com';
  admin.username = 'admin';
  admin.password = 'admin';
  admin.role = 1;

  const user = new User();
  user.email = 'user@admin.com';
  user.username = 'admin';
  user.password = '123456';
  user.role = 0;

  return [admin, user];
};

export const getRandomUser = (): User => {
  const user = new User();

  user.username = Random.cname();
  user.email = Random.email();
  user.password = '123456';
  user.role = Random.natural(0, 1);

  return user;
};
