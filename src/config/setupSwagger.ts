/*
 * @Author: kingford
 * @Date: 2021-09-05 23:02:26
 * @LastEditTime: 2021-09-05 23:06:22
 */
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('NestJs Swagger API')
    .setDescription('我的第一个NestJs项目')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
}
