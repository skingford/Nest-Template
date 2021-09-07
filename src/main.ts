/*
 * @Author: kingford
 * @Date: 2021-09-04 21:28:38
 * @LastEditTime: 2021-09-08 01:38:41
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ReportLogger } from '@/modules/log/ReportLogger';
import { setupSwagger, setupGlobalInterceptors } from '@/config';

async function bootstrap() {
  const reportLogger = new ReportLogger();

  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost', 'http://localhost:3000'],
      credentials: true,
    },
    bufferLogs: true,
    logger: reportLogger,
  });

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
