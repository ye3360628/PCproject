   
    //找触发事件
    var uname=document.getElementById("uname");
    var upwd=document.getElementById("upwd");
    var yzm=document.getElementById("yzm");
    var dxyzm=document.getElementById("dxyzm");
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
    yzm.onclick=function(){
      ps[2].style.display="block";
    }
    dxyzm.onclick=function(){
      ps[3].style.display="block";
    }
    uname.onblur=function(){
      var $uname=uname.value;
      if(regn.test($uname)){
        var xhr=new XMLHttpRequest();
         xhr.onreadystatechange=function(){ 
           if(xhr.readyState==4&&xhr.status==200){
            var result=xhr.responseText;
            if(result==1){
              ps[0].className="fail";
              ps[0].innerHTML="用户名被占用";
            }else{
              ps[0].className="success";
              ps[0].innerHTML="账户名可用";
            }
           }
         }
        xhr.open("get","/pro/getName/"+$uname,true);
        xhr.send(); 
      }
      else if($uname==""){
        ps[0].className="reg_p";
        ps[0].innerHTML="请输入账号";
        }
        else{
        ps[0].className="fail";
        ps[0].innerHTML="账户名错误";
      }
    }
    upwd.onblur=function(){
      var $upwd=upwd.value;
      if(regp.test($upwd)){
       ps[1].className="success";
       ps[1].innerHTML="密码可用";
      }else if($upwd==""){
        ps[1].className="reg_p";
        ps[1].innerHTML="请输入密码";
        }
      else{
        ps[1].className="fail";
        ps[1].innerHTML="密码错误";
      }
    }
    function show(){
      if (ps[1].className=="success"&&ps[0].className=="success"){
				var $uname=uname.value;
				var $upwd=upwd.value;
				//1.获取xhr异步对象
				var xhr=new XMLHttpRequest();
				//4.创建监听,接收响应
				xhr.onreadystatechange=function(){
					if(xhr.readyState==4 && xhr.status==200){
						var result=xhr.responseText;
						console.log(result);
						if(result==1){
							alert("添加成功");
						}else{
							alert("添加失败");
						}
					}
				}
				//2.打开连接,创建请求
				xhr.open("post","/pro/regUser/",true);
				xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				//3.发送请求
				var formdata="uname="+$uname+"&upwd="+$upwd;
				console.log(formdata);
        xhr.send(formdata);
        alert("注册成功");
        }
        else {
          alert("注册失败");
        }
      }
