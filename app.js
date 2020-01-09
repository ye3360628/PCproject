const express=require('express');
//引入路由器
const proRouter=require('./routes/pro.js');
//引入body-parser中间件模块
const bodyParser=require('body-parser');
let app=express();
app.listen(5500);
//托管静态资源
app.use(express.static('./pro'));
//应用body-parser中间件
app.use(bodyParser.urlencoded({
	extended:false
}) ); 
//应用路由器
// /user/reg
app.use('/pro',proRouter);



























