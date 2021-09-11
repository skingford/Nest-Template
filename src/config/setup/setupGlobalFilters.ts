/*
 * @Author: kingford
 * @Date: 2021-09-11 16:17:48
 * @LastEditTime: 2021-09-12 01:28:51
 */
import type { INestApplication } from '@nestjs/common';
import { AllExceptionFilter } from '@/common/filters';

export function setupGlobalFilters(app: INestApplication) {
  app.useGlobalFilters(new AllExceptionFilter());
}
