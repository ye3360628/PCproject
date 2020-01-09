
  //找触发事件
var uname=document.getElementById("uname");
var upwd=document.getElementById("upwd");
var ps=document.querySelectorAll(".reg_p");
//验证
var regn=/^\w{4,16}$/;
var regp=/^[a-zA-Z0-9]{6,10}$/;
//触发事件
uname.onclick=function(){
  ps[0].style.display="block";
}
upwd.onclick=function(){
  ps[1].style.display="block";
}
uname.onblur=function(){
      var $uname=uname.value;
     if(regn.test($uname)){
      ps[0].className="success";
   ps[0].style.display="none";   
      }else if($uname==""){
    ps[0].className="reg_p";
     
    }
    else{
        ps[0].className="fail";
    ps[0].style.display="none";   
      }
}
upwd.onblur=function(){
      var $upwd=upwd.value;
      if(regp.test($upwd)){
       ps[1].className="success";
    ps[1].style.display="none";   
      }else if($upwd==""){
    ps[1].className="reg_p";
    
  }
  else{
        ps[1].className="fail";
     ps[1].style.display="none";  
      }
}
function show(){
  var $uname=uname.value;
  var $upwd=upwd.value;
  //1.获取xhr异步对象
  var xhr=new XMLHttpRequest();
  //4.创建监听,接收响应
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200){
      var result=xhr.responseText;
      if (result==1){
        alert("登录成功");
      }else if(result==0){
        alert("用户名或密码错误");
      }
    }
  }
  //2.打开连接,创建对象
  xhr.open("get","/pro/login/"+$uname+"&"+$upwd,true);
  //3.发送对象
  xhr.send();
}
