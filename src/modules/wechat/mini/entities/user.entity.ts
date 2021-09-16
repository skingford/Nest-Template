/*
 * @Author: kingford
 * @Date: 2021-09-17 01:00:48
 * @LastEditTime: 2021-09-17 01:20:16
 */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('wechatMiniUser')
export class wechatMiniUser {
  @ApiProperty({ description: 'uuid' })
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ApiProperty({ description: '用户唯一标识' })
  @Column()
  openid: string;

  @ApiPropertyOptional({ description: '用户在开放平台的唯一标识符' })
  @Column()
  unionid?: string;

  @ApiProperty({ description: '会话密钥' })
  @Column()
  session_key: string;

  constructor(openid: string, sessionKey: string, unionid?: string) {
    this.openid = openid;
    this.unionid = unionid;
    this.session_key = sessionKey;
  }
}
