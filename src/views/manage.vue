<template>
    <div class="manage_page fillcontain">
        <el-row style="height: 100%">
            <el-col :span='4' style="height: 100%; background: #90b8ec">
                <el-menu @open="handleOpen" @close="handleClose" router :default-active="defaultActive" background-color="#000" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="manage"><i class="el-icon-menu"></i><span slot="title">首页</span></el-menu-item>
                    <el-submenu index='2'>
                        <template slot="title"><i class="el-icon-document"></i><span slot="title">数据管理</span></template>
                        <el-menu-item index="userList">用户列表</el-menu-item>
                        <el-menu-item index="shopList">商家列表</el-menu-item>
                        <el-menu-item index="foodList">食品列表</el-menu-item>
                        <el-menu-item index="orderList">订单列表</el-menu-item>
                        <el-menu-item index="adminList">管理员列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index='3'>
                        <template slot="title"><i class="el-icon-plus"></i>添加数据</template>
                        <el-menu-item index='addShop'>添加商铺</el-menu-item>
                        <el-menu-item index='addGoods'>添加商品</el-menu-item>
                    </el-submenu>
                    <el-submenu index='4'>
                        <template slot="title"><i class="el-icon-star-on"></i>图表</template>
                        <el-menu-item index='visitor'>用户分布</el-menu-item>
                    </el-submenu>
                    <el-submenu index='5'>
                        <template slot="title"><i class="el-icon-edit"></i>编辑</template>
                        <el-menu-item index='vueEdit'>文本编辑</el-menu-item>
                    </el-submenu>
                    <el-submenu index='6'>
                        <template slot="title"><i class="el-icon-setting"></i>设置</template>
                        <el-menu-item index='adminSet'>管理员设置</el-menu-item>
                    </el-submenu>
                    <el-submenu index='7'>
                        <template slot="title"><i class="el-icon-warning"></i>说明</template>
                        <el-menu-item index='explain'>说明</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span='20' style="height: 100%; overflow:auto">
                <!-- <keep-alive>
                    <router-view></router-view>
                </keep-alive> -->
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        computed: {
            defaultActive: function() {
                return this.$route.path.replace('/','')
            }
        },
        created() {
            console.log(this.$route.path)
        },
        mounted() {
        },
        updated() {
            console.log(this.$route.path)
        },
        methods: {
            handleOpen(key,keyPath) {
                console.log(key,keyPath)
            },
            handleClose(key,keyPath) {
                console.log(key,keyPath)
            }
        },
    }
</script>

<style lang="less" scoped>
@import '../style/mixin.less';
.el-submenu .el-menu-item {
	min-width: 120px;
	}
</style>