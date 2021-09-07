/*
 * @Author: kingford
 * @Date: 2021-09-08 01:10:06
 * @LastEditTime: 2021-09-08 01:10:06
 */
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(context: ExecutionContext, next: CallHandler<T>) {
    console.log(context);

    return next.handle().pipe(
      map((data) => ({
        code: 200,
        message: 'OK',
        data,
      })),
    );
  }
}
