<template>
  <div id="alllist">
    <!-- <div>
      <img :src="goodimg" >
    </div> -->
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="商品ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="goodname"
        label="商品名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="info"
        label="描述"> 
      </el-table-column>
      <el-table-column
        prop="num"
        label="数量"> 
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"> 
      </el-table-column>
    </el-table>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'alllist',
  data(){
  	return {
  		routes:this.$router.options.routes,
      tableData: [],
      goodimg:""
  	}
  },
  methods:{
     getData(){
      this.$http.get('/alllist')
      .then((res)=>{   
      console.log(res)        
        this.tableData = res;
      })
      .catch(err=>{
          console.log(err)
      })
    }
  },
  mounted(){
    this.getData();
  }
}
</script>

<style>
#alllist {
  width:100%;
  height:100%;
}
</style>

