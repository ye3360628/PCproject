//二级下拉
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
//  动态生成商品列表
$(function(){
$.ajax({
  url:"/pro/getall",
  type:"get",
  dataType:"json",
  async: false,
  success:function(result){
    var str="";
    var data=result;
    console.log(data);
    for ( var obj of data){
     console.log(obj);
      str+=`<div class="inner">
      <a href="${obj.href}">
     <img src="${obj.pic}"/>
     <h3>名称：${obj.title}</h3>                                    
     <span>价格：￥${obj.price.toFixed(2)}</span>
     </a>
     </div>`;
    }
    for (var i=0;i<=20;i++){
      $("#test").append(str);
    } 
  }
})
})
setTimeout(() => {
$(function(){
  tabPage({
    test: '#test',
    Nav: '#Nav',
    Prev: '#prev',
    Next: '#next',
    curNum: 12, /*每页显示的条数*/
    activeClass: 'active', /*高亮显示的class*/
    ini: 0/*初始化显示的页面*/
  });
function tabPage(tabPage){
  var test=$(tabPage.test)
  var Nav=$(tabPage.Nav)
  var Prev=$(tabPage.Prev)
  var Next=$(tabPage.Next)
  var curNum=tabPage.curNum
  var len = Math.ceil(test.find("div").length / curNum);
  console.log(test.find("div").length)
  console.log(len);
  var pageList = '';
	/*生成页码*/
	var iNum = 0;
	/*当前的索引值*/

	for (var i = 0; i < len; i++) {
			pageList += '<a href="javascript:;">' + (i + 1) + '</a>';
	}
  Nav.html(pageList);
  	/*头一页加高亮显示*/
	Nav.find("a:first").addClass(tabPage.activeClass);

/*******标签页的点击事件*******/
	Nav.find("a").each(function(){
			$(this).click(function () {
					Nav.find("a").removeClass(tabPage.activeClass);
					$(this).addClass(tabPage.activeClass);
					iNum = $(this).index();
					$(test).find("div").hide();
					for (var i = ($(this).html() - 1) * curNum; i < ($(this).html()) * curNum; i++) {
							$(test).find("div").eq(i).show()
					}
			});
})
$(test).find("div").hide();
/************首页的显示*********/
for (var i = 0; i < curNum; i++) {
	$(test).find("div").eq(i).show()
}
/*下一页*/
Next.click(function () {
	$(test).find("div").hide();
	if (iNum == len - 1) {
			for (var i = (len - 1) * curNum; i < len * curNum; i++) {
					$(test).find("div").eq(i).show()
			}
			return false;
	} else {
			Nav.find("a").removeClass(tabPage.activeClass);
			iNum++;
			Nav.find("a").eq(iNum).addClass(tabPage.activeClass);
//                    ini(iNum);
	}
	for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
			$(test).find("div").eq(i).show()
	}
});
/*上一页*/
Prev.click(function () {
	$(test).find("div").hide();
	if (iNum == 0) {
			for (var i = 0; i < curNum; i++) {
					$(test).find("div").eq(i).show()
			}
			return false;
	} else {
			Nav.find("a").removeClass(tabPage.activeClass);
			iNum--;
			Nav.find("a").eq(iNum).addClass(tabPage.activeClass);
	}
	for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
			$(test).find("div").eq(i).show()
	}
})
}
})},200)
