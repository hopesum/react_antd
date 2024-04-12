import request from "../index"
export const getVertifyCode = () => {
    return  request({url:"/captcha"})
}
export const loginApi = (data) => {
    return  request({url:"/login",method:"post",data})
}
export const getUserAuth = () => { 
    return request({url:"/auth/user"})
}