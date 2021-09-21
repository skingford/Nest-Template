/*
 * @Author: kingford
 * @Date: 2021-09-17 01:00:48
 * @LastEditTime: 2021-09-21 10:59:47
 */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '@/common/entities';
import { User } from '@/modules/user/entities/user.entity';

@Entity('WechatMiniUser')
export class WechatMiniUser extends BaseEntity {
  @ApiProperty({ description: '用户唯一标识' })
  @Column({ name: 'openId', comment: '用户唯一标识' })
  openid: string;

  @ApiPropertyOptional({ description: '用户在开放平台的唯一标识符' })
  @Column({ name: 'unionId', comment: '用户在开放平台的唯一标识符' })
  unionid: string;

  @ApiProperty({ description: '会话密钥' })
  @Column({ name: 'sessionKey', comment: '会话密钥' })
  session_key: string;

  @ApiPropertyOptional({ description: '用户昵称' })
  @Column({ length: 20, comment: '用户昵称', nullable: true })
  nickname?: string;

  @ApiPropertyOptional({ description: '用户手机号' })
  @Column({ length: 20, comment: '用户手机号', nullable: true })
  phone?: string;

  @ManyToOne(() => User, (user) => user.wechatMiniUsers)
  user: User;

  constructor(openid: string, sessionKey: string, unionid: string) {
    super();
    this.openid = openid;
    this.unionid = unionid;
    this.session_key = sessionKey;
  }
}
