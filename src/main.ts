/*
 * @Author: kingford
 * @Date: 2021-09-04 21:28:38
 * @LastEditTime: 2021-09-06 20:59:39
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './config/setupSwagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // config swagger
  setupSwagger(app);

  await app.listen(3000);
  console.log(`
  app start server: http://localhost:3000/
  app swagger document start server: http://localhost:3000/api-docs
  `);
}
bootstrap();
