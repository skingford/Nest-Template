/*
 * @Author: kingford
 * @Date: 2021-09-08 01:02:27
 * @LastEditTime: 2021-09-20 09:24:45
 */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AutoMap } from '@nartc/automapper';

@Entity('posts')
export class PostEntity {
  @ApiProperty({ description: 'uuid' })
  @PrimaryGeneratedColumn('uuid')
  @AutoMap()
  id: string;

  @ApiProperty({ description: '标题' })
  @Column({ length: 500 })
  @AutoMap()
  title: string;

  @ApiProperty({ description: '内容' })
  @Column({ type: 'text' })
  @AutoMap()
  content: string;
}
