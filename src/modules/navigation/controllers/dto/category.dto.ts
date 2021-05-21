/*
 * @Author: kingford
 * @Date: 2021-05-21 11:10:41
 * @LastEditTime: 2021-05-21 11:17:48
 */

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CategoryDto {
  @ApiProperty({ required: true, description: '导航名称' })
  @IsString({ message: '名称必须为字符类型' })
  @IsNotEmpty({ message: '名称不能为空' })
  readonly name: string;
}
