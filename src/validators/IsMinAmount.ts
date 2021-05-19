/*
 * @Author: kingford
 * @Date: 2021-05-19 23:04:18
 * @LastEditTime: 2021-05-19 23:35:05
 */
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { minMoneyReg } from '@src/constants';

@ValidatorConstraint({ async: true })
export class IsMinAmountConstraint implements ValidatorConstraintInterface {
  async validate(value: number, _args: ValidationArguments): Promise<boolean> {
    // value是用户输入的金额
    if (minMoneyReg.test(String(value))) {
      return true;
    } else {
      return false;
    }
  }

  defaultMessage(): string {
    // return '提现金额错误,金额为大于或等于100元的数字货币形式';
    return '提现金额错误,金额为大于或等于1.00元的数字货币形式';
  }
}

export function IsMinAmount(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string): void {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsMinAmountConstraint,
    });
  };
}
