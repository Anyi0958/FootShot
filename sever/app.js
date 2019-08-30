const express = require('express');
const bodyparse = require('body-parser');
const cors=require("cors");
// 引入链接数据库对象
const pool = require('./pool.js');
// 创建服务器并设置监听端口
const server = express();
// 设置跨域请求
server.use(cors({
    origin:['http://47.102.96.85','http://47.102.96.85:82','http://localhost:8082','http://192.168.0.96:8083'],
    credentials:true
}));
// 设置监听端口
server.listen(8888);
// 设置post请求数据类型
server.use(bodyparse.urlencoded({
    extended:false
}));

// api接口

//用户查找(用于登录，注册)
server.get('/user',function(req,res){
    pool.query(
        'select uid from users where user=?;',
        [req.query.user],
        function(err,re){
            if(re.length>0){
                res.send({code:'201',data:'* 账号已被注册',uid:re[0].uid})
            }else{
                res.send({code:'200',data:re})
            }
        }
    )
});

// 用户登录
server.get('/login',function(req,res){
    pool.query(
        'select uid from users where user=? and pwd=?;',
        [req.query.user,req.query.pwd],
        function(err,re){
            if(re.length<1){
                res.send({code:'201',data:'账号或密码错误'})
            }else{
                res.send({code:'200',data:'登录成功',uid:re[0].uid})
            }
        }
    )
});

// 用户注册
server.get('/reg',function(req,res){
    pool.query(
        "insert into users values(null,?,?,null,?,null);",
        [req.query.user,req.query.pwd,req.query.tel],
        function(err,re){
            if(err){
                res.send('手机号已被注册')
                return
            }
            res.send('注册成功')
        })
});

server.post('/reset',function(req,res){
    pool.query('update users set pwd=? where user=? and tel=?',[req.body.pwd,req.body.user,req.body.tel],function(err,re){
        res.send(re)
    })
})


// 所有用户
server.get('/userAll',function(req,res){
    pool.query('select uid,user,tel from users',function(err,re){
        res.send(re)
    })
})

// 用户删除
server.get('/delUser',function(req,res){
    pool.query('delete from users where uid=?',[req.query.uid],function(err,re){
        if(err){
            return res.send({code:300,msg:'删除失败'})
        }
        res.send({code:200,msg:'删除成功'})
    })
})

// 资料修改
server.get('/change',function(req,res){
    res.send('资料修改')
});

// 查看相册
server.get('/album',function(req,res){
    pool.query('select aid,aname,img from album where uid=?;',[req.query.uid],function(err,re){
        res.send(re)
    })
});

// 创建相册
server.get('/albumCreate',function(req,res){
    pool.query('insert into album values(null,?,?,?,null);',[req.query.uid,req.query.name,req.query.img],function(err,re){
        res.send('创建相册成功')
    })
});

// 修改相册
server.get('/albumChange',function(req,res){
    res.send('修改相册')
});

// 删除相册
server.get('/albumDelete',function(req,res){
    res.send('删除相册')
});

// 查看照片
server.get('/photo',function(req,res){
    pool.query('select src from photo where aid=?',[req.query.aid],function(err,re){
        res.send(re)
    })
});

// 上传照片
server.get('/photoCreate',function(req,res){
    pool.query('insert into photo values(null,?,?,?);',[req.query.uid,req.query.aid,req.query.src],function(err,re){
        console.log(re)
        console.log('ok')
        res.send('上传照片成功')
    })
});

// 修改照片
server.get('/photoChange',function(req,res){
    res.send('修改照片')
});

// 删除照片
server.get('/photoDelete',function(req,res){
    res.send('删除照片')
});

// 社区展示照片(照片表按照 pid 倒序显示30条数据)
server.get('/photoAll',function(req,res){
    pool.query('select uid,aid,src from photo order by pid desc limit 30;',function(err,re1){
        res.send(re1)
    })
})
// 社区展示照片 相册名
server.get('/albumName',function(req,res){
    pool.query('select aname from album where aid=?;',[req.query.aid],function(err,re){
        res.send(re)
    })
})

// 查看他人主页
server.get('/lookuser',function(req,res){
    pool.query(
        'select uname,user from users where uid=?;',
        [req.query.uid],
        function(err,re){
            res.send(re)
        }
    )
});