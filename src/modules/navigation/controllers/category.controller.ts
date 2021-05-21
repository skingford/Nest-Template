/*
 * @Author: kingford
 * @Date: 2021-05-21 11:13:08
 * @LastEditTime: 2021-05-21 11:26:56
 */
import { Controller, UseGuards, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { AuthGuard } from '@src/guard/auth/auth.guard';
import adminConfig from '@src/config/admin.config';
import { ApiAuth } from '@src/decorators/api.auth';

import { CategoryService } from '../services/category.service';
import { CategoryDto } from './dto/category.dto';

@ApiTags('导航分类-category')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiAuth()
@Controller(`${adminConfig.adminPath}/navigation/category`)
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

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
    return await this.service.Create(createDto);
  }
}
