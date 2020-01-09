
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
  $(function(){
    console.log(location.search);
    var lid=location.search.split("=")[1];
    $.ajax({
    url:"/pro/getindex", 
    data:{lid},
    type:"get",
    dataType:"json",
      success:function(result){
        var str="";
        var data1=result;
        console.log(data1)
        for ( var obj of data1){
         console.log(obj);
          str+=`    
          <div style="background-color:#F1F0F0;width: 100px;height: 50px;"></div>
          <div class="detail">
            <div class="prev">  
                <div class="bigimg">
                  <div style="width: 500px;height: 500px; position: absolute;top:0;left: 0; z-index: 999;"bigimage ></div>
                  <img src="${obj.pic2}" bigimage1 alt="" width="500px" height="500px">  
                  <div id="mask" class=""></div>
              </div>  
              <div class="smallimg">
                <div class="smallimg1">
                  <ul style="display: flex;">
                    <li><img src="${obj.pic2}" smallimage alt=""></li>
                    <li><img src="${obj.pic3}" smallimage alt=""></li>
                    <li><img src="${obj.pic1}" smallimage alt=""></li>
                  </ul>
                </div>         
              </div>
            </div> 
            <div class="rightimg">
                 <img src="" alt="" mirror> 
            </div> 
            <script src="js/zoom.js">
            </script>
            <div class="product">
              <div class="product1">
                <h4 class="h4">${obj.details}</h4>
              </div>
              <table class="product-tab">
                <tr>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;售价</td>
                  <td><h2 class="h1">￥${obj.price.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;附件</td>
                  <td>包装</td>
                </tr>
                <tr>
                  <td>服务承诺</td>
                  <td>顺丰包邮  假一赔三 30小时退货</td>
                </tr>
                <tr class="t1">
                  <td></td>
                  <td><a href="" >加入购物车</a> &nbsp;&nbsp; <a href="" class="t1_a">预约到店</a> </td>
                </tr>
                <tr>
                  <td></td>
                  <td> <a href="" class="t2_a"> [ 在线客服 ]</a> TEL：400-880-9930</td>
                </tr>
                <tr>
                  <td>温馨提示</td>
                  <td>本商品暂不支持货到付款！ 本商品不支持使用优惠券</td>
                </tr>
                <tr>
                  <td>分享</td>
                  <td>
                    <a href=""><i class="weixin"></i></a>
                    <a href=""><i class="qq"></i></a>
                    <a href=""><i class="weibo"></i></a>
                    <a href=""><i class="kongjian"></i></a>
                  </td> 
                </tr>
              </table>  
            </div>  
          </div>`;
        }    
          $(".Prev").append(str);
      }
    })
    })
  

