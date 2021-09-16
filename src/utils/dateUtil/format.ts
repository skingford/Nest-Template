/*
 * @Author: kingford
 * @Date: 2021-09-16 15:43:02
 * @LastEditTime: 2021-09-16 15:52:16
 */
import dayjs from 'dayjs';
import { dateType } from './type';
import { DATE_FORMAT, DATE_TIME_FORMAT } from './constant';

// 日期时间格式化
export function format(
  date: dateType,
  dateFormat: string = DATE_TIME_FORMAT,
): string {
  return dayjs(date).format(dateFormat);
}

// 日期格式化
export function dateToFormat(date): string {
  return format(date, DATE_FORMAT);
}
