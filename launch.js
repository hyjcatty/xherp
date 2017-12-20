
var http = require("http");
var fs = require('fs');
var url = require('url');
var req = require('./ejs/req');
var Save_path = "./usr_img";

http.createServer(function(request, response) {
    console.log(request.url);
    var pathname = url.parse(request.url,false).pathname;
    var ext = pathname.match(/(\.[^.]+|)$/)[0];
    var Data="";

    switch(ext){
        case ".css":
            console.log("Client require :"+pathname);
            Data = fs.readFileSync("."+pathname,'utf-8');
            response.writeHead(200, {"Content-Type": "text/css"});
            response.write(Data);
            response.end();
            break;
        case ".js":
            console.log("Client require :"+pathname);
            Data = fs.readFileSync("."+pathname,'utf-8');
            response.writeHead(200, {"Content-Type": "application/javascript"});
            response.write(Data);
            response.end();
            break;
        case ".map":
            console.log("Client require :"+pathname);
            Data = fs.readFileSync("."+pathname,'utf-8');
            response.writeHead(200, {"Content-Type": "application/javascript"});
            response.write(Data);
            response.end();
            break;
        case ".ico":

            console.log("Client require :"+pathname);
            //Data = fs.readFileSync("."+pathname,'binary');
            response.writeHead(200, {"Content-Type": "image/x-ico"});
            //response.write(Data);
            //response.end();
            var file = "."+pathname;
            fs.stat(file, function (err, stat) {
                var img = fs.readFileSync(file);
                response.contentType = 'image/x-ico';
                response.contentLength = stat.size;
                response.end(img, 'binary');
            });
            break;
        case ".png":
            console.log("Client require :"+pathname);
            //Data = fs.readFileSync("."+pathname,'binary');
            response.writeHead(200, {"Content-Type": "image/png"});

            //fs.createReadStream("."+pathname, 'utf-8').pipe(response);
            //response.write(Data);
            //response.end();
            var file = "."+pathname;
            fs.stat(file, function (err, stat) {
                var img = fs.readFileSync(file);
                response.contentType = 'image/png';
                response.contentLength = stat.size;
                response.end(img, 'binary');
            });
            break;
        case ".jpg":
            console.log("Client require :"+pathname);
            //Data = fs.readFileSync("."+pathname,'binary');
            response.writeHead(200, {"Content-Type": "image/jpg"});

            //fs.createReadStream("."+pathname, 'utf-8').pipe(response);
            //response.write(Data);
            //response.end();
            var file = "."+pathname;
            fs.stat(file, function (err, stat) {
                var img = fs.readFileSync(file);
                response.contentType = 'image/jpg';
                response.contentLength = stat.size;
                response.end(img, 'binary');
            });
            break;
        case ".gif":
            console.log("Client require :"+pathname);
            //Data = fs.readFileSync("."+pathname,'binary');
            response.writeHead(200, {"Content-Type": "image/gif"});

            //fs.createReadStream("."+pathname, 'utf-8').pipe(response);
            //response.write(Data);
            //response.end();
            var file = "."+pathname;
            fs.stat(file, function (err, stat) {
                var img = fs.readFileSync(file);
                response.contentType = 'image/gif';
                response.contentLength = stat.size;
                response.end(img, 'binary');
            });
            break;
        case ".swf":
            console.log("Client require :"+pathname);
            //Data = fs.readFileSync("."+pathname,'binary');
            //response.writeHead(200, {"Content-Type": "application/x-shockwave-flash"});

            //fs.createReadStream("."+pathname, 'utf-8').pipe(response);
            //response.write(Data);
            //response.end();
            var file = "."+pathname;
            fs.stat(file, function (err, stat) {
                var swf = fs.readFileSync(file);
                response.contentType = 'application/x-shockwave-flash';
                response.contentLength = stat.size;
                response.end(swf, 'binary');
            });
            break;
        case ".woff":
            console.log("Client require :"+pathname);
            //Data = fs.readFileSync("."+pathname,'binary');
            response.writeHead(200, {"Content-Type": "application/x-font-woff"});
            //response.write(Data);
            //response.end();
            var file = "."+pathname;
            fs.stat(file, function (err, stat) {
                var img = fs.readFileSync(file);
                response.contentType = 'application/font-woff';
                response.contentLength = stat.size;
                response.end(img, 'binary');
            });
            break;
        case ".woff2":
            console.log("Client require :"+pathname);
            //Data = fs.readFileSync("."+pathname,'binary');
            response.writeHead(200, {"Content-Type": "font/woff2"});
            //response.write(Data);
            //response.end();
            var file = "."+pathname;
            fs.stat(file, function (err, stat) {
                var img = fs.readFileSync(file);
                response.contentType = 'font/woff2';
                response.contentLength = stat.size;
                response.end(img, 'binary');
            });
            break;
        case ".ttf":
            console.log("Client require :"+pathname);
            //Data = fs.readFileSync("."+pathname,'binary');
            response.writeHead(200, {"Content-Type": "video/mpeg4"});
            //response.write(Data);
            //response.end();
            var file = "."+pathname;
            fs.stat(file, function (err, stat) {
                var img = fs.readFileSync(file);
                response.contentType = 'video/mpeg4';
                response.contentLength = stat.size;
                response.end(img, 'binary');
            });
            break;
        case ".mp4":
            console.log("Client require :"+pathname);
            //Data = fs.readFileSync("."+pathname,'binary');
            response.writeHead(200, {"Content-Type": "application/x-font-ttf"});
            //response.write(Data);
            //response.end();
            var file = "."+pathname;
            fs.stat(file, function (err, stat) {
                var img = fs.readFileSync(file);
                response.contentType = 'application/x-font-ttf';
                response.contentLength = stat.size;
                response.end(img, 'binary');
            });
            break;
        case ".html":
            console.log("Client require :"+pathname);
            Data = fs.readFileSync("."+pathname,'utf-8');
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(Data);
            response.end();
            break;
        case ".svg":
            console.log("Client require :"+pathname);
            Data = fs.readFileSync("."+pathname,'utf-8');
            response.writeHead(200, {"Content-Type": "image/svg+xml"});
            response.write(Data);
            response.end();
            break;
        case ".php":
            //2 different PHP file:dump.php&request.php
            var filename = pathname.replace(/^.*\/|\..*$/g, "");
            console.log("Client require PHP file :"+filename);
            if(filename == "request"){
                console.log("Client require :"+pathname);
                var arg = url.parse(request.url,true).query;
                console.log(arg);
                var ret = req.database(arg);
                console.log("Server response :"+ret);
                response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
                response.write(ret);
                response.end();
            }else if(filename == "jump"){
                console.log("Client require :"+pathname);
                var arg = url.parse(request.url,true).query;
                console.log(arg);
                var ret = req.check_usr(arg);
                if(ret != ""){
                    Data = fs.readFileSync('./scope.html','utf-8');
                    response.writeHead(200, {"Content-Type": "text/html"});
                    response.write(Data);
                    response.end();
                }else{
                    Data = fs.readFileSync('./Login.html','utf-8');
                    response.writeHead(200, {"Content-Type": "text/html"});
                    response.write(Data);
                    response.end();
                }
            }else if(filename = "upload"){
                var para_name = "id";
                var reg = new RegExp("(^|&)" + para_name + "=([^&]*)(&|$)", "i");
                var id = request.url.substring(request.url.indexOf("=")+1);

                console.log("User want to upload file: usr id="+id);
                var chunks = [];
                var size = 0;
                request.on('data' , function(chunk){
                    chunks.push(chunk);
                    size+=chunk.length;
                });

                request.on("end",function(){
                    var buffer = Buffer.concat(chunks , size);
                    if(!size){
                        res.writeHead(404);
                        res.end('');
                        return;
                    }

                    var rems = [];

                    var files_head=[];
                    for(var i=0;i<buffer.length-1;i++){
                        var v = buffer[i];
                        var v2 = buffer[i+1];
                        if(v==13 && v2==10){
                            rems.push(i);
                        }
                    }
                    // first we need to get first line as seed
                    var first_line = buffer.slice(0,rems[0]).toString();

                    files_head.push(0);//First file's start is at 0
                    for(var i=0;i<rems.length;i++){
                        if(rems[i+1]-rems[i]-2 == first_line.length){
                            if(first_line == buffer.slice(rems[i]+2,rems[i+1]).toString()){
                                files_head.push(rems[i]+2);
                                console.log("Push "+rems[i]+" into file_head");
                            }
                        }
                    }// we get every file head here
                    console.log('Upload ['+(files_head.length-1)+"] files.");
                    for(var i=0;i<files_head.length-1;i++){
                        var nbuf;
                        var web_head;
                        var filename;
                        var j=0
                        for(;j<rems.length;j++){
                            if(rems[j]>files_head[i]) break;
                        }
                        if(i<files_head.length-1){
                            nbuf = buffer.slice(rems[j+3]+2,files_head[i+1]-2);
                        }else{
                            nbuf = buffer.slice(rems[j+3]+2,rems[rems.length-2]);
                        }
                        web_head = buffer.slice(rems[j]+2,rems[j+1]).toString();

                        filename = web_head.match(/filename=".*"/g)[0].split('"')[1];
                        console.log("Save file:"+filename);
                        var path = Save_path+"/"+filename;
                        fs.writeFileSync(path , nbuf);
                    }

                    response.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8'});
                    response.end(JSON.stringify('Upload ['+(files_head.length-1)+'] successfully!'));

                    //response.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8'});
                    //response.end('Upload ['+files_head.length+"] files successfully!");
                });

                var file_obj = request.form;
                console.log(file_obj);

            }
            break;
        case ".request":
            console.log("Client require :"+pathname);
            var arg = url.parse(request.url,true).query;
            console.log(arg);
            var ret = req.database(arg);
            console.log("Server response :"+ret);
            response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
            response.write(ret);
            response.end();
            break;
        case ".jump":
            console.log("Client require :"+pathname);
            var arg = url.parse(request.url,true).query;
            console.log(arg);
            var ret = req.check_usr(arg);
            if(ret != ""){
                Data = fs.readFileSync('./scope.html','utf-8');
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(Data);
                response.end();
            }else{
                Data = fs.readFileSync('./Login.html','utf-8');
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(Data);
                response.end();
            }
            break;
        default:
            console.log("Client require :"+pathname);
                Data = fs.readFileSync('./Login.html','utf-8');
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(Data);
                response.end();
    }

}).listen(8888);
//req.req_test();
console.log("server start......");

