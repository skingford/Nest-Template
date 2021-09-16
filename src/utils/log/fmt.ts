/*
 * @Author: kingford
 * @Date: 2021-09-16 09:20:46
 * @LastEditTime: 2021-09-16 23:05:44
 */

interface LogResponse {
  req: any;
  res: any;
  params?: any;
  query?: any;
  status?: number;
}

export const logResponse = ({ req, res, status = 200 }: LogResponse) => {
  return `
  [***
    ip: ${req.ip},
    request url: ${req.originalUrl},
    method: ${req.method},
    params:${JSON.stringify(req.params)},
    query:${JSON.stringify(req.query)},
    status:${status},
    user: ${JSON.stringify(req.user)},
    response: ${JSON.stringify(res)}
    timestamp: ${new Date().toISOString()},
  ***]`;
};
