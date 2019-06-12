<template>
    <div>
        <headTop :crumbData="crumbData"/>
        <div class="table_container">
            <el-table style="width: 100%" :data="tableData">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="商品名称"><span>{{props.row.name}}</span></el-form-item>
                            <el-form-item label="所属店铺"><span>{{props.row.shop}}</span></el-form-item>
                            <el-form-item label="商品 ID"><span>{{props.row.id}}</span></el-form-item>
                            <el-form-item label="商品分类"><span>{{props.row.category}}</span></el-form-item>
                            <el-form-item label="店铺地址"><span>{{props.row.address}}</span></el-form-item>
                            <el-form-item label="商品描述"><span>{{props.row.desc}}</span></el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column label="商品 ID" prop="id" width="150"></el-table-column>
                <el-table-column label="商品名称" prop="name" width="200"></el-table-column>
                <el-table-column label="描述" prop="desc"></el-table-column>
                <el-table-column label="编辑">
                    <template slot-scope="props">
                        <el-button size="mini" @click="handleEdit(props.$index,props.row)" type="primary">编辑</el-button>
                        <el-button size="mini" @click="handleDelete(props.$index,props.row)" type="danger">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" :page-size="pagesize" layout="total,prev,pager,next" :total="total">
                </el-pagination>
            </div>
            <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="商品名称" label-width="120px">
                        <el-input v-model="form.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="所属店铺" label-width="120px">
                        <el-input v-model="form.shop" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="商品 ID" label-width="120px">
                        <el-input v-model="form.id" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="商品分类" label-width="120px">
                        <el-select v-model="form.category" placeholder="请选择">
                            <el-option label="一" value="小吃"></el-option>
                            <el-option label="二" value="零食"></el-option>
                            <el-option label="三" value="便当"></el-option>
                            <el-option label="四" value="面条"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="updatefood()">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop.vue'
    import {getFoods,deleteFood,getCount} from "../utils/index.js"

    export default {
        components: {
            headTop
        },
        data() {
            return {
                crumbData: ['数据管理','食品列表'],
                tableData: [],
                dialogFormVisible: false,
                form:{},
                arr: [],
                index: 0,
                pagesize: 5,
                total: 1
            }
        },
        methods: {
            handleEdit(index,row) {
                console.log(index,row)
                this.index = index
                this.dialogFormVisible = true
                this.form = JSON.parse(JSON.stringify(row))
                console.log(this.form)
            },
            async handleDelete(index,row) {
                const res = await getFoods('get','http://127.0.0.1:3002/delete',{deleteId:row._id})
                console.log(index,row)
                if(res.data == 'success') {
                    this.$message({
                        type: 'success',
                        message: '删除成功'
                    })
                    this.tableData.splice(index,1)
                    this.getcount()
                    console.log(this.total)
                }
            },
            async updatefood() {
                const res = await getFoods('get','http://127.0.0.1:3002/update',{form: this.form})
                if (res.data != 'success') return
                this.tableData.splice(this.index,1,this.form)
                this.dialogFormVisible = false
                console.log(this.form)
            },
            async getData(val) {
                const res = await getFoods('get','http://127.0.0.1:3002/foodpage',{pagesize:this.pagesize,page:val})
                console.log(res.data)
                this.tableData = res.data
            },
            async getcount() {
                const res = await getCount('get','http://127.0.0.1:3002/getcount')
                this.total = res.data
            },
            handleCurrentChange(val) {
                this.getData(val)
            }
        },
        created() {
            this.getData(1)
            this.getcount()
            // for (var i=1;i<20;i++) {
            //     this.tableData.push({
            //         id: '12987126',
            //         name: '好滋好味鸡蛋仔',
            //         category: '江浙小吃、小吃零食',
            //         desc: '荷兰优质淡奶，奶香浓而不腻',
            //         address: '上海市普陀区真北路',
            //         shop: '王小虎夫妻店',
            //         shopId: '10333'
            //     })
            // }
        },
    }
</script>

<style lang="less">
.table_container {
    padding: 20px;
}
.pagination {
    margin-top: 10px;
}
.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}
.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
</style>