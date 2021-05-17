/*
 * @Author: kingford
 * @Date: 2021-05-17 16:07:19
 * @LastEditTime: 2021-05-17 16:53:01
 */
import {
  Controller,
  Inject,
  Post,
  Delete,
  Put,
  Body,
  Get,
  Param,
} from '@nestjs/common';
import { Result } from '../common/result.interface';
import { Cats } from './cats.entity';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(@Inject(CatsService) private readonly CatService: CatsService) {}

  @Post()
  async createCat(@Body() Cat: Cats): Promise<Result> {
    await this.CatService.createCat(Cat);
    return { code: 200, message: '创建成功' };
  }

  @Delete(':id')
  async deleteCat(@Param('id') id: number): Promise<Result> {
    await this.CatService.deleteCat(id);
    return { code: 200, message: '删除成功' };
  }

  @Put(':id')
  async updateCat(@Param('id') id: number, @Body() Cat: Cats): Promise<Result> {
    await this.CatService.updateCat(id, Cat);
    return { code: 200, message: '更新成功' };
  }

  @Get(':id')
  async findOneCat(@Param('id') id: number): Promise<Result> {
    const data = await this.CatService.findOneCat(id);
    return { code: 200, message: '查询成功', data };
  }

  @Get()
  async findCats(): Promise<Result> {
    const data = await this.CatService.findAllCat();
    return { code: 200, message: '查询成功', data };
  }
}
