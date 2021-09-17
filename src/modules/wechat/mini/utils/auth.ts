/*
 * @Author: kingford
 * @Date: 2021-09-17 00:44:04
 * @LastEditTime: 2021-09-17 12:41:06
 */

/**
 *  appid				小程序 appId
 *  secret			小程序 appSecret
 *  js_code				登录时获取的 code
 *  grant_type			授权类型，此处只需填写 authorization_code
 */

interface Seasoner {
  appid: string;
  code: string;
  secret: string;
}

export function getSessionUrl({ appid, code, secret }: Seasoner) {
  return `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}js_code=${code}&grant_type=authorization_code`;
}
