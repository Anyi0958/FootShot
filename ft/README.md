美食随身拍 说明文档(必读)

部署地址：http://anyi958.top/（希望大佬们能给我些改善，优化方案建议）

简介：
    我们相信生活中的真善美，我们想和你分享，我们拥有创造美的能力，顷刻为你打开一个全新的美食视觉盛宴。

标签：美食、摄影、社区

用途：美食爱好者聚集地，在此可以与他人分享各种美食



数据库设计

    需求：
        存储用户信息  网页展示内容

    分析：
        三个表
            1. 用户表  (uid、账号、密码、用户名、用户名、头像)  
            2. 相册表  (aid、uid、相册名、封面路径、相册描述)  
            3. 相片表  (pid、uid、aid、图片路径)  
        通过表中的主键 id 把三个表相关联



前端功能描述

    1.首页          展示热度高的 照片 以及 视频
    2.社区          用户可以把照片分享在此处，展示给他人欣赏(分享需要先登录，无登录只能欣赏)
    3.登录          用户登录
    4.注册          用户注册
    5.找回密码      解决用户忘记密码

    6.上传照片以及创建相册      
          用户本地上传的文件通过 新浪云的图床接口 上传 并 保存 生成的网络路径 到数据库



后台API列表
  
    /user     用户查找(用于登录，注册)
    /login    用户登录
    /reg      用户注册
    /reset    重置密码
    /change   资料修改

    /album          查看相册
    /albumCreate    创建相册
    /albumChange    修改相册
    /albumDelete    删除相册

    /photo          查看照片
    /photoCreate    上传照片
    /photoChange    修改照片
    /photoDelete    删除照片

    /photoAll     社区展示照片
    /albumName    社区照片相册名
    /lookuser     查看他人主页



项目结构：
    pulic：无需编译的静态文件 

    server：nodejs服务器
        app.js      服务器 + API接口
        mysql.sql   启动nodejs服务器 ,需先执行此文件，初始化数据库
        pool.js     连接数据库

    src:
       assets           共用css样式
       components       存放组件
            index.vue           主页
            community.vue       社区
            header.vue          导航栏+轮播
            home.vue            个人主页 
            whome.vue           他人主页
	          upload.vue           上传照片
            login.vue           登录
            reg.vue             注册
      	    reset.vue           找回密码
      	    admin.vue           后台管理
             font         图标
             views        无
    
启动项目:
    npm run serve + node app












