/*
 * @Author: kingford
 * @Date: 2021-09-17 22:14:36
 * @LastEditTime: 2021-09-17 22:34:38
 */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('BaseEntity')
export class BaseEntity {
  @ApiProperty({ description: 'uuid' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiPropertyOptional({ description: '创建时间' })
  @CreateDateColumn({
    comment: '创建时间',
  })
  createdAt: Date;

  @ApiPropertyOptional({ description: '更新时间' })
  @UpdateDateColumn({ update: true, comment: '更新时间' })
  updatedAt?: Date;

  @ApiPropertyOptional({ description: '删除时间' })
  @DeleteDateColumn({
    comment: '删除时间',
  })
  deletedAt?: Date;
}
