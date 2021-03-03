var express=require("express");
var cors=require("cors");
// 引入接口模块
var api=require("./api/api.js");

var app=express();
// 跨域配置 模块
app.use(cors());

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","*");
// })

app.use("/api",api);

app.listen(9528,()=>{
    console.log("9528已开启");
})




