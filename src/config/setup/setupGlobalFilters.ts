/*
 * @Author: kingford
 * @Date: 2021-09-11 16:17:48
 * @LastEditTime: 2021-09-11 16:23:22
 */
import type { INestApplication } from '@nestjs/common';
import { HttpExceptionFilter, AllExceptionFilter } from '@/common/filters';

export function setupGlobalFilters(app: INestApplication) {
  app.useGlobalFilters(new HttpExceptionFilter(), new AllExceptionFilter());
}
