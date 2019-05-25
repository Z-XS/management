<template>
    <div>
        <head-top :crumbData="crumbData"></head-top>
        <div class="table_container">
            <el-table border ref="singleTable" :data="tableData" style="width: 100%">
                <el-table-column type="index" width="50"></el-table-column>
                <el-table-column property="date" label="日期" width="120"></el-table-column>
                <el-table-column property="name" label="姓名" width="120"></el-table-column>
                <el-table-column property="address" label="地址" ></el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background :page-size="20" layout="total,prev,pager,next" :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop.vue'
    export default {
        components: {
            headTop
        },
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                crumbData: ['数据管理','用户列表']
            }
        }

    }
</script>

<style lang="less" scoped>
    /* @import '../style/common.less'; */
    .table_container {
        padding: 20px;
    }
    .pagination {
        margin-top: 10px;
    }
</style>
