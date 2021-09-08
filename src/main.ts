/*
 * @Author: kingford
 * @Date: 2021-09-04 21:28:38
 * @LastEditTime: 2021-09-09 00:01:50
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import {
  setupSwagger,
  setupGlobalInterceptors,
  useNestFactoryConfig,
} from '@/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, useNestFactoryConfig());

  // 全局拦截器
  setupGlobalInterceptors(app);

  // swagger文档
  setupSwagger(app);

  await app.listen(3000);
  console.log(`
    app start server: http://localhost:3000/ 
    app swagger document start server: http://localhost:3000/api-docs
  `);
}
bootstrap();
