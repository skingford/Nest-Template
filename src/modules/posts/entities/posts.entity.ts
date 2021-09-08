/*
 * @Author: kingford
 * @Date: 2021-09-08 01:02:27
 * @LastEditTime: 2021-09-08 23:34:41
 */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Posts {
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
