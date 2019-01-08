<template>
  <div id="alluser">
    <h1>所有的用户信息</h1>
   <div class="box" v-for="(item,index) in tableData">
     <span>{{item.id}}</span>
     <span>{{item.username}}</span>
     <span>{{item.age}}</span>
     <button @click="deleteItem(item.id)">删除</button>
     <router-link :to="{path:'/detail',query:{id:item.id}}">修改</router-link>
   </div>
    <!-- <div id="box">盒子</div>  -->
  </div>
</template>

<script>
export default {
  name: 'alluser',
  data(){
    return {
      routes:this.$router.options.routes,
      tableData:[]
    }
  },
  methods:{
    // getById(_id,_className,_val){
    //  document.getElementById(_id)
    //  document.getElementsByClassName(_className)[0]
    //  // document.getElementById(_id).textContent=_val
    //  console.log(_id,_val,_className)
    // },
   deleteItem(id){
     this.$http.delete(`/deletegood?id=${id}`)
     .then(res=>{
      //fliter是数组新方法，过滤掉不符合的数组项，留下符合要求的数组项，并且返回操作后的新数组
      this.tableData.filter(item=>item.id!==id)
      this.getHot();
      this.$message({
                  message: '删除成功！',
                  type: 'success'
            })
     })
     .catch(err=>{
      console.log(err)
       this.$message.error('删除失败!');     
     })
     this.getHot()
   },
   getHot(){
    this.$http.get("/allUsers")
    .then(res=>{
      this.tableData = res;
    })
    .catch(err=>{
      console.log(err)
    })
   }
  },
  mounted(){
    this.getHot()
    // this.getById('box','zimo')
    // this.getById('',"box",'')
  }
}
</script>

<style>
#alluser {
  width:100%;
  height:100%;
}
h1{
  background-color:red;
  width:300px;
  height:50px;
  margin:50px auto;
}
.box{
  border:1px solid;
  width:800px;
  padding:20px;
  margin:0 auto;
}
</style>

