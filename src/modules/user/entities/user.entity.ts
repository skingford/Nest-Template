/*
 * @Author: kingford
 * @Date: 2021-09-08 00:17:37
 * @LastEditTime: 2021-09-21 18:46:19
 */
import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '@/common/entities';
import { WechatMiniUser } from '@/modules/wechat/mini/entities/user.entity';
import { RoleEnum, UserStatusEnum } from '@/common/enums';

@Entity('User')
export class User extends BaseEntity {
  @ApiProperty({ description: '用户名' })
  @Column({ length: 20, comment: '用户名' })
  username: string;

  @ApiProperty({ description: '密码' })
  @Exclude()
  @Column({ length: 200, comment: '密码' })
  password: string;

  @ApiProperty({ description: '手机号' })
  @Column({ length: 20, nullable: true, comment: '手机号' })
  phone: string;

  @ApiProperty({ description: '邮箱' })
  @Column({ length: 100, nullable: true, comment: '邮箱' })
  email: string;

  @ApiProperty({
    description:
      '[用户角色]: Super-超级管理员 | Admin-管理员 | Developer-开发&测试&运营 | User-普通用户（只能查看）',
  })
  @Column({ length: 20, default: RoleEnum.User, comment: '用户角色' })
  role: RoleEnum;

  @ApiProperty({
    description: '[用户状态]: 0-正常 | 1-禁用 ',
  })
  @Column({
    type: 'tinyint',
    nullable: false,
    default: UserStatusEnum.Normal,
    comment: '用户状态:0-正常 | 1-禁用',
  })
  status: UserStatusEnum;

  @OneToMany(() => WechatMiniUser, (user) => user.user)
  wechatMiniUsers: WechatMiniUser[];

  @BeforeInsert()
  @BeforeUpdate()
  private async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
}
