/*
 * @Author: kingford
 * @Date: 2021-05-21 11:09:20
 * @LastEditTime: 2021-05-21 13:59:33
 */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { CategoryDto } from '../controllers/dto/category.dto';
import { CategoryRes } from '../controllers/dto/category.res';
@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly repository: Repository<CategoryEntity>,
  ) {}

  async create(createDto: CategoryDto): Promise<string> {
    const { name } = createDto;
    const findNameResult = await this.repository.findOne({ where: { name }, select: ['id'] });
    if (findNameResult) {
      throw new HttpException(`${name}当前角色已经存在,不能重复创建`, HttpStatus.OK);
    }
    const role = this.repository.create(createDto);
    await this.repository.save(role);
    return '创建角色成功';
  }

  async getList(): Promise<CategoryRes[]> {
    return await this.repository.find({
      select: ['id', 'name'],
    });
  }
}
