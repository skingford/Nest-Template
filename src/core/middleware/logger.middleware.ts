/*
 * @Author: kingford
 * @Date: 2021-09-05 22:27:21
 * @LastEditTime: 2021-09-16 23:04:12
 */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Logger, logResponse } from '@/utils/log';

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     const code = res.statusCode; // 响应状态码
//     next();
//     // 组装日志信息
//     const logFormat = `Method: ${req.method} \n Request original url: ${req.originalUrl} \n IP: ${req.ip} \n Status code: ${code} \n`;
//     // 根据状态码，进行日志类型区分
//     if (code >= 500) {
//       Logger.error(logFormat);
//     } else if (code >= 400) {
//       Logger.warn(logFormat);
//     } else {
//       Logger.access(logFormat);
//       Logger.log(logFormat);
//     }
//   }
// }

// 函数式中间件
export function logger(req: Request, res: Response, next: NextFunction) {
  const status = res.statusCode; // 响应状态码
  next();

  // 组装日志信息
  const logFormat = logResponse({
    req,
    res: req.body,
    status,
  });

  // 根据状态码，进行日志类型区分
  if (status >= 500) {
    Logger.error(logFormat);
  } else if (status >= 400) {
    Logger.warn(logFormat);
  } else {
    Logger.access(logFormat);
    Logger.log(logFormat);
  }
}
