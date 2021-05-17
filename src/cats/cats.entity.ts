/*
 * @Author: kingford
 * @Date: 2021-05-17 16:11:03
 * @LastEditTime: 2021-05-17 16:33:35
 */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cats')
export class Cats {
  /**
   * 自增主键
   */
  @PrimaryGeneratedColumn({
    comment: '自增ID',
  })
  id: number;

  /**
   * 昵称
   */
  @Column({
    comment: '昵称',
  })
  nickname: string;

  /**
   * 品种
   */
  @Column({
    comment: '品种',
  })
  species: string;
}
