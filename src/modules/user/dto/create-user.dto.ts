/*
 * @Author: kingford
 * @Date: 2021-09-08 00:17:37
 * @LastEditTime: 2021-09-21 17:54:02
 */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsNotEmpty,
  IsEmail,
  IsString,
  MaxLength,
} from 'class-validator';
import { RoleEnum } from '@/common/enums';

export class CreateUserDto {
  @ApiProperty({ description: '用户名' })
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsAlphanumeric()
  @MaxLength(14)
  username: string;

  @ApiProperty({ description: '密码' })
  @IsNotEmpty({ message: '密码不能为空' })
  @IsString()
  password: string;

  @ApiPropertyOptional({ description: '手机号' })
  phone: string;

  @ApiProperty({ required: false, description: '邮箱' })
  @IsEmail()
  email: string;

  @ApiPropertyOptional({
    default: RoleEnum.User,
    enum: RoleEnum,
    description:
      '[用户角色]: Super-超级管理员 | Admin-管理员 | Developer-开发&测试&运营 | User-普通用户（只能查看）',
  })
  readonly role?: RoleEnum;
}
