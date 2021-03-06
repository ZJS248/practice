const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

//用http模块创建一个http服务端
http.createServer(function (req,res) {
    if (req.url == '/upload' && req.method.toLowerCase() === 'get') {
        //显示一个用于文件上传的form
        res.writeHead(200,{ 'content-type': 'text/html;charset=UTF8'});
        res.end(
            '<form action="/upload" enctype="multipart/form-data" method="post">' +
            '<input type="file" name="upload" multiple="multiple" />' +
            '<input type="submit" value="Upload" />' +
            '</form>'
        );
    } else if (req.url == '/upload' && req.method.toLowerCase() === 'post') {
        if (req.headers['content-type'].indexOf('multipart/form-data') !== -1)
            parseFile(req,res)
    } else {
        res.end('other way to post');
    }
}).listen(3000);

function parseFile(req,res) {
    req.setEncoding('binary');//设置编码格式为binary
    var body = '';  // 文件数据
    var fileName = ''; // 文件名
    // 边界字符串
    var boundary = req.headers['content-type'].split('; ')[1].replace('boundary=','');//boundary----WebKitFormBoundaryo8ToDfriEWYs8Fhl
    req.on('data',function (chunk) {
        body += chunk;
    });

    req.on('end',function () {
        var file = querystring.parse(body,'\r\n',':')
        // 只处理图片文件
        if (file['Content-Type'].indexOf("image") !== -1) {//file['Content-Type']:"image/jpeg"...
            //获取文件名
            var fileInfo = file['Content-Disposition'].split('; ');//"form-data; name=\"upload\; filename=\"1000x637.jpg\"" => ["form-data","\upload\","filename=\'1000x637.jpg\'"]
            for (value in fileInfo) {
                if (fileInfo[value].indexOf("filename=") != -1) {
                    fileName = fileInfo[value].substring(10,fileInfo[value].length - 1);

                    if (fileName.indexOf('\\') != -1) {
                        fileName = fileName.substring(fileName.lastIndexOf('\\') + 1);
                    }
                    console.log("filename: " + fileName);
                }
            }

            // 获取图片类型(如：image/gif 或 image/png))
            var entireData = body.toString();

            contentType = file['Content-Type'].substring(1);//substring(1)表示首位各去掉一个字符  "image/jpeg" => image/jpeg
        // res.writeHead(200,{ 'content-type': 'text/html;charset=UTF8'});
        // res.end(JSON.stringify(entireData))
        // return false;
            //获取文件二进制数据开始位置，即contentType的结尾
            var upperBoundary = entireData.indexOf(contentType) + contentType.length;
            var shorterData = entireData.substring(upperBoundary);

            // 替换开始位置的空格
            var binaryDataAlmost = shorterData.replace(/^\s\s*/,'').replace(/\s\s*$/,'');

            // 去除数据末尾的额外数据，即: "--"+ boundary + "--"
            var binaryData = binaryDataAlmost.substring(0,binaryDataAlmost.indexOf('--' + boundary + '--'));
            // 保存文件
            fs.writeFile(fileName,binaryData,'binary',function (err) {
                res.end('pic upload success');
            });
        } else {
            res.end('imgs only');
        }
    });
}