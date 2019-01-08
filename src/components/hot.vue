<template>
  <div id="hot">
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
  name: 'hot',
  data(){
  	return {
  		routes:this.$router.options.routes,
      tableData:[]
  	}
  },
  methods:{
    getData(){
      this.$http.get('/hot')
      .then((res)=>{           
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
#hot {
  width:100%;
  height:100%;
}
</style>
