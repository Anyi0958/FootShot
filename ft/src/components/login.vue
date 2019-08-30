<template>
<div class="parent">
    <ul class="cx-ul ul pl-0" style="display:flex">
        <a class="none" href="javascript:;">
            <li class="cx-ul-li1">
                <div class="cx-ul-li-d1" @click="reset">忘记密码</div>
            </li>
        </a>
        <a class="none" href="javascript:;" @click="reg">
            <li class="cx-ul-li2">
                <div class="cx-ul-li-d2">注册</div>
            </li>
        </a>
        <li class="cx-ul-li3">
            <div class="cx-ul-li3-d1">
                <div class="cx-ul-li3-d1-d1"></div>
                <div class="cx-ul-li3-d1-d2">
                    <ul class="cx-ul-li3-d1-d2-ul ul" style="
                    padding: 0;
                    outline: none;">
                        <li class="cx-ul-li3-d1-d2-ul-li1">
                            <div class="cx-ul-li3-d1-d2-ul-li-d1">
                                <input id="cx-user" class="cx-ul-li3-d1-d2-ul-li-d1-input" type="text"  name="username" value="" placeholder="账号">
                            </div>
                            <div id="cx-d1" class="cx-ul-li3-d1-d2-ul-li-d2">* 账号必须填写!</div>
                        </li>
                        <li class="cx-ul-li3-d1-d2-ul-li2">
                            <div class="cx-ul-li3-d1-d2-ul-li2-d1">
                                <input id="cx-upwd" class="cx-ul-li3-d1-d2-ul-li2-d1-input" type="password" name="password" value="" placeholder="密码">
                            </div>
                            <div id="cx-d2" class="cx-ul-li3-d1-d2-ul-li2-d2">* 密码必须填写!</div>
                        </li>
                    </ul>
                </div>
                <div class="cx-ul-li3-d1-d3">
                    <button class="cx-ul-li3-d1-d3-input cx-login" >登录</button>
                </div>

            </div>
        </li>
        <a class="none" href="javascript:;">
            <li class="cx-ul-li2">
                <div class="cx-ul-li-d4" @click="home">首页</div>
            </li>
        </a>
        <a class="none" href="javascript:;">
            <li class="cx-ul-li1">
                <div class="cx-ul-li-d5">QQ账号登录</div>
            </li>
        </a>
    </ul>
</div>
</template>

<style scoped>
@media (max-width: 1090px) {
    .none{
        display: none;
    }
    .cx-ul{
        padding:40px!important;
    }
}
/* 总div */
body{
    min-width:100%;
}
.none {
    text-decoration: none;
}

.none:hover {
    text-decoration: none;
}

.ul {
    list-style: none;
}
.parent {
    width: 100%;
    height: 940px !important;
    background-color: rgba(0, 0, 0, .5);
    margin: 0 auto;
    padding-top: 40px;
}


/* ul */

.parent>ul {
    height: 100%;
    display: flex;
    justify-content: space-around;
}


/* li */

.parent>ul li {

    background: rgba(255, 255, 255, .5);
    border-radius: 5px !important;
}

.parent>ul li:hover {
    background-color: #f7f7f8;
}


/* 所有a */

.parent>ul a {
    color: #000;
    font-size: 18px;
    font-weight: 200;
    letter-spacing: 1px;
    text-align: center;
}


/* 第一个a */

.cx-ul-li1 {
    width: 140px!important;
    height: 140px!important;
    padding: 40px 10px!important;
    display: flex;
    margin-top: 260px;
}

.cx-ul-li-d1 {
    width: 120px;
    height: 40px;
    line-height: 40px;
    padding-top: 40px;
    margin: 0 auto;
    background: url("../../static/img/user/l1.jpg") top no-repeat;
}


/* 第二个a */

.cx-ul-li2 {
    width: 180px!important;
    height: 260px!important;
    padding: 100px 30px;
    display: flex;
    margin-top: 200px;
}

.cx-ul-li-d2 {
    width: 120px;
    height: 40px;
    line-height: 40px;
    padding-top: 40px;
    background: url("../../static/img/user/l2.jpg") top no-repeat;
}


/* 第三个li */

.cx-ul-li3 {
    width: 410px!important;
    height: 625px!important;
    padding: 20px!important;
    display: flex!important;
    background-color: #fff!important;
}

.cx-ul-li3-d1 {
    padding-top: 80px;
    padding-bottom: 128px;
    margin: 0 auto;
}


/* 第三个li里的logo样式*/

.cx-ul-li3-d1-d1 {
    width: 300px;
    height: 60px;
    background: url("../../static/img/user/login.jpg") top no-repeat;
}


/* 第三个li里的保存按钮和输入框的div*/

.cx-ul-li3-d1-d2 {
    width: 300px;
    height: auto;
    margin: 50px 0;
    padding: 20px 0;
}


/* 第三个li里的第二个div中的ul下用户名输入框的样式*/

.cx-ul-li3-d1-d2-ul-li1 {
    display: block;
    width: 300px;
    height: auto;
    padding: 50px 0;
}

.cx-ul-li3-d1-d2-ul-li1:hover {
    background-color: #fff!important;
}

.cx-ul-li3-d1-d2-ul-li-d1 {
    width: 270px;
    height: 30px;
    line-height: 25px;
    padding-left: 35px;
    border-bottom: solid 2px #000;
    background: url("../../static/img/user/l10.jpg") no-repeat;
}

.cx-ul-li3-d1-d2-ul-li-d1-input {
    border: 0;
    outline: none;
    font-size: 16px;
}

.cx-ul-li3-d1-d2-ul-li-d1-input:focus {
    background-color: #fff;
}

.cx-ul-li3-d1-d2-ul-li-d2 {
    display: block;
    margin: 5px 0;
    color: red;
    font-size: 15px;
    text-align: center;
    opacity: 0;
}


/* 第三个li里的第二个div中的ul下密码输入框的所有样式*/

.cx-ul-li3-d1-d2-ul-li2 {
    display: block;
    width: 300px;
    height: auto;
    padding-bottom: 20px;
}

.cx-ul-li3-d1-d2-ul-li2:hover {
    background-color: #fff!important;
}

.cx-ul-li3-d1-d2-ul-li2-d1 {
    width: 270px;
    height: 30px;
    line-height: 25px;
    padding-left: 35px;
    border-bottom: solid 2px #000;
    background: url("../../static/img/user/l6.jpg") no-repeat;
}

.cx-ul-li3-d1-d2-ul-li2-d1-input {
    border: 0;
    outline: none;
    font-size: 16px;
}

.cx-ul-li3-d1-d2-ul-li2-d2 {
    display: block;
    margin: 5px 0;
    color: red;
    font-size: 15px;
    text-align: center;
    opacity: 0;
}


/* 登录按钮样式 */

.cx-ul-li3-d1-d3 {
    width: 300px!important;
    height: 40px;
    line-height: 40px;
    margin: auto;
    text-align: center;
    margin-top: -40px;
}

.cx-ul-li3-d1-d3-input {
    width: 240px!important;
    cursor: pointer;
    height: 40px;
    line-height: 37px;
    padding: 0 0 3px 12px;
    letter-spacing: 10px;
    border: none;
    border-radius: 5px;
    background-color: rgb(16, 150, 78)!important;
    font-size: 18px;
    color: #fff;
    text-align: center;
    outline: none;
}

.cx-ul-li3-d1-d3-input:hover {
    background-color: #474747;
}

.cx-ul-li3-d1-d3-input:active {
    background-color: rgb(16, 150, 78);
}


/* 清除痕迹按钮 */

.cx-ul-li3-d1-d4 {
    width: 300px;
    height: auto;
    line-height: 20px;
    margin: 20px auto;
    text-align: center;
}

.cx-ul-li3-d1-d4 p {
    font-size: 13px;
    color: #000;
    letter-spacing: 1px;
}

.cx-ul-li3-d1-d4>p a {
    cursor: pointer;
    color: #7fb5dd;
    font-size: 13px;
}

.cx-ul-li3-d1-d4>p a:hover {
    color: orange;
}


/* 右边两个样式 */

.cx-ul-li-d4 {
    /*第四个*/
    width: 120px;
    height: 40px;
    line-height: 40px;
    padding-top: 40px;
    background: url("../../static/img/user/l11.jpg") top no-repeat;
}

.cx-ul-li-d5 {
    /*第五个*/
    width: 120px;
    height: 40px;
    line-height: 40px;
    padding-top: 40px;
    margin: 0 auto;
    background: url("../../static/img/user/l3.jpg") top no-repeat;
}
</style>

<script>
import { setTimeout } from 'timers';
export default {
    data() {
        return {
            down:[],
        }
    },
    methods:{
        reg(){
            this.$router.push('/reg')
        },
        home(){
            this.$router.push('/')
        },
        reset(){
            this.$router.push('/reset')
        },
    },
    mounted(){
        $('.parent').css('background','url("../../static/img/index/img/banner7.jpg") no-repeat')
        $('.parent').css('background-size','cover')
        $('.parent').css('background-position','center')
        // 初级验证
        $('input').blur((e)=>{
            if($(e.target).val()==''){
                $(e.target).parent().next().css('opacity','1')
            }else{
                $(e.target).parent().next().css('opacity','0')
            }
        })
        // 登录
        $('.cx-login').click(()=>{
            this.down=[]
            for(var x of $('input')){
                if($(x).val()==''){
                    $(x).parent().next().css('opacity','1')
                    this.down.push('false')
                }
            }
            if(this.down.indexOf('false')==-1){
                this.axios.get('/login',
                    {params:{'user':$('#cx-user').val(),'pwd':$('#cx-upwd').val()}}
                )
                .then((msg)=>{
                    console.log(msg)
                    this.$toast({message:msg.data.data})
                    if(msg.data.code=='200'){
                        setTimeout(()=>{
                            this.$router.push('/community')
                            sessionStorage.setItem('uid',msg.data.uid)
                            sessionStorage.setItem('user',$('#cx-user').val())
                        },1000)
                    }
                })
            }
        })
    }
}
</script>