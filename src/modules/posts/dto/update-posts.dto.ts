/*
 * @Author: kingford
 * @Date: 2021-09-05 13:04:59
 * @LastEditTime: 2021-09-05 23:12:55
 */
import { ApiUseTags, ApiOperation, ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateDto {
  @ApiModelProperty({ description: '帖子标题1', example: '帖子标题1' })
  @IsNotEmpty({ message: '请填写标题' })
  title: string;
  @ApiModelProperty({ description: '帖子内容1', example: '帖子内容1' })
  content: string;
}
