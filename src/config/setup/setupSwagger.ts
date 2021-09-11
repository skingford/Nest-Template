/*
 * @Author: kingford
 * @Date: 2021-09-05 23:02:26
 * @LastEditTime: 2021-09-11 17:25:24
 */
import type { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { API_PREFIX } from './setupConfig';

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('NestJs Swagger API')
    .setDescription('我的第一个NestJs项目')
    .setBasePath(API_PREFIX)
    .addBearerAuth({ type: 'apiKey', in: 'header', name: 'token' })
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
}
