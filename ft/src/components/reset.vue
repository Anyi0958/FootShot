<template>
 <div class="parent">
    <ul class="cx-ul ul">
        <a class="none" href="javascript:;">
            <li class="cx-ul-li1">
                <div class="cx-ul-li-d1" @click="reg">注册</div>
            </li>
        </a>
        <a class="none" href="javascript:;"  @click="login">
            <li class="cx-ul-li2">
                <div class="cx-ul-li-d2">登录</div>
            </li>
        </a>
        <li class="cx-ul-li3">
            <div class="cx-ul-li3-d1">
                <div class="cx-ul-li3-d1-d1"></div>
                <div class="cx-ul-li3-d1-d2">
                    <ul class="cx-ul-li3-d1-d2-ul ul" style="padding: 0;outline: none;">
                        <li class="cx-ul-li3-d1-d2-ul-li1">
                            <div class="cx-ul-li3-d1-d2-ul-li-d1">
                                <input id="cx-user" class="cx-ul-li3-d1-d2-ul-li-d1-input" type="text" name="user" value="" placeholder="账号">
                            </div>
                            <div id="cx-d1" class="cx-ul-li3-d1-d2-ul-li-d2">* 账号必须填写!</div>

                        </li>
                        <li class="cx-ul-li3-d1-d2-ul-li4 bg">
                            <div class="cx-ul-li3-d1-d2-ul-li2-d1 newbg1">
                                <input id="cx-phone" class="cx-ul-li3-d1-d2-ul-li2-d1-input" type="text" name="tel" value="" maxlength="11" placeholder="手机号">
                            </div>
                            <div id="cx-d4" class="cx-ul-li3-d1-d2-ul-li2-d2">* 手机号必须填写!</div>
                        </li>
                        <li class="cx-ul-li3-d1-d2-ul-li2">
                            <div class="cx-ul-li3-d1-d2-ul-li2-d1">
                                <input id="cx-upwd" class="cx-ul-li3-d1-d2-ul-li2-d1-input" type="password" name="pwd" value="" placeholder="新密码">
                            </div>
                            <div id="cx-d2" class="cx-ul-li3-d1-d2-ul-li2-d2">* 密码必须填写!</div>
                        </li>
                        <li class="cx-ul-li3-d1-d2-ul-li3 bg">
                            <div class="cx-ul-li3-d1-d2-ul-li2-d1">
                                <input id="cx-upwd-upwd" class="cx-ul-li3-d1-d2-ul-li2-d1-input" type="password" name="ppwd" value="" placeholder="确认密码">
                            </div>
                            <div id="cx-d3" class="cx-ul-li3-d1-d2-ul-li2-d3">* 输入密码不一致!</div>
                        </li>
                        
                    </ul>
                </div>
                <div class="cx-ul-li3-d1-d3">
                    <!-- 如果要实现验证需要加上 btn 属性 -->
                    <button id="cx-reg" class="cx-ul-li3-d1-d3-input ">立即找回</button>
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
#canvas {
    display: inline-block;
    border-radius: 5px;
    cursor: pointer;
    right: 0;
    position: absolute;
    top: -22px;
}
body{
    min-width:100% ;
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
/* 总div */
.parent {
    width: 100%;
    height: 940px !important;
    background-color: rgba(0, 0, 0, .5);
    margin: 0 auto;
    padding-top: 40px;
}


/* ul */

.parent>ul {
    height:100%;
    display: flex;
    justify-content: space-around;
}


/* li */

.parent>ul li {
    background: rgba(255, 255, 255, .5);
    border-radius: 5px;
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
    width: 140px;
    height: 140px;
    padding: 40px 10px;
    display: flex;
    margin-top: 260px;
}

.cx-ul-li-d1 {
    width: 120px;
    height: 40px;
    line-height: 40px;
    padding-top: 40px;
    margin: 0 auto;
    background: url("../../static/img/user/l2.jpg") top no-repeat;
}


/* 第二个a */

.cx-ul-li2 {
    width: 180px;
    height: 260px;
    padding: 100px 30px;
    display: flex;
    margin-top: 200px;
}

.cx-ul-li-d2 {
    width: 120px;
    height: 40px;
    line-height: 40px;
    padding-top: 40px;
    background: url("../../static/img/user/l9.jpg") top no-repeat;
}


/* 第三个li */

.cx-ul-li3 {
    width: 410px;
    height: 625px;
    padding: 20px;
    display: flex;
    background-color: #fff!important;
}

.cx-ul-li3-d1 {
    padding-top: 40px;
    padding-bottom: 150px;
    margin: 0 auto;
}


/* 第三个li里的logo样式*/

.cx-ul-li3-d1-d1 {
    width: 300px;
    height: 68px;
    background: url("../../static/img/user/l12.jpg") top no-repeat;
}


/* 第三个li里的保存按钮和输入框的div*/

.cx-ul-li3-d1-d2 {
    width: 300px;
    height: auto;
    margin: 45px 0 15px 0;
    padding:0;
}

/* 第三个li里的第二个div中的ul下用户名输入框的样式*/

.cx-ul-li3-d1-d2-ul-li1 {
    display: block;
    width: 300px;
    height: auto;
    padding:0px 5px 0px 0;
}

.cx-ul-li3-d1-d2-ul-li1:hover {
    background-color: #fff!important;
}

.cx-ul-li3-d1-d2-ul-li-d1 {
    width: 270px;
    height: 30px;
    line-height: 25px;
    padding-left: 35px;
    margin: 0 auto;
    border-bottom: solid 2px #000;
    background: url("../../static/img/user/l5.jpg") no-repeat;
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
    padding:0 0 5px 0;
}

.cx-ul-li3-d1-d2-ul-li2:hover {
    background-color: #fff!important;
}

.cx-ul-li3-d1-d2-ul-li2-d1 {
    width: 270px;
    height: 30px;
    line-height: 25px;
    padding-left: 35px;
    margin:0 auto;
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


/* 其他输入框 */

.bg {
    background-color: #fff!important;
}

.cx-ul-li3-d1-d2-ul-li2-d3 {
    display: block;
    margin: 5px 0;
    color: red;
    font-size: 15px;
    text-align: center;
    opacity: 0;
}
.newbg1{background:url("../../static/img/user/l10.jpg") no-repeat;}
.newbg2{background:url("../../static/img/user/l7.jpg") no-repeat;}


/* 注册按钮样式 */

.cx-ul-li3-d1-d3 {
    width: 300px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-top: 30px;
}

.cx-ul-li3-d1-d3-input {
    width: 160px;
    cursor: pointer;
    height: 40px;
    line-height: 37px;
    padding: 0 0 3px 12px;
    letter-spacing: 10px;
    border: none;
    border-radius: 5px;
    background-color: #474747;
    font-size: 18px;
    color: #fff;
    text-align: center;
    outline: none !important;
}



/* 我已阅读按钮 */

.cx-ul-li3-d1-d4 {
    width: 300px;
    height: auto;
    line-height: 10px;
    margin: 0 auto;
    text-align: center;
    font-size: 15px!important;
}

.cx-ul-li3-d1-d4>span {
    display: inline-block;
    padding-top: 8px;
}

.cx-ul-li3-d1-d4>a {
    cursor: pointer;
    color: #7fb5dd!important;
    font-size: 12px!important;
}

.cx-ul-li3-d1-d4>a:hover {
    color: orange!important;
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
export default {
  data(){
    return{
        down:[],
    }
  },
  methods:{
    login(){
        this.$router.push('/login')
    },
    home(){
        this.$router.push('/')
    },
    reg(){
        this.$router.push('/reg')
    },
  },
  mounted(){
    $('.parent').css('background','url("../../static/img/index/img/banner4.jpg") no-repeat')
    $('.parent').css('background-size','cover')
    $('.parent').css('background-position','center')
    // 表单事件
    $('input').blur((e)=>{
        if($(e.target).val()==''){
            $(e.target).parent().next().css('opacity','1')
        }else if($(e.target).val()=="我已阅读并同意"){    
        }else{
            $(e.target).parent().next().css('opacity','0')
        }
    })
    // 密码验证
    $('#cx-upwd-upwd').blur((e)=>{
        if($('#cx-upwd-upwd').val() == $('#cx-upwd').val()){
            $(e.target).parent().next().css('opacity','0')
        }else{
            $(e.target).parent().next().css('opacity','1')
        }
    })
    // 手机号验证
    $('#cx-phone').blur((e)=>{
        if(($(e.target).val()).match('^1+[35678]+\\d{9}')!=null){ 
            $(e.target).parent().next().css('opacity','0')
        }else if($(e.target).val()==''){
            $(e.target).parent().next().css('opacity','1')
            $(e.target).parent().next().html('* 手机号必须填写!')
        }else{
            $(e.target).parent().next().css('opacity','1')
            $(e.target).parent().next().html('* 手机号格式错误!')
        }
    })
    // 注册
    $('#cx-reg').click(()=>{
        var down=[]
        for(var x of $('input')){
            if($(x).val()=='' || $(x).parent().next().css('opacity')=='1'){
                $(x).parent().next().css('opacity','1')
                down.push('false')
            }
        }
        if(down.indexOf('false')==-1){
            this.axios.post('/reset',`pwd=${$('#cx-upwd').val()}&user=${$('#cx-user').val()}&tel=${$('#cx-phone').val()}`)
            .then(msg=>{
                if(msg.data.affectedRows==0){
                    this.$toast({message:'修改失败，请重新填写'})
                }else{
                    this.$toast({message:'修改成功'})
                    setTimeout(() => {
                        this.$router.push('/login')
                    },1000);
                }
            })
        }
    })
  }
}
</script>