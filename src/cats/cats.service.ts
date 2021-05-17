/*
 * @Author: kingford
 * @Date: 2021-05-17 16:07:09
 * @LastEditTime: 2021-05-17 16:50:38
 */
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cats } from './cats.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cats) private readonly repository: Repository<Cats>, // 使用泛型注入对应类型的存储库实例
  ) {}

  async createCat(cat: Cats): Promise<Cats> {
    delete cat.id;
    return this.repository.save(cat);
  }

  async deleteCat(id: number): Promise<void> {
    await this.findOneById(id);
    this.repository.delete(id);
  }

  async updateCat(id: number, cat: Cats): Promise<void> {
    await this.findOneById(id);
    delete cat.id;
    this.repository.update(id, cat);
  }

  async findOneCat(id: number): Promise<Cats> {
    return this.findOneById(id);
  }

  async findAllCat(): Promise<Cats[]> {
    return await this.repository.find();
  }

  private async findOneById(id: number): Promise<Cats> {
    const catInfo = await this.repository.findOne(id);
    if (!catInfo) {
      throw new HttpException(`指定 id=${id} 的猫猫不存在`, 404);
    }
    return catInfo;
  }
}
