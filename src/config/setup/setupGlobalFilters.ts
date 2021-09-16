/*
 * @Author: kingford
 * @Date: 2021-09-11 16:17:48
 * @LastEditTime: 2021-09-16 20:57:16
 */
import type { INestApplication } from '@nestjs/common';
import {
  HttpExceptionFilter,
  AllExceptionFilter,
} from '@/common/exception-filters';

export function setupGlobalFilters(app: INestApplication) {
  //注意：AllExceptionsFilter 要在 HttpExceptionFilter 的上面，否则 HttpExceptionFilter 就不生效了，全被 AllExceptionsFilter 捕获了。
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalFilters(new HttpExceptionFilter());
}
