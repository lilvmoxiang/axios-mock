<template>
  <div id="user">
    <div class="inner">
    <ul>
      <li>
       <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; id: </span><input type="text" v-model='id' placeholder="请输入id">
      </li>
      <li>        
       <span>管理员:</span><input type="text"  v-model="username" placeholder="请输入姓名">
      </li>
       <li>
        <span>年&nbsp; 龄: </span><input type="text"  v-model="age" placeholder="请输入年龄">
      </li>     
        <button type='button' @click="getData">提交</button>
      </ul>
     </div>
      <p>
         <router-link :to="{path:'alluser'}">用户中心</router-link>
      </p>
  </div>
</template>

<script>

export default {
  name: 'user',
  data(){
  	return {
  		routes:this.$router.options.routes,
      username:'',
      age:'',
      id:""
  	}
  },
  methods:{
     readUser(){
      this.$http.get('/allUsers')
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    },
    getData(){
      const params = {
        username:this.username,
        age:this.age,
        id:this.id
      }
      this.$http.post('/addUser',params)
      .then(res=>{
        this.readUser(); 
         this.$message({
                  message: '提交成功！',
                  type: 'success'
            })         
      })
      .catch(err=>{
        console.log(err)
        this.$message.error('提交失败!');
      })
      this.readUser();
    }
  },
  mounted(){
    this.readUser();
  }
}
</script>

<style>
#user {
  width:100%;
  height:100%;
}
#user>.inner{
  width:500px;
  height:100px;
  padding:40px;
  margin:40px auto;
}
#user ul{ 
  list-style:none;
}

</style>

