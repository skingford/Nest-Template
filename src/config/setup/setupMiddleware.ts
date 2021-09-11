/*
 * @Author: kingford
 * @Date: 2021-09-11 17:20:46
 * @LastEditTime: 2021-09-12 00:20:29
 */

import helmet from 'helmet';
import { json, urlencoded } from 'express';
import type { INestApplication } from '@nestjs/common';
import { logger } from '@/common/middleware/logger.middleware';

export function setupMiddleware(app: INestApplication) {
  // For parsing application/x-www-form-urlencoded
  app.use(json(), urlencoded({ extended: true }));

  app.use(logger);
}
