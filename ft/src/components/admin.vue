<template>
    <div>
        <!-- 登录 -->
        <div  class="content"  v-show="login">
            <h2>登录</h2>
            <div>
                <h5>账号 <input type="text"></h5>
                <h5>密码 <input type="password"></h5>
                <h5 class="btn btn-success" @click="logina">登录</h5>
            </div>
        </div>
        <!-- 内容 -->
        <div class="content" v-show="!login">
            <h2>后台数据管理</h2>
            <br>
            <p class="row">
                <span  class="col-3">id</span>
                <span class="col-3">账号</span>
                <span class="col-3">手机号</span>
                <span class="col-3">操作</span>
            </p>
            <p v-for='(elem,i) in users' :key="i" class="row">
                <span  class="col-3">{{elem.uid}}</span>
                <span class="col-3">{{elem.user}}</span>
                <span class="col-3">{{elem.tel}}</span>
                <span class="col-3" :data-uid='elem.uid' :data-index='i'>
                    <span @click="details">详情</span>/
                    <span @click="update">修改</span>/
                    <span @click="del">删除</span>
                </span>
            </p>
            <h1 class="btn btn-success w-25 mt-5" @click="home">首页</h1>
        </div>
    </div>
</template>

<style scoped>
    input{padding-left: 10px;}
    .content>div{width: 40%;margin: 0 auto;margin-top:80px;border: 1px solid seagreen;padding: 100px  20px 50px;border-radius: 15px;background: rgba(241, 241, 241, 0.5)}
    .content>div>h5{margin-bottom: 50px;}
    h2{text-align: center;color: seagreen;font-weight: 600;}
    .content{
        text-align: center;
        min-width: 1000px;
        width: 80%;
        margin: 0 auto;
        padding: 30px 0;
    }
    .content p{
        text-align: center;
        margin: 0;
        padding: 20px 0;
        border-bottom: 1px solid yellow;
    }
    .content span>span{cursor: pointer;}
    .content span>span:hover{color: seagreen;}

</style>

<script>
export default {
    data() {
        return {
            users:[],
            login:true,
        }
    },
    beforeCreate(){
        this.axios.post('/userAll').then(msg=>{
            console.log(msg)
            this.users = msg.data
        })
    },
    methods:{
        details(){
            this.$toast({message:'正在努力完善'})
        },
        update(){
            this.$toast({message:'正在努力完善'})
        },
        del(e){
            var uid = $($(e.target).parent()).attr('data-uid')
            var uindex = $($(e.target).parent()).attr('data-index')
            this.$messagebox.confirm('确定删除此数据？')
            .then(msg=>{
                if(msg == 'confirm'){
                    this.axios.get('/delUser',{params:{uid:uid}})
                    .then(msg=>{
                        this.$toast({message:msg.data.msg})
                        this.users.splice(uindex,1)
                    })
                }
            })
        },
        logina(){
            console.log($($('input')[0]).val)
            if($($('input')[0]).val()=='admin'&&$($('input')[1]).val()=='admin'){
                this.login=false
            }else{
                this.$toast({message:'账号或密码错误'})
            }
        },
        home(){
            this.$router.push('/')
        }
    }
}
</script>