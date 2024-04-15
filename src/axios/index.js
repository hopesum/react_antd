import axios from "axios"
const request = axios.create({
    baseURL: 'https://v2.eleadmin.com/api',
})

let token = localStorage.getItem("access_token")
// http request 拦截器
request.interceptors.request.use(config => {
  // 发送网络请求时, 在界面的中间位置显示Loading的组件,使用ant-design插件，这里不再赘述
  //请求携带的信息
	config.headers = {
		'Content-Type':'application/json',
		'access_token':token,
		...config.headers,
	};
  return config;
}, err => {
	//...关闭加载loading的组件，显示消息提示弹窗
	return err;
});

// http response 拦截器
request.interceptors.response.use(res => {
  return res.data;
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log("请求错误");
        break;
      case 401:
        console.log("未授权访问");
        break;
      default:
        console.log("其他错误信息");
    }
  }
  return err;
});


export default request