/*
 * @Author: kingford
 * @Date: 2021-09-17 00:36:29
 * @LastEditTime: 2021-09-19 10:11:59
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginMiniDto {
  @ApiProperty({
    description: 'code',
    example: '003Yzf000kJVqM1mL5200ndPvj3Yzf06',
  })
  @IsNotEmpty({ message: '请填写code' })
  code: string;
}
