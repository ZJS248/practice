// var express=require('express')
// var fs=require('fs')
// var bodyParser = require('body-parser');

// var urlencodedParser = bodyParser.urlencoded({ extended: false })
// var app=express();
// app.use('/public', express.static('public'));
// app.get('/',(req,res)=>{
//     fs.readFile('./index.html',(err,data)=>{
//         data=data.toString();
//         res.send(data)
//     })
// })
// app.post('/submit',urlencodedParser,(req,res)=>{
//     console.log(req.body)
//     res.send(JSON.stringify(req.body));
// })
// app.listen('3000')


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.use('/public', express.static('public'));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
 
app.post('/submit', urlencodedParser, function (req, res) {
   // 输出 JSON 格式
   console.log(req.body);
   
//    var response = {
//        "first_name":req.body.email,
//        "last_name":req.body.password
//    };
//    console.log(response);
   res.end(JSON.stringify(req.query));
})
 
var server = app.listen(3000,()=>{
   console.log('running')
})