/*
 * @Author: kingford
 * @Date: 2021-09-16 09:20:46
 * @LastEditTime: 2021-09-16 15:36:55
 */
export const fmtException = (req, data) => {
  return `[
    request url: ${req.originalUrl},
     method: ${req.method},ip: ${req.ip},
     user: ${JSON.stringify(req.user)}, 
     response data: ${JSON.stringify(data)}
     date: ${JSON.stringify(req.body)}
    ]`;
};
