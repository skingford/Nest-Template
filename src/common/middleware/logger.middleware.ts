/*
 * @Author: kingford
 * @Date: 2021-09-05 22:27:21
 * @LastEditTime: 2021-09-06 20:55:14
 */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...', req, res);
    next();
    console.log('Request after...');
  }
}
