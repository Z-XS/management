<template>
  <div>
      <headTop :crumbData="crumbData"/>
      <el-row style="margin-top: 20px">
          <el-col :span="14" :offset="4">
              <header class="form_header">选择种类</header>
              <el-form :model="foodForm" :rules="rules1" ref="categoryForm" label-width="110px" class="form">
                  <el-row class="category_select">
                    <el-form-item label="食品种类">
                        <el-select prop="select" v-model="foodForm.category" placeholder="请选择" style="width:100%;">
                            <el-option label="一" value="小吃"></el-option>
                            <el-option label="二" value="零食"></el-option>
                            <el-option label="三" value="便当"></el-option>
                            <el-option label="四" value="面条"></el-option>
                        </el-select>
                    </el-form-item>
                  </el-row>
              </el-form>
              <header class="form_header">添加食品</header>
              <el-form :model="foodForm" ref="foodForm" :rules="rules2" label-width="110px" class="form food_form">
                  <el-form-item label="商品名称" prop="name">
                      <el-input v-model="foodForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="所属店铺" prop="shop">
                      <el-input v-model="foodForm.shop"></el-input>
                  </el-form-item>
                  <el-form-item label="商品 ID" prop="id">
                      <el-input v-model="foodForm.id"></el-input>
                  </el-form-item>
                  <el-form-item label="店铺地址" prop="address">
                      <el-input v-model="foodForm.address"></el-input>
                  </el-form-item>
                  <el-form-item label="商品描述" prop="desc">
                      <el-input type="textarea" v-model="foodForm.desc"></el-input>
                  </el-form-item>
                  <el-form-item label="图片上传">
                      <el-upload 
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">                     
                        <img v-if="foodForm.imageUrl" :src="foodForm.imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                      </el-upload>
                  </el-form-item>
                  <el-form-item>
                      <el-button type="primary" @click="addFood()">确认添加</el-button>
                  </el-form-item>
              </el-form>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import headTop from "../components/headTop"
import {addFoods} from "../utils/index.js"
import ajax from '../utils/ajax.js'
export default {
    components: {
        headTop
    },
    data() {
        return {
            crumbData: ['添加数据','添加商品'],
            foodForm: {
                category: '',
                name:'',
                shop: '',
                id: '',
                desc: '',
                address: '',
                imageUrl: ''
            },
            rules1: {
                select: [
                    {required:true,message:'请选择一个',trigger: 'blur'}
                ]
            },
            rules2: {
                name: [
                    {required:true,message:'莫空着',trigger: 'blur'}
                ],
                shop: [
                    {required:true,message:'莫空着',trigger: 'blur'}
                ],
                id: [
                    {required:true,message:'莫空着',trigger: 'blur'}
                ],
                address: [
                    {required:true,message:'莫空着',trigger: 'blur'}
                ],
                desc: [
                    {required:true,message:'莫空着',trigger: 'blur'}
                ]
            },
        }
    },
    methods: {
        handleAvatarSuccess(res,file) {
            console.log(res,file)
            this.foodForm.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            console.log(file)
        },
        addFood() {
            console.log(this.foodForm)
        },
        async add() {
            const result = await ajax('get','http://127.0.0.1:3002/addfoods',this.foodForm)
            console.log(result.data)
            if(result.data == 'good') {
                this.$message({
                    message: '添加成功',
                    type: 'success'
                })
                this.$refs['foodForm'].resetFields()
            }
        },
        addFood() {
            console.log(this.foodForm)
            this.$refs['foodForm'].validate((valid) => {
                if(valid) {
                    this.add()
                }else {
                    return false
                }
            })
        }
    },
    mounted() {
        
    },
}
</script>

<style lang='less' scoped>
.form {
    min-width: 400px;
    margin-bottom: 30px;
    &:hover{
        box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
        border-radius: 6px;
        transition: all 400ms;
    }
}
.food_form{
    border: 1px solid #eaeefd;
    padding: 10px 10px 0;
}
.category_select {
    border: 1px solid #eaeefb;
    padding: 10px 30px 10px 10px;
    border-radius: 6px;
}
.form_header {
    text-align: center;
    margin-bottom: 10px;
}
.add_category{
    background: #f9fafc;
    padding: 10px 30px 0px 10px;
    border: 1px solid #eaeefb;
    border-top: none;
}
.avatar-uploader {
    width: 120px;
    height: 120px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader:hover {
    border-color: #20a0ff;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
}
.avatar {
    width: 120px;
    height: 120px;
    display: block;
}
.cell{
    text-align: center;
}
</style>
