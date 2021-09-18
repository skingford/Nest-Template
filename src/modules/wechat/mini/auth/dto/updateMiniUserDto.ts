/*
 * @Author: kingford
 * @Date: 2021-09-18 17:09:40
 * @LastEditTime: 2021-09-18 17:11:16
 */
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateMiniUserDto {
  @ApiPropertyOptional({ description: '用户昵称', example: 'kk' })
  nickname?: string;

  @ApiPropertyOptional({ description: '用户手机号', example: '152****' })
  phone?: string;
}
