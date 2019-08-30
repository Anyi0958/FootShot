-- 设置数据编译类型
set names utf8;
-- 创建项目库
drop database if exists footshot;
create database footshot charset = utf8;
-- 使用项目库
use footshot;
-- 创建用户表
create table users(
    uid int primary key auto_increment, 
    user varchar(20),                   #账号
    pwd varchar(20),                    #密码
    uname varchar(20) null unique,       #用户名
    tel varchar(11) not null unique,    #手机号
    img text                            #头像
);
-- 创建相册表
create table album( 
   aid int primary key auto_increment, 
   uid int,                     #关联用户
   aname varchar(20),            #相册名
   img text,                    #封面照片
   content varchar(100)         #相册描述
);
-- 创建照片表
create table photo(
    pid int primary key auto_increment, 
    uid int,                    #关联用户
    aid int,                    #关联相册
    src text                    #图片路径
);

-- 用户数据
insert into users values(1,'admin','admin','管理员1',17636718913,null);
insert into users values(2,'anyi','anyi','管理员2',17636718914,null);

-- 相册
insert into album values(null,1,'相册1',"../../static/img/home/晨曦/album-1.jpg",null);
insert into album values(null,1,'相册2',"../../static/img/home/晨曦/album-2.jpg",null);
insert into album values(null,1,'相册3',"../../static/img/home/晨曦/album-3.jpg",null);
insert into album values(null,2,'相册1',"../../static/img/home/晨曦/album-1.jpg",null);
insert into album values(null,2,'相册2',"../../static/img/home/晨曦/album-2.jpg",null);
insert into album values(null,2,'相册3',"../../static/img/home/晨曦/album-3.jpg",null);
insert into album values(null,2,'相册4',"../../static/img/home/晨曦/album-4.jpg",null);
insert into album values(null,2,'相册5',"../../static/img/home/晨曦/album-5.jpg",null);

-- 照片
insert into photo values(null,1,1,'../../static/img/community/img/co-1.jpg');
insert into photo values(null,1,1,'../../static/img/community/img/co-2.jpg');
insert into photo values(null,1,1,'../../static/img/community/img/co-3.jpg');
insert into photo values(null,1,1,'../../static/img/community/img/co-4.jpg');
insert into photo values(null,1,2,'../../static/img/community/img/co-5.jpg');
insert into photo values(null,1,2,'../../static/img/community/img/co-6.jpg');
insert into photo values(null,2,2,'../../static/img/community/img/co-7.jpg');
insert into photo values(null,2,2,'../../static/img/community/img/co-8.jpg');
insert into photo values(null,2,3,'../../static/img/community/img/co-9.jpg');
insert into photo values(null,2,3,'../../static/img/community/img/co-10.jpg');

insert into photo values(null,1,4,'../../static/img/community/img/co-11.jpg');
insert into photo values(null,1,4,'../../static/img/community/img/co-12.jpg');
insert into photo values(null,1,4,'../../static/img/community/img/co-13.jpg');
insert into photo values(null,1,4,'../../static/img/community/img/co-14.jpg');
insert into photo values(null,1,5,'../../static/img/community/img/co-15.jpg');
insert into photo values(null,2,5,'../../static/img/community/img/co-16.jpg');
insert into photo values(null,2,5,'../../static/img/community/img/co-17.jpg');
insert into photo values(null,2,6,'../../static/img/community/img/co-18.jpg');
insert into photo values(null,2,6,'../../static/img/community/img/co-19.jpg');
insert into photo values(null,2,6,'../../static/img/community/img/co-20.jpg');