/*
 * @Author: kingford
 * @Date: 2021-05-17 16:07:01
 * @LastEditTime: 2021-05-17 16:32:26
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cats } from './cats.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cats])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
