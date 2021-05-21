/*
 * @Author: kingford
 * @Date: 2021-05-21 11:13:08
 * @LastEditTime: 2021-05-21 13:59:50
 */
import { Controller, UseGuards, Post, Body, HttpCode, HttpStatus, Get } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { AuthGuard } from '@src/guard/auth/auth.guard';
import adminConfig from '@src/config/admin.config';
import { ApiAuth } from '@src/decorators/api.auth';

import { CategoryService } from '../services/category.service';
import { CategoryDto } from './dto/category.dto';
import { CategoryRes } from '../controllers/dto/category.res';

@ApiTags('导航分类-category')
@Controller(`${adminConfig.adminPath}/navigation/category`)
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiAuth()
  @ApiOperation({
    summary: '创建导航分类',
    description: '创建导航分类',
  })
  @ApiCreatedResponse({
    type: String,
    description: '创建导航分类返回值',
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createRole(@Body() createDto: CategoryDto): Promise<string> {
    return await this.service.create(createDto);
  }

  @ApiOperation({
    summary: '获取导航分类',
    description: '获取导航分类',
  })
  @ApiCreatedResponse({
    type: CategoryRes,
    isArray: true,
    description: '获取导航分类返回值',
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  async getList(): Promise<CategoryRes[]> {
    return this.service.getList();
  }
}
