function sc(){
    var animateimg = $("#file").val(); //获取上传的图片名 带//  
    var imgarr=animateimg.split('\\'); //分割  
    var myimg=imgarr[imgarr.length-1]; //去掉 // 获取图片名  
    var houzui = myimg.lastIndexOf('.'); //获取 . 出现的位置  
    var ext = myimg.substring(houzui, myimg.length).toUpperCase();  //切割 . 获取文件后缀  
    var file = $('#file').get(0).files[0]; //获取上传的文件  
    var fileSize = file.size;           //获取上传的文件大小  
    var maxSize = 10485760;              //最大10MB(字节)  
    if(ext !='.PNG' && ext !='.GIF' && ext !='.JPG' && ext !='.JPEG' && ext !='.BMP'){  
      parent.layer.msg('文件类型错误,请上传图片类型');  
      return false;  
    }else if(parseInt(fileSize) >= parseInt(maxSize)){  
      parent.layer.msg('上传的文件不能超过10MB');  
      return false;  
    }else{
      $('#stat').html('正在上传');
      var data = new FormData($('#form1')[0]);   
      $.ajax({
        url: "https://api.oioweb.cn/api/sinaimg.php?type=multipart",   
        type: 'POST',    
        data: data,    
        dataType: 'JSON', 
        processData: false,    
        contentType: false,
        xhr: function(){
          var xhr = $.ajaxSettings.xhr();
          if(onprogress && xhr.upload) {
           xhr.upload.addEventListener("progress" , onprogress, false);
           return xhr;
         }
       }
     }).done(function(ret){
      if(ret['code']=='200'){
        var img = '';  
        var imgurl = '';
        img += '<img src="https://ww2.sinaimg.cn/large/'+ret['pid']+'.jpg" name="sinaimg" id="sinaimg">';
        imgurl += '<input onclick="oCopy(this)" value="https://ww2.sinaimg.cn/large/'+ret['pid']+'.jpg" name="sinaimgurl" id="sinaimgurl">';
        $('#imgurl').html(imgurl);  
        $('#img').html(img);
        $('#stat').html('上传成功');
      }else{
        $('#stat').html('上传失败');  
      }    
    });
     return false;  
   }    
 }

 function preview(){
    //利用files获得被上传附件(图片)信息  
    var mypic = document.getElementById('file').files[0];  
    //利用mypic获得图像的url地址(二进制源码)  
    //URL  html5新标准属性  
    //window.URL.createObjectURL(mypic);  
    document.getElementsByTagName('preview')[0].src = window.URL.createObjectURL(mypic);
    $('#preview').show();
  }
  function onprogress(evt){
  var loaded = evt.loaded;     //已经上传大小情况 
  var tot = evt.total;      //附件总大小 
  var per = Math.floor(100*loaded/tot);  //已经上传的百分比 
}
function oCopy(obj){
  obj.select();
  document.execCommand("Copy"); // 执行浏览器复制命令
  if (browserRedirect()) {layer.msg('设备类型为手机，有一定几率复制失败！请查看剪切板是否成功复制');}
}

function browserRedirect(){
  //设备类型判断
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
  var bIsIphone = sUserAgent.match(/iphone os/i) == 'iphone os';
  var bIsMidp = sUserAgent.match(/midp/i) == 'midp';
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
  var bIsUc = sUserAgent.match(/ucweb/i) == 'web';
  var bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
  var bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';
  var bIsAndroid = sUserAgent.match(/android/i) == 'android';

  if(bIsIpad || bIsIphone || bIsMidp || bIsUc7 || bIsUc || bIsCE || bIsWM || bIsAndroid ){
    return 1;
  }
};