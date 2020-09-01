var fs=require('fs')
function notFound(){
    return fs.readFileSync('./404.html')
}
function route(req,res){
    let obj=new URL(req.url,'http://localhost:8888');
    const pathname=obj.pathname;
    return new Promise(resolve=>{
        // console.log('pathname:'+pathname)
        if(pathname==='/'){//首页
            fs.readFile('./index.html',(err,data)=>{
                if(err){
                    resolve(notFound())
                    return false;
                }
                resolve(data);
                return true;
            })
        }else if((/^[/]public[/]/).test(pathname)){
            fs.readFile('.'+pathname,(err,data)=>{
                if(err){console.log(err);return false;}
                resolve(data);
                return true;
            })
        }else if(pathname==='/submit'){
            var post = '';
            // console.log(req)
            req.on('data',(chunk)=>{
                console.log(chunk)
                post+=chunk;
            })
            console.log('post'+post)
            resolve(post);
            return true;
        }
        else{
            resolve(notFound());
        }
    })
}
exports.route=route;