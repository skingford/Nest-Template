/*
 * @Author: kingford
 * @Date: 2021-09-08 01:10:06
 * @LastEditTime: 2021-09-16 20:54:01
 */
import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  NestInterceptor,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Logger, logResponse } from '@/utils/log';

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
        const logFormat = logResponse({ req, res: data });
        Logger.info(logFormat);
        Logger.access(logFormat);

        return {
          code: HttpStatus.OK,
          message: 'success',
          data,
        };
      }),
    );
  }
}
