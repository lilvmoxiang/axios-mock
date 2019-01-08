<template>
  <div id="form">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="货物图片" prop="goodimg" required>
          <el-input v-model="ruleForm.goodimg" placeholder="请上传图片"></el-input>
        </el-form-item>
        <el-form-item label="货物名称" prop="goodname" required>
          <el-input v-model="ruleForm.goodname" placeholder="请填写货物"></el-input>
        </el-form-item>
        <el-form-item label="货物ID" autocomplete="off" prop="id" required>
          <el-input id="box" v-model="ruleForm.id" placeholder="请填写ID"></el-input>
        </el-form-item>
        <el-form-item label="货物描述" prop="info" required>
          <el-input v-model="ruleForm.info" placeholder="请描述"></el-input>
        </el-form-item>
        <el-form-item label="货物数量" prop="num" required>
          <el-input v-model="ruleForm.num" placeholder="请填写总数量" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="货物单价" prop="price" required>
          <el-input v-model="ruleForm.price" placeholder="请填写单价"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addGoodItem('ruleForm')">提交数据</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  name: 'form',
  data(){
    return {
        ruleForm:{
          goodimg:null,
          goodname:null,
          id: '',
          info: '',
          num: '',
          price: '',
        },
        rules: {
          goodname: [
            { required: true, message: '请输入货物名称', trigger: 'blur' }
          ],
          id: [
            { required: true,validator:this.isvalidateId,trigger: 'blur'}
          ],
          info: [
            { required: true, message: '请描述货物', trigger: 'blur' }
          ],
          num: [
            {required: true,validator:this.isvalidateNum, trigger: 'blur' }
          ],
          price: [
            { required: true, message: '请填写单价', trigger: 'blur' }
          ]
        }
      }
  },
  methods:{
    isvalidateId(rule,value,cb){
      var regs = /^[0-9]{3,5}$/ ;
      if(!value){
        cb(new Error('请输入内容'));
      }else if(!regs.test(value)){
        cb(new Error('请输入3-5位数字'))
      }else{
        cb();
      }
    },
    isvalidateNum(rule,value,cb){
      var regs = /^[0-9]{1,1000}$/ ;
      if(!value){
        return cb(new Error('请输入数量'));
      }else if(!regs.test(value)){
        cb(new Error('请输入数字类型'))
      }else{
        cb();
      }
    },
    addGoodItem(formName){
     this.$refs[formName].validate((valid)=>{
      if(valid){
        const params={
          goodimg:this.ruleForm.goodimg,
          goodname:this.ruleForm.goodname,
          id:this.ruleForm.id,
          info:this.ruleForm.info,
          num:this.ruleForm.num,
          price:this.ruleForm.price
        }
        this.$http.post('/add',params)
        .then(res=>{
          console.log(res)
          this.$message({
                  message: '提交成功！',
                  type: 'success'
            })
        })
        .catch(err=>{
          console.log(err)
        })
      }else{
          this.$message.error('提交失败!');
        }
     })
    }
  }
}
</script>

<style>
#form {
  width:70%;
  height:80%;
  margin:50px auto;
}
</style>


