<template>
    <div id="main">
        <div id="nav">
            <div class="navbar navbar-expand-md navbar-dark navbar-fixed-top">
                <a href="javascript:;" class="navbar-brand">美食随身拍</a>
                <button data-toggle="collapse" data-target="#nav_ul" class="navbar-toggler">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="nav_ul" class="collapse navbar-collapse">
                    <div>
                        <ul class="navbar-nav justify-content-sm-between">
                            <li class="nav-item"> <a href="." data-href="#main" class="nav-link active-nav">首页</a></li>
                            <li class="nav-item"><a href="javascritp:;" data-href="#about" class="nav-link">关于我们</a></li>
                            <li class="nav-item"><a href="javascritp:;" data-href="#photo" class="nav-link">美食摄影</a></li>
                            <li class="nav-item"><a href="javascritp:;" data-href="#ay-video" class="nav-link">美食视频</a></li>
                            <li class="nav-item"><a href="javascritp:;" data-href="#community" class="nav-link">美食社区</a></li>
                            <li class="nav-item"><a href="javascritp:;" data-href="#contact" class="nav-link">联系我们</a></li>
                            <div class="loreg" style="position: absolute; right: 20px;">
                                <li class="nav-item" style="float: left; margin-right: 10px;">
                                    <a href="javascritp:;" data-href="#login" class="nav-link">登录</a>
                                </li>
                                <li class="nav-item" style="float: left;">
                                    <a href="javascritp:;" data-href="#reg" class="nav-link">注册</a>
                                </li>
                                <li class="nav-item collapse" style="float: left;">
                                    <a href="javascritp:;" data-href="#del" class="nav-link"></a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="banner">
            <div class="banner-img" v-for="(elem,i) in banner" :key='i' :style="'background: url('+elem+')'">
                <div>
                    <h1>美食摄影-{{imgTitle[i].tit}}</h1>
                    <p>{{imgTitle[i].con}}</p>
                </div>
            </div>
            <ul class="banner-tor" @click="moveto">
                <li :data-i="t"  v-for="(elem,t) in banner" :key='t'></li>
            </ul>
            <div class="arrow-left arrow" style="opacity: 1;">
                <span class="iconfont" @click="prev">&#xe65f;</span>
            </div>
            <div class="arrow-right arrow" style="opacity: 1;">
                <span class="iconfont" @click="next">&#xe65e;</span>
            </div>
        </div>

        <a href="javascritp:;" class="top" style="display:none;" ><span class="iconfont">&#xe624;</span></a>
    </div>
</template>

<style scoped>
    *{transition: 0.5s;}
    #nav_ul ul a:hover{color:  #18d26e !important;}
    /* 顶部 */
    .top{
        position: fixed;background: #18d26e;
        color: #fff;display: inline-block;
        width: 44px;height: 44px;z-index: 11;
        text-align: center;line-height: 1;
        font-size: 32px;border-radius: 50%;text-decoration: none;
        right: 15px;bottom: 15px;transition: background 0.5s;
    }
    #banner{position: relative;width: 100%;overflow: hidden;height: 100vh;}
    /* 轮播图 */
    .banner-img{
        width: 100%;height: 100vh;opacity: 0;position: absolute;
        background-size: cover !important;top: 0;left: 0;
        background-position: center !important;transition: 1s ease;
        background-repeat: no-repeat !important;
    }
    .banner-img>div{position: absolute;left: 180px;bottom: 120px;text-align: center;}
    .banner-img>div h1,.banner-img>div p{color: #fff;font-size: 40px;font-weight: 100;}
    .banner-img>div p{bottom: 160px;font-size:24px;}

    .banner-tor li:nth-child(1){background:#fff;}
    #banner div:nth-child(1){opacity: 1 !important;}
    /* 指示符 */
    .banner-tor{
        position: absolute;
        right: 0;left: 0;
        bottom: 50px;z-index: 15;
        display: flex;
        justify-content: center;
        padding-left: 0;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    }
    .banner-tor li{
        position: relative;
        flex: 0 1 auto;
        width: 30px;
        height: 5px;
        margin-right: 3px;
        margin-left: 3px;
        text-indent: -999px;
        background-color: rgba(255,255,255,.5);
    }
    /* 左右箭头 */
    .arrow{position: absolute;top: 50%;height: 100vh;}
    .arrow span{font-size:50px;color:rgba(255,255,255,0.8);font-weight: 600;cursor: pointer;}
    .arrow-left{left: 30px;}
    .arrow-right{right:30px;}
    .arrow span:hover{color: #fff;}
    /* 导航栏 */
    #nav{
        padding: 10px 60px;
        position: fixed;
        left: 0;top: 0;right: 0;
        transition: all 0.5s;
        z-index: 997;
    }
    #nav:hover{background:rgba(0, 0, 0, 0.9) !important;}
    .navbar-brand{
        font-size: 34px;
        line-height: 1;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        letter-spacing: 3px;
        color: #fff;
        padding-left: 10px;
        border-left: 4px solid #18d26e;
    }
    #nav_ul{flex-direction: row-reverse;}
    #nav_ul ul{height:40px;}
    #nav_ul li{margin-left: 10px;}
    #nav_ul a{
        font-family: "Montserrat", sans-serif;
        padding: 10px 8px 10px 8px;
        text-decoration: none;
        display: inline-block;
        color: #fff;
        font-size: 13px;
        outline: none;
    }
    .a-active{color: #18d26e !important;}
</style>

<script>
import { setTimeout } from 'timers';
export default {
    props:['banner','imgTitle'],
    data(){
        return{
            bindex:1,
            t:"",
            down:true,
        }
    },
    methods:{
        prev(){
            if(this.down){
                this.bindex--;clearInterval(this.t);
                this.down = false;
            }
        },
        next(){
            if(this.down){
                this.bindex++;clearInterval(this.t);
                this.down = false;
            }
        },
        moveto(e){
            if(e.target.nodeName == 'LI'){
                clearInterval(this.t)
                this.bindex = parseInt($(e.target).attr('data-i'))+1
            }
        },
        // 清除选中超链接样式
        cleanAll(){
            var ali = $('#nav_ul a')
            for(var a of ali){
                $(a).removeClass('a-active')
            }
        }
    },
    mounted(){
    // 设置一秒内只能点击一次更换图片
        setInterval(() => {
            this.down=true
        },1000);
    // 创建定时器和销毁
        this.t = setInterval(()=>{this.bindex++},3000)
        $('#banner').hover(
            ()=>{clearInterval(this.t)},
            ()=>{this.t = setInterval(()=>{this.bindex++},3000)},
        )
    // 锚点跳转
        $('#nav_ul a').click(e=>{
            var dataHref = $(e.target).attr('data-href')
            this.cleanAll()
            try{
                $('html,body').animate({scrollTop:$(dataHref).offset().top-60},1000)
                $(`a[data-href='${dataHref}']`).addClass('a-active')
            }catch(err){
                console.log(dataHref)
                if(dataHref=='#community'){
                    this.cleanAll()
                    this.$router.push('/community')
                }else if(dataHref=='#login'){
                    this.$router.push('/login')
                    $(`a[data-href='${dataHref}']`).addClass('a-active')
                }else if(dataHref=='#reg'){
                    this.$router.push('/reg')
                    $(`a[data-href='${dataHref}']`).addClass('a-active')
                }else if(dataHref=='#user'){
                    this.$router.push('/home')
                }else if(dataHref=='#del'){
                    sessionStorage.removeItem('user')
                    sessionStorage.removeItem('uid')
                    sessionStorage.removeItem('look-uid')
                    setTimeout(()=>{
                        window.location.reload()
                    },100)
                    
                }else if(dataHref=='#upload'){
                    this.$router.push('/upload')
                }else{
                    this.$router.push('/')
                    setTimeout(()=>{
                        $('html,body').animate({scrollTop:$(dataHref).offset().top-60},1000)
                        this.cleanAll()
                        $(`a[data-href='${dataHref}']`).addClass('a-active')
                    },500)
                }
            }
        })
    // 顶部按钮 和 导航栏显示
        var backButton=$('.top');
        var nav = $('#nav');

        function backToTop() {
            $('html,body').animate({
                scrollTop: 0
            },1000);
        }
        backButton.on('click', backToTop);

        $(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
            if ($(window).scrollTop() > $(window).height())
                backButton.fadeIn();
            else{
                backButton.fadeOut();
            }

            if ($(window).scrollTop() > 80)
                nav.css('background','rgba(0, 0, 0, 0.9)')
            else{
                nav.css('background','rgba(0, 0, 0, 0)')
            }
        });
        $(window).trigger('scroll');/*触发滚动事件，避免刷新的时候显示回到顶部按钮*/
    },
    watch:{
        bindex(){
            
            var bann = $('.banner-img')
            var tor = $('.banner-tor li')
            for(var x of bann){$(x).css('opacity','0')}
            for(var y of tor){$(y).css('background','rgba(255,255,255,.5)')}
            $(bann[this.bindex-1]).css('opacity','1')
            $(tor[this.bindex-1]).css('background','#fff')

            if(this.bindex>this.banner.length){this.bindex =1}
            if(this.bindex<1){this.bindex =this.banner.length}
        }
    }
}
</script>
