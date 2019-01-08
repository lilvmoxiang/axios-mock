<template>
  <div id="admin">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="货物ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="goodname"
        label="货物名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="info"
        label="描述"> 
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="currentChange"
        @prev-click="prevClick"
        @next-click="nextClick"       
        :page-size="page.pageSize" 
        :current-page="page.pageNo"
        layout="total, prev, pager, next"
        :total="page.totalRecords">
      </el-pagination>
    </div>
    
    <div>
      <router-link :to="{path:'alllist'}"  id='all'>去看看全部的商品</router-link>
      <router-link :to="{path:'hot'}"  id='hotProduct'>去看看热销的商品吧</router-link>
      <router-link :to="{path:'form'}"  id='form'>表单验证</router-link>
      <router-link :to="{path:'user'}"  id='user'>登录注册</router-link>
      <router-link :to="{path:'exer'}"  id='sass'>sass语法练习</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'admin',
  data(){
    return {
      routes:this.$router.options.routes,
      tableData: [],
      page: {
        pageNo: 1,//当前页
        pageSize: 5,//每页的数据
        totalRecords: 17
      }    
    }
  },
  methods:{
    handleSizeChange(val){
      this.page.pageSize = val;
      this.getData()
    },
    currentChange(val){
      this.page.pageNo = val;
      this.getData()
      console.log(val)
    },
    prevClick(val){
      this.page.pageNo = val;
      this.getData()
    },
    nextClick(val){
      this.page.pageNo = val;
      this.getData()
    },
    getData(){
      this.$http.get(`/page?page=${this.page.pageNo}`)
      .then((res)=>{  
      console.log(res)          
        this.tableData = res.glist;
      })
      .catch(err=>{
          console.log(err)
      })
    }
  },
  mounted(){
    var token = 'zimo';
    window.localStorage.setItem('zimo',token);
    this.getData();
  }
}
</script>

<style>
#admin {
  width:100%;
  height:100%;
  background:#ccc; 
}
.block{
  position:absolute;
  bottom:20px;
  right:20px;
}
a{
  display:block;
  width:320px;
  height:50px;
  line-height:50px; 
  text-align:center; 
  text-decoration: none;
  font-size:30px;
  margin-bottom:20px;
  float: left;
}
#all{
  background-color:pink;
}
#hotProduct{
  background-color:red;
}
#form{
  text-align:left;
}
</style>
