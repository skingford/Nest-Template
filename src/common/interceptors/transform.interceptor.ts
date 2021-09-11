/*
 * @Author: kingford
 * @Date: 2021-09-08 01:10:06
 * @LastEditTime: 2021-09-12 01:12:11
 */
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Logger } from '@/utils/log4js';

export interface Response<T> {
  data: T;
}

// 出参处理
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<any> {
    console.log('intercept.context:', context);
    const req = context.getArgByIndex(1).req;

    return next.handle().pipe(
      map((data) => {
        console.log('intercept.data:', data);

        const logFormat = ` <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        Request original url: ${req.originalUrl}
        Method: ${req.method}
        IP: ${req.ip}
        User: ${JSON.stringify(req.user)}
        Response data:\n ${JSON.stringify(data)}
        <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`;
        Logger.info(logFormat);
        Logger.access(logFormat);

        return {
          code: 200,
          message: 'OK',
          data,
        };
      }),
    );
  }
}
