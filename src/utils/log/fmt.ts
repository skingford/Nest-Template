/*
 * @Author: kingford
 * @Date: 2021-09-16 09:20:46
 * @LastEditTime: 2021-09-16 09:22:19
 */
export const fmtException = (req, data) => {
  return ` <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    Request original url: ${req.originalUrl}
    Method: ${req.method}
    IP: ${req.ip}
    User: ${JSON.stringify(req.user)}
    Response data:\n ${JSON.stringify(data)}
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`;
};
