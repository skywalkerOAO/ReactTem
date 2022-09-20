import cookie from 'react-cookies'

// 获取当前用户cookie
export const getUserInfo = (name:string) => {
  return cookie.load(name)
}

// 用户登录，保存cookie
export const onLogin = (user:any,name:string) => {
  let inFifteenMinutes = new Date(new Date().getTime() + 24 * 3600 * 1000 * 30);//30days
  cookie.save(name, user, { path: '/' , expires: inFifteenMinutes })
}

// 用户登出，删除cookie
export const logout = (name:string) => {
  cookie.remove(name)
}
