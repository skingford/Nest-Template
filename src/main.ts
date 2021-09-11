/*
 * @Author: kingford
 * @Date: 2021-09-04 21:28:38
 * @LastEditTime: 2021-09-11 16:54:03
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import {
  setupSwagger,
  setupAppConfig,
  setupGlobalFilters,
  setupGlobalPipes,
  setupGlobalInterceptors,
  useNestFactoryConfig,
} from '@/config';

const PORT = process.env.HOST_PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, useNestFactoryConfig());

  // 全局配置
  setupAppConfig(app);

  // 全局拦截器
  setupGlobalInterceptors(app);

  // 全局过滤器
  setupGlobalFilters(app);

  // 全局管道
  setupGlobalPipes(app);

  // swagger文档
  setupSwagger(app);

  await app.listen(PORT);

  console.log(`
    app start server: http://localhost:3000/ 
    app swagger document start server: http://localhost:3000/swagger
  `);
}
bootstrap();
