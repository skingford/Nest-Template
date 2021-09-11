/*
 * @Author: kingford
 * @Date: 2021-09-11 08:51:10
 * @LastEditTime: 2021-09-11 17:55:56
 */
import { Module } from '@nestjs/common';
import { ReportLogger } from './ReportLogger';

@Module({
  providers: [ReportLogger],
  exports: [ReportLogger],
})
export class LogModule {}
