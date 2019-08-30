<template>
<div style="background:#f7f7f7;"> 
    <myHeader banner='' imgTitle=''></myHeader>
    <div id="showimg">
        <img>
        <span class="iconfont" @click="closeimg">&#xe6b5;</span>
        <span class="iconfont" @click="next" style="right:10%;top:50%;font-size:54px;">&#xe65e;</span>
        <span class="iconfont" @click="prev" style="left:10%;top:50%;font-size:54px;">&#xe65f;</span>
    </div>
    <!-- 头 -->
    <div id="home">
        <div class="author">
            <span><img src="../../static/img/community/img/tx.jpg" class="w-100"></span>
            <div>
                <p>{{uname}}</p>
                <p>关注<span style="color:#fff;font-weight: 700;font-size: 20px;">999+</span>粉丝<span style="color:#fff;font-weight: 700;font-size: 20px;">999+</span></p>
                <p>个人简介</p>
            </div>
        </div>
    </div>
    <!-- 导航 -->
    <p class='tit'><span>相册</span><span @click="myvideo">视频</span></p>
    <!-- 内容1 -->
    <div class="content py-4" style="width: 100%;padding: 0 5%;">
        <div class="row">
            <div class="col-lg-3 col-sm-6 col-12 p-3" v-for="(elem,i) of album" :key="i"> 
                <div :style="'background-image: url('+elem.img+')'"> 
                    <div :data-album='elem.aid' class="look">
                        <p :data-album='elem.aid'>{{elem.aname}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
     <!-- 内容2 -->
    <div class="content py-4 tishi collapse" style="width: 100%;height:400px;padding: 0 5%;">
        <div class="row" style="justify-content: center;">
            <p style="    font-size: 36px;">空空如也，快去上传吧</p>
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
    #showimg span{font-size: 36px;color: rgba(255, 255, 255, 0.7);cursor: pointer;position: absolute;}
    /* 底部 */
    .ov{background: #000;height:100px;padding-top:22px;}
    .ov p{margin: 0;color:rgba(255,255,255,0.7);text-align: center;font-size:14px;margin-top: 5px;letter-spacing: 0;}
    /* 内容 */
    .row >div{overflow: hidden;}
    .row >div >div{
        width: 100%;height: 330px;
        background-position: center;background-size: cover;
        box-shadow: 0 2px 8px 0 rgba(133,136,138,.1);
        }
    .row >div >div>div{
        width: 100%;height: 330px;background-color:rgba(0, 0, 0, 0.2);
        display:flex;align-items: center;justify-content: center;cursor: pointer;
        }
    .row >div >div>div p{color:rgba(255,255,255,0.8);font-size:24px;font-weight: 200;}
    /* 导航 */
    .tit{
        width: 100%;height: 60px;padding: 16px 0;
        background-color: #fff;text-align: center;    
        box-shadow: 0 2px 8px 0 rgba(133,136,138,.1);
    }
    .tit span{margin:0 15px;padding:5px;cursor: pointer;}
    .tit span:first-child{border-bottom: 2px solid #18d26e;}
    .tit span:hover{border-bottom: 2px solid #18d26e;}
    /* 头 */
    #home{position: relative;
        background: url('../../static/img/home/晨曦/bg.jpg');
        background-size: cover;background-position: center;
        width: 100%;padding: 240px 80px 30px;
    }
    .author>span{width:100px;height:100px;display: inline-block;border-radius: 50%;overflow: hidden;}
    .author>div{display: inline-block;height: 100px;position: absolute;margin-left:30px;}
    .author>div p{color:rgba(255,255,255,0.9);}
    .author>div p span{margin:0 15px; }
</style>

<script>
import myheader from '../components/header'
export default {
    data() {
        return {
            uid:'',
            uname:'',
            album:88,
            photo:[],
            i:0,

        }
    },
    methods:{
        user(){
            $('a[data-href="#login"]').html(this.uname)
            $('a[data-href="#login"]').attr('data-href','#user')

            $('a[data-href="#reg"]').html('上传照片')
            $('a[data-href="#reg"]').attr('data-href','#upload')

            $('a[data-href="#del"]').html('注销')
            $('a[data-href="#del"]').attr('data-href','#del')
            $('a[data-href="#del"]').parent().removeClass('collapse')
        },
        closeimg(){
            setTimeout(()=>{
                $('#showimg').css('display','none')
            },100)
            this.photo = []
            this.i = 0
        },
        prev(){this.i--},
        next(){this.i++},
        show(){
            // console.log(this.i,this.photo)
            if(this.photo.length==0){
                return this.$toast({message:'此相册没有更多照片'})
            }
            var imgPath = this.photo[this.i]
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
        myvideo(){
            this.$toast({message:'此功能暂未开放'})
        },

        fn(a){
            this.axios.get('/photo',{params:{aid:a}})
            .then((msg)=>{
                
                for(var x of msg.data){
                    this.photo.push(x.src)
                }
                this.i = 0
                this.show()
            })
        },
    },
    components:{
        'myHeader':myheader
    },
    beforeCreate(){
        this.uname=''
        this.uname = sessionStorage.getItem('user')
        this.uid= sessionStorage.getItem('uid')
        this.axios.get('/album',{params:{uid:this.uid}}).then((msg)=>{
            if(msg.data.length==0){
                $('.tishi').removeClass('collapse')
            }
            this.album = msg.data
        })
        // 别人查看
        if(sessionStorage.getItem('look-uid')){
            this.axios.get('/album',
                {
                    params:{uid:sessionStorage.getItem('look-uid')}
                }
            ).then((msg)=>{
                // console.log(msg.data)
                this.album = msg.data;
                $('.tishi').addClass('collapse');
            })
            this.axios.get('/lookuser',
                {
                    params:{uid:sessionStorage.getItem('look-uid')}
                }
            ).then((msg)=>{
                // console.log(msg.data)
                this.uname = msg.data[0].uname;
            })
        }

    },
    mounted(){
        $('body').click(e=>{
            console.log($(e.target).attr('class'))
            if($(e.target).attr('class')=='look'){
                this.fn($(e.target).attr('data-album'))
            }
        })
        $('#nav_ul').css('flex-direction','row')
        $('#banner').css('display','none')
        $('.look').click((e)=>{
            this.axios.get('/photo',{params:{aid:$(e.target).attr('data-album')}})
            .then((msg)=>{
                
                for(var x of msg.data){
                    this.photo.push(x.src)
                }
                this.i = 0
                this.show()
            })
        })
        // 用户信息
        if(sessionStorage.getItem('user')){
            this.axios.get('/user',{
                params:{'user':sessionStorage.getItem('user')}
            })
            .then((msg)=>{
                this.uname = sessionStorage.getItem('user')
                this.uid= sessionStorage.getItem('uid')
                sessionStorage.setItem('uid',msg.data.uid)
                this.user()
            })
        }else{
            console.log('没登录')
        }
    },
    watch:{
        i(){
            if(this.i<0){this.i=0}
            if(this.i>this.photo.length-1){this.i=this.photo.length-1}
            this.show()
        }
    }

}
</script>