<template>
<div id="main">
    <myHeader :banner=banner :imgTitle=imgTitle></myHeader>
    <div id="showimg">
        <img>
        <span class="iconfont" @click="closeimg">&#xe6b5;</span>
    </div>
<!-- 关于我们 -->
    <div id="about">
        <div class="titcon">
            <h3>
                About Us
                <br>
                <span>关于我们</span>
            </h3>
            <br>
            <p>我们相信生活中的真善美，我们想和你分享，我们拥有创造美的能力，顷刻为你打开一个全新的美食视觉盛宴。</p>  
        </div>
    </div>
<!-- 美食摄影 -->
    <div id="photo">
        <div class="titcon" style="position:static;">
            <h3>
                FOOD PHOTOGRAPHY
                <br>
                <span>美食摄影</span>
            </h3> 
        </div>
        <div class="row mt-5">
            <div class="col-12 col-md-6 col-xl-4 mb-5" v-for='k of 9' :key='k'>
                <div class="ay-photo">
                    <img :src="photo[k-1]">
                    <div><span class="iconfont" @click="look" :data-url='photo[k-1]'>&#xe681;</span></div>
                </div>
                <div class="p-title"><a href="javascript:;">{{photoTit[k-1]}}</a></div>
            </div>
        </div>
    </div>
<!-- 美食视频 -->
    <div id="ay-video">
        <div class="titcon" style="position:static;">
            <h3>
                PHOTOGRAPHY COURSE
                <br>
                <span>美食视频</span>
            </h3> 
        </div>
        <div class="row mt-5">
            <div class="col-12 col-sm-6 col-md-4 mb-5" v-for='k of 9' :key='k'>
                <div class="ay-vi">
                    <video src="../../static/img/index/video/v1.mp4"  style="width:100%;"></video>
                    <div :style="'background:url('+videoImg[k-1]+')'"></div>
                    <div @click="play" style="opacity:0;transition:.5s;">
                        <span class="iconfont">&#xe640;</span>
                        <span class="iconfont" style="display:none">&#xe668;</span>
                    </div>
                </div>
                <div class="p-title"><a href="javascript:;">{{videoTit[k-1]}}</a></div>
            </div>
        </div>
    </div>
<!-- 联系我们 -->
    <div id="contact">
        <div class="titcon" style="position:static;">
            <h3>
                CONTACT US
                <br>
                <span>联系我们</span>
            </h3> 
        </div>
        <div class="row mt-5">
            <div class="col-12 col-md-4 col-12 mb-5">
                <span class="iconfont">&#xe636;</span>
                <h3>Address</h3>
                <p>河南｜郑州｜金水｜web1902</p>
            </div>
            <div class="col-12 col-md-4 col-12 mb-5">
                <span class="iconfont">&#xe601;</span>
                <h3>Phone Number</h3>
                <p>15939997050</p>
            </div>
            <div class="col-12 col-md-4 col-12 mb-5">
                <span class="iconfont">&#xe623;</span>
                <h3>Email</h3>
                <p>535354689@qq.com</p>
            </div>
        </div>
    </div>
<!-- 底部 -->
    <div class="ov">
        <p>© Copyright <span style="color:#18d26e;">逸晨</span> All Rights Reserved</p>
        <p>Technical support by myself</p>
    </div>

</div>
</template>

<style scoped>

/* 看图 */
    #showimg{position: fixed;top: 0;display: none;z-index: 10000;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.6);text-align: center;}
    #showimg img{background: #fff;padding:5px;}
    #showimg span{font-size: 36px;color: rgba(255, 255, 255, 0.8);cursor: pointer;position: absolute;}
/* 底部 */
    .ov{background: #000;height:100px;padding-top:22px;}
    .ov p{margin: 0;color:rgba(255,255,255,0.7);text-align: center;font-size:14px;margin-top: 5px;letter-spacing: 0;}
/* 联系我们 */
    #contact{text-align: center;background: #fff !important;}
    #contact h3{   margin-top: 20px;
        font-size: 18px;
        margin-bottom: 15px;
        font-weight: bold;
        text-transform: uppercase;
        color: #999;}
    #contact .row div:nth-child(2){border-left:1px solid #ddd;border-right:1px solid #ddd; }
    #contact .row span{font-size: 45px;color: #18d26e;}
/* 美食视频 */
    .ay-vi > div{
        width: 100%;height: 100%;
        position: absolute;
        z-index: 10;
        top:0;left:0;
        background-size: cover !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
    }
    .ay-vi > div>span{
        position: absolute;
        top: 50%;left: 50%;
        font-size: 46px;z-index: 20;
        margin-left: -23px;
        margin-top: -23px;
        color: #ffff;cursor: pointer;
    }
/* 美食摄影 */
    #photo,#contact,#ay-video{ background: #f7f7f7;padding: 80px 0 40px 0;}
/* 美食展示共用样式 */
    .row{
        width: 62%;
        margin-right: auto;
        margin-left: auto;
    }
/* 美食图片 */
    .ay-photo,.ay-vi{
        background: #000;
        overflow: hidden;
        height: 240px;
        position: relative;
        border-radius: 4px 4px 0 0;
        margin: 0;
    }
    .ay-photo img{
        max-width: 100%;
        height: auto;
    }
/* 眼睛 */
    .ay-photo>div{
        content: '';transition: .5s;
        display: block;
        position: absolute;
        top: 0;width: 100%;
        height: 240px;opacity: 0;
        background-color: rgba(0, 0, 0, 0.2);

    }
    .ay-photo span{opacity: 1 !important;
        color: #000;background:#fff;cursor: pointer;
        border-radius: 50%;padding:2px 8px;position: absolute;
        top:44%;left:45%;transition: .5s}
    .ay-photo span:hover{color:#fff;background:#18d26e; }
/* 图片下方文字 */
    .p-title{
        background: #fff;
        text-align: center;
        padding: 30px;
        height: 90px;
        border-radius: 0 0 3px 3px;
    }
    .p-title a{color: #333;transition: 0.5s;font-size: 18px;line-height: 1px;font-weight: 700;text-decoration: none;}
    .p-title a:hover{color: #18d26e;}
  
/* 关于我们 */
    #about{
        background: url('https://s2.ax1x.com/2019/08/30/mOYhrQ.jpg') center top no-repeat fixed;
        background-size: cover;
        width: 100%;
        height: 295px;
        padding: 80px 0 40px 0;position: relative;
    }
    #about::after{
        content: '';
        width: 100%;
        height: 295px;
        display: block;
        background-color: rgba(255, 255, 255, 0.92);
        position: absolute;top: 0;
    }
    .titcon{
        position: absolute;z-index: 10;  
        text-align: center;
        left: 0; right: 0; 
        margin-left: auto; margin-right: auto; }
    .titcon h3{
        font-size: 32px !important;
        color: #111 !important;
        text-transform: uppercase;
        text-align: center;
        font-weight: 700;
        position: relative;
        padding-bottom: 15px;
    }
    .titcon h3 span{font-size:1.5rem;font-weight: normal;}
    .titcon h3::before {
        content: '';
        position: absolute;
        display: block;
        width: 120px;
        height: 1px;
        background: #ddd;
        bottom: 1px;
        left: calc(50% - 60px);}
    .titcon h3::after {
        content: '';
        position: absolute;
        display: block;
        width: 40px;
        height: 3px;
        background: #18d26e;
        bottom: 0;
        left: calc(50% - 20px);}

</style>

<script>
import myheader from './header'
export default {
    components:{
        'myHeader':myheader
    },
    data() {
        return {
            banner:[
                'https://s2.ax1x.com/2019/08/30/mOJa0s.jpg',
                'https://s2.ax1x.com/2019/08/30/mOJUmj.jpg',
                'https://s2.ax1x.com/2019/08/30/mOJtXQ.jpg',
                'https://s2.ax1x.com/2019/08/30/mOJ0kq.png',
                'https://s2.ax1x.com/2019/08/30/mOJd7n.jpg',
                'https://s2.ax1x.com/2019/08/30/mOJBt0.jpg',
                'https://s2.ax1x.com/2019/08/30/mOJDhV.jpg',
                ],
            imgTitle:[
                {'tit':'甜品',con:'用镜头诠释美食'},
                {'tit':'粽子',con:'分享也是一种快乐'},
                {'tit':'蔬菜',con:'用艺术体现舌尖美味'},
                {'tit':'水果',con:'用艺术体现舌尖美味'},
                {'tit':'饮品',con:'让你的美食成为艺术'},
                {'tit':'餐饮',con:'让你的美食成为艺术'},
                {'tit':'餐饮',con:'用镜头诠释美食'},],
            p:'',//播放状态    
            photo:[
                'https://s2.ax1x.com/2019/08/30/mOYBbd.jpg',
                'https://s2.ax1x.com/2019/08/30/mOY0DH.jpg',
                'https://s2.ax1x.com/2019/08/30/mOYwKe.jpg',
                'https://s2.ax1x.com/2019/08/30/mOYavD.jpg',
                'https://s2.ax1x.com/2019/08/30/mOYUgO.jpg',
                'https://s2.ax1x.com/2019/08/30/mOYrVA.jpg',
                'https://s2.ax1x.com/2019/08/30/mOYsUI.jpg',
                'https://s2.ax1x.com/2019/08/30/mOYy5t.jpg',
                'https://s2.ax1x.com/2019/08/30/mOYcPP.jpg',
            ],
            photoTit:[
                '北京宴 - 长龙粽',
                '野兽生活/西贝 - 电商产品',
                '电商产品 - 番茄汁',
                '美食摄影 - 甜品',
                '美食摄影 - 饮品',
                '木屋烧烤/和泉 - 餐饮',
                '电商产品 - 生鲜',
                '美食摄影 - 中餐',
                '2018年美食摄影作品选集',
            ],
            videoImg:[
                '../../static/img/index/video/v1-1.jpg',
                '../../static/img/index/video/v1-2.jpg',
                '../../static/img/index/video/v1-3.jpg',
                '../../static/img/index/video/v1-4.jpg',
                '../../static/img/index/video/v1-5.jpg',
                '../../static/img/index/video/v1-6.jpg',
                '../../static/img/index/video/v1-7.jpg',
                '../../static/img/index/video/v1-8.jpg',
                '../../static/img/index/video/v1-9.jpg',
            ],
            videoTit:[
                '北京宴 - 长龙粽',
                '美食视频 - 巧克力流心',
                '美食视频 - 气泡水',
                '雪花 - 匠心营造',
                '北京宴 - 月饼',
                '美食视频 - 火锅',
                '烧烤 - 羊肉串',
                '俏江南 - 月饼',
                '美丹 - 涂花蛋糕',
            ],
        }
    },
    methods:{  
        closeimg(){
            $('#showimg').css('display','none')
            $('.ay-photo>div').css('opacity','0')
        },
        look(e){
            var imgPath = $(e.target).attr('data-url')
            var img = new Image()
            img.src = imgPath
            img.onload = function(){
                $('#showimg').css('display','block')
                $('#showimg').css('padding-top',(parseInt($('#showimg').css('height'))-img.height)/2+'px')
                $('#showimg img').css('width',img.width)
                $('#showimg img').css('height',img.height)
                $('#showimg img').attr('src',imgPath)

            }
        },
    // 视频播放
        play(e){
            var fa = $(e.target)
            console.log(fa.next())
            fa.parent().prev().hide()
            if($(fa.parent().prev().prev())[0].paused){
                $(fa.parent().prev().prev())[0].play()
                $(e.target).css('display','none')
                $(e.target).next().css('display','block')
            }else{
                $(fa.parent().prev().prev())[0].pause()
                $(e.target).css('display','none')
                $(e.target).prev().css('display','block')
            }
        },
    },
    mounted(){    
        $($('#nav_ul a')[0]).addClass('a-active') 
        $('.loreg').hide()
        this.topHi=$('.top').offset().top
        var item = $('.banner-img').children('div')
        var tor = $('.banner-tor>ul').children('li')
        $(item[this.i-1]).addClass('active-img')
        $(tor[this.i-1]).addClass('active-tor')
    // 当前页的导航显示
        var lis = $('#nav_ul>div>ul a')
        for(var a of lis){
            $(a).removeClass('active-nav')
        }
        $($('#nav_ul>div>ul a')[0]).addClass('active-nav')
    //视频
        $('.ay-vi div:nth-child(3)').hover(
            function(){
                 $(this).css('opacity','1')
            },
            function(e){
                 $(this).css('opacity','0')
            },
        )
    //美食图片
        $('#photo .ay-photo').hover(
            function(e){
                $(e.target).css('opacity','1')
            },
            function(e){
                $(e.target).css('opacity','0')
            }
        )
    },
   
}
</script>