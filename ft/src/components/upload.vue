<template>
    <div style="text-align: center;padding:50px;">
        <h1 style="color:#18d26e;">美食随身拍</h1>
        <br><br><br>
        <div style="width:500px;padding:50px 0 ;margin:0 auto;background:#fff;opacity: 0.8;border-radius:10px;">
            <p class="btn" data-toggle='collapse' data-target='#create'>创建相册</p>
            <div class="collapse" id="create" style="width:260px;margin:0 auto;background:tran">
                <mt-field label="相册名称" placeholder="请输入相册名称" v-model="name"></mt-field>
            </div>
            <br>
            
            <p class="btn" data-toggle='collapse' data-target='#list'>上传照片</p>  
            <div class="collapse" id="list" style="width:300px;margin:0 auto;">
                <mt-radio v-model="value" :options="photolist"></mt-radio>
                <p v-show='photolist.length==0'>先创建个相册吧!</p>
            </div>
            <br>  
 

            <form id="form1">
            <center>
                <div class="upload-drag" id="upload-drag" onclick="file.click ()">
                <p style="text-align: center;margin: 5px;padding: 10px;" id="stat"> 选择图片 </p>
                <input type="file" id="file" name="file" onchange="sc();" style="display:none"/>
                </div>
            </center>
            </form>


            <br>
            <p class="btn" @click="submit">提交</p>
            <br>
            <p class="btn" @click="prev">返回</p>
        </div>
        <div id="imgurl" class="imgurl collapse"></div>
    </div>

</template>
<style scoped>
    .upload-drag,.btn{   
        cursor: pointer; 
        width: 260px;
        text-align: center;
        background: #18d26e;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);border-radius: 200px; font-size: 14px; color: #fff; font-size: 150%; }
    input{width:100%;}
    .imgurl{ height: 100px; }
</style>
<script>
export default {
    data() {
        return {
            value:'',
            photolist:[],
            photoindex:[],
            name:'',
        }
    },
    methods:{
        submit(){

            if(this.value=='' && this.name==''){
                return this.$toast({message:'你觉得这样合适吗？'})
            }
            //上传照片
            if(this.value){
                for(var i =0;i<this.photolist.length;i++){
                    if(this.photolist[i]==this.value){
                        this.axios.get('/photoCreate',
                            {
                                params:{
                                    aid:this.photoindex[i],
                                    uid:sessionStorage.getItem('uid'),
                                    src:$('.imgurl input').val()
                                }
                            }
                        )
                        .then((msg)=>{
                            this.$messagebox.alert(msg.data)
                            .then(action => {
                                return this.$router.push('/home')
                            });
                        })
                    }
                }
            }
            // 创建新相册
            if(this.name){
                this.axios.get('/albumCreate',
                    {
                        params:{
                            uid:sessionStorage.getItem('uid'),
                            name:this.name,
                            img:$('.imgurl input').val()
                        }
                    }
                )
                .then((msg)=>{
                    this.$messagebox.alert(msg.data)
                    .then(action => {
                        return this.$router.push('/home')
                    });
                })
            }
        },
        prev(){
            window.history.go(-1)
        },
    },
    created(){
        this.photolist=[]
        this.photoindex=[]
        this.axios.get('/album',{params:{uid:sessionStorage.getItem('uid')}})
        .then((msg)=>{
            for(var x of msg.data){
                this.photolist.push(x.aname)
                this.photoindex.push(x.aid)
            }
        })

        $('body').css('background','url("../../static/img/upload/banner-1.jpg") no-repeat')
        $('body').css('background-size','cover')
    }
}
</script>