
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
  function add_shoppingcart(btn) {
    var name = $(btn).parent().siblings().eq(0).html();
    var price = $(btn).parent().siblings().eq(1).html();
    var $tr = $('<tr>'
            + '<td>'
            + name
            + '</td>'
            + '<td>'
            + price
            + '</td>'
            + '<td align="center">'
            + '<input type="button" value="-" οnclick="decrease(this);"/>'
            + '<input type="text" size="3" readonly value="1"/>'
            + '<input type="button" value="+" οnclick="increase(this);"/>'
            + '</td>'
            + '<td>'
            + price
            + '</td>'
            + '<td align="center"><input type="button" value="x" οnclick="del(this);"/></td>'
            + '</tr>');
    // 将此行tr追加到tbody下
    $("#goods").append($tr);
    sum();
}

// 从购物车中删除物品
function del(btn) {
    // 通过点击按钮,获取当前对象的父类的父类,就是<input>标签的父类<td>的父类<tr>,然后移除即可.
    // <tr>是行 <td>是列
    $(btn).parent().parent().remove();
    sum();
};
// 购物车中实现点击按钮增加数量
function increase(btn) {
    // 获取按钮的哥哥的内容(数量/String)
    var amount = $(btn).prev().val();
    // 数量加1,再重新设置文本框
    $(btn).prev().val(++amount);
    // 获取按钮的父亲的哥哥的内容(单价)
    var price = $(btn).parent().prev().html();
    // 计算总价
    var mny = price * amount;
    // 写入按钮的父亲的弟弟里(金额)
    $(btn).parent().next().html(mny);
    sum();
};

// 减法
function decrease(btn) {
    // 获取按钮的弟弟的内容(数量)
    var amount = $(btn).next().val();
    // 数量不能小于1
    if (amount <= 1) {
        return;
    }
    // 再重新设置文本框中的值
    $(btn).next().val(--amount);
    // 按钮的父亲的哥哥的内容(单价)
    var price = $(btn).parent().prev().html();
    // 计算总价
    var mny = price * amount;
    // 写入按钮的父亲的弟弟里(金额)
    $(btn).parent().next().html(mny);
    sum();
};

// 求订单的总计
function sum() {
    // 获取tbody下的所有行
    var $trs = $("#goods tr");
    // 遍历他们
    var sum = 0;
    for (var i = 0; i < $trs.length; i++) {
        // 获取每一行
        var $tr = $trs.eq(i);
        // 获取该行中第四列的值(金额)
        var mny = $tr.children().eq(3).html();
        sum += parseFloat(mny);
    }
    // 写入到合计
    $("#total").html(sum);
};

