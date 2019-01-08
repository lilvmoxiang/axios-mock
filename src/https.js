import Vue from "vue";
import axios from "axios";
//解析数据转换模块包
import qs from "qs"

//网页的响应超时时间
axios.defaults.timeout=5000;
//就是防止多次发生token
axios.defaults.headers.common['Authorization']='AUTH_TOKEN';
//封装公共的请求地址
axios.defaults.baseURL="http://localhost:4000";
//interceptors是固定的写法
//发生数据拦截   请求拦截
axios.interceptors.request.use(config=>{
  console.log(config)
  if(config.method=="get" || config.method=="delete" || config.method=="put"){
  	config.headers={ 		
  	'Content-Type':"application/json"
  	}
  	config.data=qs.stringify(config.data)
  }else if(config.method=="post"){
  	config.headers={
  	//就是post提交数据的需要给后台传递的请求头
  	'Content-Type':"application/x-www-form-urlencoded" 		
  	}
  	config.data=qs.stringify(config.data)
  }
   return config;
})

//响应数据配置(拦截)
axios.interceptors.response.use(
	//处理成功的回调函数
	response=>{
		const data=response.data;
		if(data){
			return data;
		}else{
			// 由于网速不好，请求超时
			const err=new Error('请求失败，请重试');
			err.data=data;
			//暴露错误
			
		return response;
	}
 },
	// 处理失败的回调函数  
	// 请求数据时候，请求地址出错
    error=>{
       console.log(error);
       return Promise.reject(error);
    }
  )

// //获取所有商品
// export const alllist=()=>{
// 	return axios.get('/alllist')
// }

export default axios;

