/*
 * @Author: kingford
 * @Date: 2021-09-08 00:17:37
 * @LastEditTime: 2021-09-21 17:38:31
 */
import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '@/common/entities';
import { WechatMiniUser } from '@/modules/wechat/mini/entities/user.entity';
import { RoleEnum } from '@/common/enums';

@Entity('User')
export class User extends BaseEntity {
  @ApiProperty({ description: '用户名' })
  @Column({ length: 500 })
  username: string;

  @ApiProperty({ description: '密码' })
  @Exclude()
  @Column({ length: 500 })
  password: string;

  @ApiProperty({ description: '手机号' })
  @Column({ length: 500 })
  phone: string;

  @ApiProperty({ description: '邮箱' })
  @Column({ length: 500 })
  email: string;

  @ApiProperty({
    description:
      '[用户角色]: 0-超级管理员 | 1-管理员 | 2-开发&测试&运营 | 3-普通用户（只能查看）',
  })
  @Column('int', { default: RoleEnum.User })
  role?: RoleEnum;

  @OneToMany(() => WechatMiniUser, (user) => user.user)
  wechatMiniUsers: WechatMiniUser[];

  @BeforeInsert()
  @BeforeUpdate()
  private async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
}
