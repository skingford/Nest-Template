/*
 * @Author: kingford
 * @Date: 2021-09-11 08:51:10
 * @LastEditTime: 2021-09-11 15:21:58
 */
import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    type: String,
    required: true,
    description: '用户名',
    default: 'admin',
  })
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsString({ message: '真实姓名必须是 String 类型' })
  username: string;

  @ApiProperty({
    type: String,
    required: true,
    description: '密码',
    default: 'admin',
  })
  @IsNotEmpty({ message: '密码不能为空' })
  @IsString({ message: '真实姓名必须是 String 类型' })
  password: string;
}
