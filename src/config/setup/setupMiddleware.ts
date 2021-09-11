/*
 * @Author: kingford
 * @Date: 2021-09-11 17:20:46
 * @LastEditTime: 2021-09-11 17:21:53
 */

import helmet from 'helmet';
import type { INestApplication } from '@nestjs/common';

export function setupMiddleware(app: INestApplication) {
  // Web漏洞保护
  app.use(helmet);
}
