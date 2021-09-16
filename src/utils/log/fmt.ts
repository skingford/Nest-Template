/*
 * @Author: kingford
 * @Date: 2021-09-16 09:20:46
 * @LastEditTime: 2021-09-16 20:41:04
 */

export const logResponse = ({ req, res, status = 200 }) => {
  return `
  [***
    ip: ${req.ip},
    request url: ${req.originalUrl},
    method: ${req.method},
    status:${status},
    user: ${JSON.stringify(req.user)},
    response: ${JSON.stringify(res)}
    timestamp: ${new Date().toISOString()},
  ***]`;
};
