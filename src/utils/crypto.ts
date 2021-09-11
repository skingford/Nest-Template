/*
 * @Author: kingford
 * @Date: 2021-09-11 22:52:29
 * @LastEditTime: 2021-09-11 23:01:06
 */
import * as crypto from 'crypto';

/**
 * Make salt
 */
export function makeSalt(): string {
  return crypto.randomBytes(3).toString('base64');
}

/**
 * Encrypt password
 * @param password 密码
 * @param salt 密码盐
 */
export function encryptPassword(password: string, salt: string): string {
  if (!password || !salt) {
    return '';
  }
  const tempSalt = Buffer.from(salt, 'base64');
  return (
    // 10000 代表迭代次数 16代表长度
    crypto.pbkdf2Sync(password, tempSalt, 10000, 16, 'sha1').toString('base64')
  );
}

// const salt = makeSalt(); // 制作密码盐
// const hashPwd = encryptPassword(password, salt);  // 加密密码
// const hashedPassword = user.password;
// const salt = user.salt;
// 通过密码盐，加密传参，再与数据库里的比较，判断是否相等
// const hashPassword = encryptPassword(password, salt);
