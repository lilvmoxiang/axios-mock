import Vue from 'vue'
import Router from 'vue-router'
// import Admin from '../admin'
// import Alllist from "../components/alllist"
// import Hot from "../components/hot"
import Form from "../components/form"
import User from "../components/user"
import AllUser from "../components/alluser"
import Detail from "../components/detail"
import Exer from "../components/exer"

Vue.use(Router)

//懒加载路由
const router= new Router({
  mode:"hash",
  routes: [
    {
      path: '/',
      name: 'admin',
      component:r=>require.ensure([],()=>r(require('../admin')),'admin')
      // component:()=>import('../admin')
    },
    {
	  path:'/alllist',
	  name:'alllist',
	  // component:Alllist,
    // component:()=>import('../components/alllist')
    component:r=>require.ensure([],()=>r(require('../components/alllist')),'alllist')
    },
    {
	  path:'/hot',
	  name:'hot',
	  // component:Hot
    component:()=>import('../components/hot')
    },
    {
	  path:'/form',
	  name:'form',
	  component:Form
    },
    {
	  path:'/user',
	  name:'user',
	  component:User
    },
    {
    path:'/exer',
    name:'exer',
    component:Exer
    },
    {
      path:'/alluser',
      name:'alluser',
      component:AllUser
    },
    {
      path:"/detail",
      name:'detail',
      component:Detail
    }
  ]
})

export default router