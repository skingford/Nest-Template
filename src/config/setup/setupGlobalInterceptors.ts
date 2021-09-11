/*
 * @Author: kingford
 * @Date: 2021-09-08 01:12:45
 * @LastEditTime: 2021-09-11 17:57:54
 */
import type { INestApplication } from '@nestjs/common';
import { TransformInterceptor } from '@/common/interceptors/transform.interceptor';
import { LogInterceptor } from '@/common/interceptors/log.interceptor';
import { ReportLogger } from '@/modules/log/ReportLogger';

export function setupGlobalInterceptors(app: INestApplication) {
  const reportLogger = new ReportLogger();
  app.useGlobalInterceptors(
    new TransformInterceptor(),
    new LogInterceptor(reportLogger),
  );
}
