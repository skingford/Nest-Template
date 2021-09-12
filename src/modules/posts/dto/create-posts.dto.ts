/*
 * @Author: kingford
 * @Date: 2021-09-05 23:08:30
 * @LastEditTime: 2021-09-12 14:48:39
 */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateDto {
  @ApiProperty({ description: '帖子标题1', example: '帖子标题1' })
  @IsNotEmpty({ message: '请填写标题' })
  title: string;

  @ApiProperty({ description: '帖子内容1', example: '帖子内容1' })
  @IsNotEmpty({ message: '请填写帖子内容' })
  content: string;

  // 可空类型
  @ApiPropertyOptional({ description: '帖子作者', example: '帖子作者1' })
  author: string;
}
