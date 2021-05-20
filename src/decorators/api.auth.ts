import { applyDecorators, SetMetadata } from '@nestjs/common';
import { API_AUTH_KEY } from '@src/constants';

/**
 * @Description: 自定义API守卫装饰器
 * @param {*}
 * @return {*}
 */
export function ApiAuth(): Function {
  return applyDecorators(SetMetadata(API_AUTH_KEY, true));
}
