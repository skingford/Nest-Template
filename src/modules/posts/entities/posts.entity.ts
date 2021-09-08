/*
 * @Author: kingford
 * @Date: 2021-09-08 01:02:27
 * @LastEditTime: 2021-09-08 23:49:47
 */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class PostEntity {
  @ApiProperty({ description: '自增 id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: '标题' })
  @Column({ length: 500 })
  title: string;

  @ApiProperty({ description: '内容' })
  @Column({ type: 'text' })
  content: string;
}
