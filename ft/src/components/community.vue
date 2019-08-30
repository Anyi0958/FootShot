<template>
<div id="a">
    <myHeader :banner=banner :imgTitle=imgTitle></myHeader>

<!-- 主体内容 -->
    <div class="content">
        <div class=".titcon">
            <h2>已经有超过五百万的摄影爱好者入驻了美食随身拍······</h2>
            <p>在这里，发现基于共同兴趣的同好；鼓励原创和分享精神；除了美好的摄影和技能，我们更在意影像背后价值观的认同。</p>
        </div>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-xl-3 p-3" v-for="(elem,i) in conImg" :key="i">
                <div :style="'background: url('+elem.src+')'">
                    <div class="imgShaw" :data-uid='elem.uid' :data-aid='elem.aid'>
                        <span>{{albumName}}</span>
                        <span><img src="/../../static/img/community/img/tx.jpg" class="w-100"></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
        <p class="py-5 mb-0"><span class="btn btn-success" @click="add">加载更多</span></p>
    </div>

<!-- 底部 -->
    <div class="ov">
        <p>© Copyright <span style="color:#18d26e;">逸晨</span> All Rights Reserved</p>
        <p>Technical support by myself</p>
    </div>

</div>
</template>

<style>
    .toassss{color: #18d26e !important;}

    .imgShaw{background-color: rgba(0, 0, 0, 0.5);position: relative;height:0px;overflow: hidden;}
    .imgShaw span{color: rgb(247, 247, 247);font-size: 16px !important;position: absolute;left: 50%; transform: translateX(-50%);}
    .imgShaw span:first-child{top: 40%;}
    .imgShaw span:nth-child(2){width:50px;height:50px;border-radius:50%;overflow: hidden;bottom: 21%; }
    .imgShaw span:last-child{bottom: 10%;font-size: 14px !important;}
</style>
<style scoped>
/* 底部 */
    .ov{background: #000;height:100px;padding-top:22px;}
    .ov p{margin: 0;color:rgba(255,255,255,0.7);text-align: center;font-size:14px;margin-top: 5px;letter-spacing: 0;}
/* 内容 */
    .content{width: 99%;padding: 80px 20px 40px 20px;position: relative;}
    .content::before{content: '';display:table;}
    .titcon{
        position: absolute;z-index: 10;  
        text-align: center;
        left: 0; right: 0; 
        margin-left: auto; margin-right: auto; }
    .content h2{text-align: center;font-size: 24px;margin: 70px 0 0;line-height: 1;font-weight: 400;}
    .content p{text-align: center;margin: 40px 0 70px;line-height: 1;font-size: 14px;}
    .content .row {overflow: hidden;height: 732px;padding: 0 50px;margin: 0;}
    .content .row >div >div{height:330px;background-size: cover !important;background-position: center !important;}
    #a{background: #f7f7f7;}
    .imgShaw{cursor: pointer;}

    
    
</style>

<script>
import myheader from '../components/header'
export default {
    data(){
        return{
            uname:'',
            albumName:'photo',
            i:2,//图片数据循环次数
            banner:[
                'https://s2.ax1x.com/2019/08/30/mOYq2T.jpg',
                'https://s2.ax1x.com/2019/08/30/mOYXMF.jpg',
                'https://s2.ax1x.com/2019/08/30/mOYvqJ.jpg',
                'https://s2.ax1x.com/2019/08/30/mOYLxU.jpg',
                'https://s2.ax1x.com/2019/08/30/mOYHP0.jpg',
                'https://s2.ax1x.com/2019/08/30/mOYbGV.jpg',
                'https://s2.ax1x.com/2019/08/30/mOYjr4.jpg',
                ],
            imgTitle:[
                {'tit':'饮品',con:'用镜头诠释美食'},
                {'tit':'餐饮',con:'分享也是一种快乐'},
                {'tit':'餐饮',con:'用艺术体现舌尖美味'},
                {'tit':'水果',con:'让你的美食成为艺术'},
                {'tit':'甜点',con:'用艺术体现舌尖美味'},
                {'tit':'餐饮',con:'让你的美食成为艺术'},
                {'tit':'甜点',con:'用镜头诠释美食'},
                {'tit':'蔬菜',con:'用镜头诠释美食'},
                ],
            conImg:[
                'https://s2.ax1x.com/2019/08/30/mOtAMD.jpg',
                'https://s2.ax1x.com/2019/08/30/mOtmdA.jpg',
                'https://s2.ax1x.com/2019/08/30/mOtEse.jpg',
                'https://s2.ax1x.com/2019/08/30/mOtVqH.jpg',
                'https://s2.ax1x.com/2019/08/30/mOtFxO.jpg',
                'https://s2.ax1x.com/2019/08/30/mOtnII.jpg',
                'https://s2.ax1x.com/2019/08/30/mOtKit.jpg',
                'https://s2.ax1x.com/2019/08/30/mOtMJP.jpg',
                'https://s2.ax1x.com/2019/08/30/mOtQRf.jpg',
                'https://s2.ax1x.com/2019/08/30/mOtlz8.jpg',
                'https://s2.ax1x.com/2019/08/30/mOt3QS.jpg',
                'https://s2.ax1x.com/2019/08/30/mOt8sg.jpg',
                'https://s2.ax1x.com/2019/08/30/mOtGLQ.jpg',
                'https://s2.ax1x.com/2019/08/30/mOtYZj.jpg',
                'https://s2.ax1x.com/2019/08/30/mOttds.jpg',
                'https://s2.ax1x.com/2019/08/30/mOtNon.jpg',
                'https://s2.ax1x.com/2019/08/30/mOtaiq.jpg',
                'https://s2.ax1x.com/2019/08/30/mOtdJ0.jpg',
                'https://s2.ax1x.com/2019/08/30/mOtwWV.jpg',
                'https://s2.ax1x.com/2019/08/30/mOt0zT.jpg',
            ]  
        }
    },
    components:{
        'myHeader':myheader
    },
    methods:{
        add(){
            var l = Math.ceil(this.conImg.length/4);
            console.log(l);
            this.i++;
            if(this.i<=l){
                this.$toast({message:'加载成功',className:'toassss',})
                $('.row').css('height',this.i*364 + 'px')
            }else{
                this.$toast({message:'没有更多数据',className:'toassss',})
            };
        },
        user(){
            $('a[data-href="#login"]').html(this.uname)
            $('a[data-href="#login"]').attr('data-href','#user')

            $('a[data-href="#reg"]').html('上传照片')
            $('a[data-href="#reg"]').attr('data-href','#upload')

            $('a[data-href="#del"]').html('注销')
            $('a[data-href="#del"]').attr('data-href','#del')
            $('a[data-href="#del"]').parent().removeClass('collapse')
        }
    },
    created(){
        this.axios.get('/photoAll')
        .then((msg)=>{
            console.log(msg.data)
            this.conImg = msg.data
        })
    },
    mounted(){
        // 导航栏样式调整
        $($('#nav_ul a')[4]).addClass('a-active')
        // 图片详情
        $('.row>div>div').hover(
            e=>{
                var eaid = $($(e.target).children('.imgShaw')).attr('data-aid')
                this.axios.get('albumName',{params:{aid:eaid}})
                .then(msg=>{console.log(msg);this.albumName=msg.data[0].aname})
                $($(e.target).children('.imgShaw')).css('transition','0.5s')
                $($(e.target).children('.imgShaw')).css('height','330px')
            },
            e=>{
                if($(e.target).attr('class')=='imgShaw'){
                    $(e.target).css('height','0px')
                }else{
                    $($(e.target).children('.imgShaw')).css('height','0px')
                }
                
            }
        )
        $('.imgShaw').click(
            e=>{
                console.log('前往',e.target,'的主页')
                this.$router.push('/whome')
                console.log($(e.target).attr('data-uid'))
                sessionStorage.removeItem('look-uid')
                sessionStorage.setItem('look-uid',$(e.target).attr('data-uid'))
            }
        )

        // 导航内容位置
            $('#nav_ul').css('flexDirection','row')
        // 当前页的导航显示
        var lis = $('#nav_ul>div>ul a')
        for(var a of lis){
            $(a).removeClass('active-nav')
        }
        $($('#nav_ul>div>ul a')[4]).addClass('active-nav')
        // 用户信息
        if(sessionStorage.getItem('user')){
            this.axios.get('/user',{
                params:{'user':sessionStorage.getItem('user')}
            })
            .then((msg)=>{
                this.uname = sessionStorage.getItem('user')
                sessionStorage.setItem('uid',msg.data.uid)
                this.user()
            })
        }else{
            console.log('没登录 ')
        }
        
    },
}
</script>