var express = require('express');
var fs = require("fs");
var bodyParser = require('body-parser');
var multer = require('multer');

var app = express();

app.use('/public',express.static('public'));
app.use('/template',express.static('template'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/public/' }).array('image'));
// multer 用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。
//dest设置图片上传保存的目录
//array()中为上传文件的name ---  /* !important */

app.get('/',(req,res) => {
    fs.readFile('./index.html',(err,data) => {
        res.end(data)
    })
})

app.post('/submit',(req,res) => {
    console.log(req.body);
    console.log(req.files)

    res.end(`<a href='${req.files[0].path}'> link<a>`)
})
app.listen('3000'),() => {
    console.log('running')
};