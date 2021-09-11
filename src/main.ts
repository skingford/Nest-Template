/*
 * @Author: kingford
 * @Date: 2021-09-04 21:28:38
 * @LastEditTime: 2021-09-11 17:45:03
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

import {
  setupSwagger,
  setupAppConfig,
  setupGlobalFilters,
  setupGlobalPipes,
  setupGlobalInterceptors,
  useNestFactoryConfig,
} from '@/config';

export const HOST_PORT = process.env.HOST_PORT || 3000;
export const API_PREFIX = process.env.API_PREFIX || '/';

async function bootstrap() {
  const logger: Logger = new Logger('main.ts');
  const app = await NestFactory.create(AppModule, useNestFactoryConfig());

  // swagger文档
  setupSwagger(app);

  // 全局过滤器
  setupGlobalFilters(app);

  // 全局拦截器
  setupGlobalInterceptors(app);

  // 全局管道
  setupGlobalPipes(app);

  // 全局配置
  setupAppConfig(app);

  await app.listen(HOST_PORT, () => {
    logger.log(
      `服务已经启动,接口请访问:http://localhost:${HOST_PORT}/${API_PREFIX}`,
    );
    logger.log(
      `服务已经启动,文档请访问:http://localhost:${HOST_PORT}/${API_PREFIX}/swagger`,
    );
  });
}
bootstrap();
