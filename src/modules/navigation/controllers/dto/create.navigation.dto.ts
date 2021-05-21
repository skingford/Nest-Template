/*
 * @Author: kingford
 * @Date: 2021-05-21 10:52:14
 * @LastEditTime: 2021-05-21 11:11:25
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { NavigationDto } from './navigation.dto';

export class CreateNavigationDto extends NavigationDto {
  @ApiProperty({ required: true, description: '导航名称' })
  @IsString({ message: '名称必须为字符类型' })
  @IsNotEmpty({ message: '名称不能为空' })
  readonly name: string;
}
