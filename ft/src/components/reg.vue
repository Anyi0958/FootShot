<template>
<div class="parent">
    <ul class="cx-ul ul">
        <a class="none" href="javascript:;">
            <li class="cx-ul-li1">
                <div class="cx-ul-li-d1" @click="reset">忘记密码</div>
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
                        <li class="cx-ul-li3-d1-d2-ul-li2">
                            <div class="cx-ul-li3-d1-d2-ul-li2-d1">
                                <input id="cx-upwd" class="cx-ul-li3-d1-d2-ul-li2-d1-input" type="password" name="pwd" value="" placeholder="密码">
                            </div>
                            <div id="cx-d2" class="cx-ul-li3-d1-d2-ul-li2-d2">* 密码必须填写!</div>
                        </li>
                        <li class="cx-ul-li3-d1-d2-ul-li3 bg">
                            <div class="cx-ul-li3-d1-d2-ul-li2-d1">
                                <input id="cx-upwd-upwd" class="cx-ul-li3-d1-d2-ul-li2-d1-input" type="password" name="ppwd" value="" placeholder="确认密码">
                            </div>
                            <div id="cx-d3" class="cx-ul-li3-d1-d2-ul-li2-d3">* 输入密码不一致!</div>
                        </li>
                        <li class="cx-ul-li3-d1-d2-ul-li4 bg">
                            <div class="cx-ul-li3-d1-d2-ul-li2-d1 newbg1">
                                <input id="cx-phone" class="cx-ul-li3-d1-d2-ul-li2-d1-input" type="text" name="tel" value="" maxlength="11" placeholder="手机号">
                            </div>
                            <div id="cx-d4" class="cx-ul-li3-d1-d2-ul-li2-d2">* 手机号必须填写!</div>
                        </li>

                        <li class="cx-ul-li3-d1-d2-ul-li4 bg">
                            <div class="cx-ul-li3-d1-d2-ul-li2-d1 newbg2" style="position: relative;">
                                <canvas id="canvas" width="100" height="43"></canvas>
                                <input id="cx-vc" class="cx-ul-li3-d1-d2-ul-li2-d1-input inp" type="password" name="yzm" value="" placeholder="验证码">
                            </div>
                            <div id="cx-d5" class="cx-ul-li3-d1-d2-ul-li2-d2 ">* 验证码不正确!</div>
                        </li>
                    </ul>
                </div>
                <div class="cx-ul-li3-d1-d4">
                    <input id="cx-agree" type="checkbox" value="我已阅读并同意">
                    <span>我已阅读并同意</span>
                    <a href="javascript:;">逸晨条款</a>
                </div>
                <div style="opacity:0"></div>
                <div class="cx-ul-li3-d1-d3">
                    <!-- 如果要实现验证需要加上 btn 属性 -->
                    <button id="cx-reg" class="cx-ul-li3-d1-d3-input " disabled>注册</button>
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
    right: -16px;
    position: absolute;
    top: -14px;
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
    background: url("../../static/img/user/l1.jpg") top no-repeat;
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
    height: 60px;
    background: url("../../static/img/user/l8.jpg") top no-repeat;
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
    data() {
        return {
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
        reset(){
            this.$router.push('/reset')
        },
    },
    mounted(){

        // 绘制验证码
        function draw(show_num) {
            var canvas_width=$('#canvas').width();
            var canvas_height=$('#canvas').height();
            var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
            var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
            canvas.width = canvas_width;
            canvas.height = canvas_height;
            var sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
            var aCode = sCode.split(",");
            var aLength = aCode.length;//获取到数组的长度
            
            for (var i = 0; i <= 3; i++) {
                var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
                var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
                var txt = aCode[j];//得到随机的一个内容
                show_num[i] = txt.toLowerCase();
                var x = 10 + i * 20;//文字在canvas上的x坐标
                var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
                context.font = "bold 23px 微软雅黑";

                context.translate(x, y);
                context.rotate(deg);

                context.fillStyle = randomColor();
                context.fillText(txt, 0, 0);

                context.rotate(-deg);
                context.translate(-x, -y);
            }
            for (var i = 0; i <= 5; i++) { //验证码上显示线条
                context.strokeStyle = randomColor();
                context.beginPath();
                context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
                context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
                context.stroke();
            }
            for (var i = 0; i <= 30; i++) { //验证码上显示小点
                context.strokeStyle = randomColor();
                context.beginPath();
                var x = Math.random() * canvas_width;
                var y = Math.random() * canvas_height;
                context.moveTo(x, y);
                context.lineTo(x + 1, y + 1);
                context.stroke();
            }
        }
        // 绘制验证码
        function randomColor() {//得到随机的颜色值
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            return "rgb(" + r + "," + g + "," + b + ")";
        }

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
        // 用户名验证
        $('#cx-user').blur((e)=>{
            if($('#cx-user').val()==''){
                $('#cx-d1').css('opacity','1')
                $('#cx-d1').html('* 账号必须填写!')
            }else{
                this.axios.get('/user',
                    {params:{
                        'user':String($('#cx-user').val())
                        }
                    }).then((msg)=>{
                    if(msg.data.code=='201'){
                        $('#cx-d1').css('opacity','1')
                        $('#cx-d1').html(msg.data.data)
                    }
                })
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
        // 验证码验证
        $(function(){
            var show_num = [];
            draw(show_num);

            $("#canvas").on('click',function(){
                draw(show_num);
            })
            $("#cx-vc").on('blur',function(){
                var val = $("#cx-vc").val().toLowerCase();
                var num = show_num.join("");
                if(val==''){
                    $('#cx-d5').css('opacity','1')
                    $('#cx-d5').html('* 请输入验证码!')
                }else if(val == num){
                    $('#cx-d5').css('opacity','0')
                    $(".input-val").val('');
                }else{
                    $('#cx-d5').css('opacity','1')
                    $('#cx-d5').html('* 验证码不正确!')
                    $(".input-val").val('');
                    draw(show_num);
                }
            })
        })
        // 用户须知
        $('#cx-agree').click(function(e){
            if($(e.target).attr('checked')==undefined){
                $('#cx-agree').attr('checked','checked')
                $('#cx-reg').attr("disabled",false);
                $('#cx-reg').css("background",'#18d26e');
            }else{
                $('#cx-agree').attr('checked',false)
                $('#cx-reg').attr("disabled",true);
                $('#cx-reg').css("background",'#474747');
            }
        })
        // 注册
        $('#cx-reg').click(()=>{
            var down=[]
            console.log(down)
            for(var x of $('input')){
                if($(x).val()=='' || $(x).parent().next().css('opacity')=='1'){
                    $(x).parent().next().css('opacity','1')
                    down.push('false')
                    console.log($(x))
                }
            }
            if(down.indexOf('false')==-1){
                this.axios.get('/reg',
                    {params:{
                        'user':$('#cx-user').val(),
                        'pwd':$('#cx-upwd').val(),
                        'tel':$('#cx-phone').val()
                    }}
                )
                .then((msg)=>{
                    this.$toast({message:msg.data})
                    if(msg.data=='手机号已被注册'){
                        $('#cx-d4').parent().next().css('opacity','1')
                        $('#cx-d4').parent().next().html('* 手机号已被注册!')
                    }else{
                        setTimeout(()=>{
                            sessionStorage.setItem('user',$('#cx-user').val())
                            this.$router.push('/community')
                        },1000)

                    }
                })
            }
        })
    }
}
</script>
