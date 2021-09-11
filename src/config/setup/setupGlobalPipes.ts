/*
 * @Author: kingford
 * @Date: 2021-09-11 16:24:06
 * @LastEditTime: 2021-09-11 16:25:16
 */
import type { INestApplication } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';

export function setupGlobalPipes(app: INestApplication) {
  app.useGlobalPipes(new ValidationPipe());
}
