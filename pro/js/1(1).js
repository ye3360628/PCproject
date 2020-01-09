
  var selmy=document.getElementById("myself1"); 
  selmy.onmouseover=function(){
    var selmy1=document.getElementById("head4_1");
    selmy1.style.display="block";
  } 
  var selmy2=document.getElementById("head4_2");
  selmy2.onmouseover=function(){
    var selmy1=document.getElementById("head4_1");
    selmy1.style.display="none";
  }
  selmy.onmouseout=function(){
    var selmy1=document.getElementById("head4_1");
    selmy1.style.display="none";
  } 
  var selmy1=document.getElementById("head4_1");
  selmy1.onmouseout=function(){
    selmy1.style.display="block";
  }
  var selmy3=document.querySelectorAll(".c1");
  selmy3.onmouseout=function(){
    selmy1.style.display="none";
  }
  window.onscroll=function(){
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
  
  if (scrollTop>=500){
    floor.style.display="block"
  }
  else{
    floor.style.display="none"
  }
}
