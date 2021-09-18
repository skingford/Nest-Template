/*
 * @Author: kingford
 * @Date: 2021-09-17 22:59:16
 * @LastEditTime: 2021-09-18 15:21:20
 */
import { HttpClient, CreateAxiosOptions } from './axios';
import { deepMerge } from '@/utils/tool';

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new HttpClient(deepMerge({}, opt || {}));
}

export const defHttp = createAxios();

// other api url
// export const otherHttp = createAxios({
//   requestOptions: {
//     apiUrl: 'xxx',
//   },
// });
