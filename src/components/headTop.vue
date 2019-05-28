<template>
    <div class="header_container">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{path: '/manage'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(val,index) in crumbData" :key="index">{{val}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-dropdown trigger="click" @command="handleCommand">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558776731260&di=1f26aa64be31c0516e226057ca709fc5&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F43a7465d7f9b35557f8efa6825b0bc05e93d64e0.jpg" class="avator">
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command='a'>首页</el-dropdown-item>
                <el-dropdown-item command='b'>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>



<script>
    export default { 
        props: ['crumbData'],
        methods: {
             handleCommand(command) {
                 console.log(command)
             }
        },
    }
</script>

<style scoped lang="less"> 
@import '../style/mixin.less';
.header_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    height: 60px;
    background: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet); 
}
.avator {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 36px;
}
.el-dropdown-menu__item{
    text-align: center;
}
</style>