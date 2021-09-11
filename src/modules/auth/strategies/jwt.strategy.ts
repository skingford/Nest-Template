/*
 * @Author: kingford
 * @Date: 2021-09-08 00:17:37
 * @LastEditTime: 2021-09-11 23:11:53
 */
/*
 * @Author: kingford
 * @Date: 2021-09-08 00:17:37
 * @LastEditTime: 2021-09-11 22:59:14
 */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../guards/constants';
import { UserService } from '../../user/user.service';

// JWT 的验证策略
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    const existUser = this.userService.findOne(payload.sub);

    if (!existUser) {
      throw new UnauthorizedException();
    }

    return { ...payload, id: payload.sub };
  }
}
