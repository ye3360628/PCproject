$("[smallimage]").mouseover(function(){
  var address = $(this).attr("src");
  $("[bigimage1]").attr("src",address);
});
$("[bigimage]").mousemove(function(even){
  //获取大图的相对文档的偏移量
  var offset = $("[bigimage1]").offset();
  //获取鼠标相对于大图左上角的x轴偏移量
  var x = even.pageX - offset.left;
  //获取鼠标相对于大图左上角的y轴偏移量
  var y = even.pageY - offset.top;
  var x1=x-$("#mask").width()/2;
  var y1=y-$("#mask").width()/2;
  var maxx=$("[bigimage1]").width()-$("#mask").width();       //这里声明了一个最大宽度，用于限制小盒子的右边移动范围，利用大盒子的总宽度减去小盒子的总宽度，剩下的就是小盒子的移动范围，这个好理解。
  var maxy=$("[bigimage1]").height()-$("#mask").height(); //小盒子纵轴移动范围 原理同上
  if(x1<0){
    x1=0
    }
  if(y1<0){
    y1=0
  }
  if(x1>maxx){
    x1=maxx;
  }
  if(y1>maxy){
  y1=maxy;
  }
  $("#mask").css({top:y1,left:x1})
  //设置放大镜放大倍数，可自行设置
  var multiple = 1.5;
  //获取放大镜所在div的宽度和高度
  var mirrorwidth = $(".right").width();
  var mirrorHeight = $(".right").height();
  //获取bigimage此时的src的值
  var address = $("[bigimage1]").attr("src");
  //更改放大镜的src的值，切换图片
  $("[mirror]").attr("src",address);
  $(".rightimg,#mask").css("display","block").scrollLeft(Math.max(x*multiple - mirrorwidth/2.0)).scrollTop(Math.max(y*multiple - mirrorHeight/2.0));
}).mouseout(function(){
  $(".rightimg,#mask").css("display","none");
});