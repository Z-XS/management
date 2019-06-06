<template>
    <div class="login_page fillcontain">
        <transition name="form-fade" mode='in-out'>
            <section class="form_contianer" v-show="show">
                <div class="manage_tip">
                    <p>后台管理系统</p>
                </div>
                <el-form :model="loginForm" :rules="rules" ref="loginForm1">
                    <el-form-item prop="username">
                        <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" @keyup.enter.native="submitForm('loginForm')" placeholder="密码" v-model="loginForm.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary"  @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
                    </el-form-item>
                </el-form>
                <p class="tip">温馨提示：</p>
                <p class="tip">未登录过的新用户，自动注册</p>
                <p class="tip">注册过的用户可凭账号密码登录</p>
            </section>
        </transition>
    </div>
</template>

<script>
    import {setCookie,getCookie} from "../utils/cookie.js"
    import {postCookie} from "../utils/index.js"
    import {mapState,mapActions} from 'vuex'
export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            show: false,
            rules: {
                username: [
                    {required:true,message:'请输入名字',trigger: 'blur'}
                ],
                password: [
                    {required:true,message:'请输入密码',trigger: 'blur'}
                ]
            }
        }
    },
    computed: {
        ...mapState(['adminInfo'])
    },
    methods: {
        ...mapActions(['getadminInfo','setadminInfo']),
        submitForm: function(formName) {
            this.$refs['loginForm1'].validate((valid) => {
                if(valid) {
                    // console.log(valid)
                    this.pCookie()
                    // setCookie('username',this.loginForm.username,7)
                    // setCookie('password',this.loginForm.password,7)
                    // setCookie('ID',this.loginForm.username + ':' + this.loginForm.password , 7)
                    // this.$router.push('/manage')
                }else {
                    return false
                }
            })
        },
        submit() {
            console.log(32132)
        },
        async pCookie() {
            const cook = escape(this.loginForm.username + ':' + this.loginForm.password)
            const bool = await postCookie('post','http://127.0.0.1:3002/login',{username:this.loginForm.username,password:this.loginForm.password,cookie:cook})
            console.log(bool)
            if(bool.data) {
                this.setadminInfo(this.loginForm.username)
                setCookie('ID',this.loginForm.username + ':' + this.loginForm.password ,7)
                this.$router.push('/manage')
                this.loginForm = {}
            }
        },
        async loginCookie(a,b) {
            const logboolen = await postCookie('post','http://127.0.0.1:3002/cookieLogin',{username:a,password:b})
            // console.log(logboolen)
            if (logboolen.data == 'yes') {
                console.log('success')
                this.$router.push('/manage')
            }
        }
    },
    created() {
        if(!this.adminInfo) {
            this.getadminInfo()
        }   
    },
    mounted() {
        this.show = true
        // let a = getCookie('username')
        // if(a != undefined) {
        //     // console.log(a)
        // let b = getCookie('password')
        // this.loginCookie(a,b)
        // }

        // console.log(unescape('admin%3A654789'))
    },
    watch: {
        adminInfo: function(value) {
            if(value) {
                console.log('yidenglu')
                this.$message({
                    type: 'success',
                    message: '登陆成功'
                })
                this.$router.push('/manage')
            }
        }
    }
}
</script>
  
  <style lang="less" scoped>
      @import '../style/mixin';
      .login_page{
          background-color: #324057;
      }
      .manage_tip{
          position: absolute;
          width: 100%;
          top: -100px;
          left: 0;
          p{
              font-size: 34px;
              color: #fff;
          }
      }
      .form_contianer{
          .wh(320px, 210px);
          .ctp(320px, 210px);
          padding: 25px;
          border-radius: 5px;
          text-align: center;
          background-color: #fff;
          .submit_btn{
              width: 100%;
              font-size: 16px;
          }
      }
      .tip{
          font-size: 12px;
          color: red;
      }
      .form-fade-enter-active {
            transition: all 1s;
      }
      .form-fade-enter {
            transform: translate3d(0, -50px, 0);
            opacity: 0;
      }
  </style>