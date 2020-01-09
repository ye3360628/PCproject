 //引入express
const express=require("express");
//引入连接池
const pool=require("../pool.js");
//创建router对象
let router=express.Router();
//1.登录路由
router.get("/login/:uname&:upwd",(req,res)=>{
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;
	var sql="select * from ym_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//2.注册路由
router.post("/regUser/",(req,res)=>{
	var obj=req.body;
	console.log(obj);
	var sql="insert into ym_user set ?";
	pool.query(sql,[obj],function(err,result){
		if(err) throw err;
			res.send("1");
	})
});

//3.根据用户名查询
router.get("/getName/:uname",(req,res)=>{
	var $uname=req.params.uname;
	console.log($uname);
	var sql="select * from ym_user where uname=?";
	pool.query(sql,[$uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//4.商品列表生成
router.get("/getall",(req,res)=>{
	var sql="select * from xz_index_product";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
		console.log(result)
	});
});
//详情页生成
router.get("/getindex",(req,res)=>{
	var lid=req.query.lid;
	// console.log(lid)
  var sql="select * from xz_index_product where lid=?"
  pool.query(sql,[lid],(err,result)=>{
		if(err) throw err;
    res.send(result)
    console.log(result)
  })
})
//导出路由
module.exports=router;
