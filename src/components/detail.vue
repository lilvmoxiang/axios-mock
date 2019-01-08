<template>
  <div id="detail">
    <h2 class="gh">详情页</h2>
     <form>
       <p>用户ID：<input type="text" v-model="tableData.id"></p>
       <p>用户名：<input type="text" v-model="tableData.username"></p>
       <p>用户年龄：<input type="text" v-model="tableData.age"></p>
       <button type="button" @click="addBtn">确认修改</button>
     </form>
  </div>
</template>

<script>

export default {
  name: 'detail',
  data(){
  	return {
  		routes:this.$router.options.routes,
      tableData:{}     
  	}
  },
  methods:{
    async getHot(){
      await this.$http.get('/allUsers')
            .then(res=>{
             res.map(item=>{
              if(item.id==this.$route.query.id){
                console.log($this.$route)
                this.tableData=item;
              }
              return item
             })
            })
            .catch(err=>{
              console.log(err)
            })
       },
       //不用刷新页面
    async addBtn(){
     const id= this.tableData.id;
     const params={  
       id:this.tableData.id, 
       username:this.tableData.username,
       age:this.tableData.age
     }
     this.getHot();
     await this.$http.post(`/detail?id=${id}`,params)
           .then(res=>{
             this.getHot()
             this.$message({
                  message: '修改成功！',
                  type: 'success'
            })
             setTimeout(()=>{
                this.$router.push('/alluser');
             },3000)
           })
           .catch(err=>{
            console.log(err)
           })
       }
     },
 mounted(){
  this.getHot();
  // const temp = [1,5,6,4,7];
  // var s=temp.unshift(111)
  // console.log(temp)
  // console.log(s)
 }
}
</script>

<style>
#detail {
  width:100%;
  height:100%;
}
h2{
  width:250px;
  height:35px;
  text-align:left!important;
  background-color:pink;
}
</style>



