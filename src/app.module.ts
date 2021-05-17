/*
 * @Author: kingford
 * @Date: 2021-05-17 14:04:10
 * @LastEditTime: 2021-05-17 15:53:53
 */
import { SharedModule } from './shared/shared.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
        SharedModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
