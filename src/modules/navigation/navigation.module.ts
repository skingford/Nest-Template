/*
 * @Author: kingford
 * @Date: 2021-05-20 21:09:48
 * @LastEditTime: 2021-05-21 11:33:13
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NavigationService } from './services/navigation.service';
import { CategoryService } from './services/category.service';
import { NavigationController } from './controllers/navigation.controller';
import { CategoryController } from './controllers/category.controller';
import { NavigationEntity } from './entities/navigation.entity';
import { CategoryEntity } from './entities/category.entity';
@Module({
  imports: [TypeOrmModule.forFeature([NavigationEntity, CategoryEntity])],
  controllers: [NavigationController, CategoryController],
  providers: [NavigationService, CategoryService],
})
export class NavigationModule {}
