/*
 * @Author: kingford
 * @Date: 2021-09-08 01:12:45
 * @LastEditTime: 2021-09-16 23:12:08
 */
import type { INestApplication } from '@nestjs/common';
import { TransformInterceptor } from '@/core/interceptors/transform.interceptor';

export function setupGlobalInterceptors(app: INestApplication) {
  app.useGlobalInterceptors(new TransformInterceptor());
}
