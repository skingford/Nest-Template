/*
 * @Author: kingford
 * @Date: 2021-05-21 10:46:29
 * @LastEditTime: 2021-05-21 11:28:28
 */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NavigationEntity } from '../entities/navigation.entity';
import { CreateNavigationDto } from '../controllers/dto/create.navigation.dto';

@Injectable()
export class NavigationService {
  constructor(
    @InjectRepository(NavigationEntity)
    private readonly repository: Repository<NavigationEntity>,
  ) {}

  async Create(createDto: CreateNavigationDto): Promise<string> {
    const { name } = createDto;
    const findNameResult = await this.repository.findOne({ where: { name }, select: ['id'] });
    if (findNameResult) {
      throw new HttpException(`${name}当前角色已经存在,不能重复创建`, HttpStatus.OK);
    }
    const role = this.repository.create(createDto);
    await this.repository.save(role);
    return '创建角色成功';
  }
}
