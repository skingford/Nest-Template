/*
 * @Author: kingford
 * @Date: 2021-09-08 00:17:37
 * @LastEditTime: 2021-09-10 00:05:22
 */
import { AuthGuard } from '@nestjs/passport';
import { WsException } from '@nestjs/websockets';

export class WsJwtAuthGuard extends AuthGuard('ws-jwt') {
  handleRequest(err, user) {
    // 处理 info
    if (err || !user) {
      throw err || new WsException('没有登录');
    }
    return user;
  }
}
