// 导入express模块
var express = require('express');
// 实例化express
var app = express();
// // 导入fs文件操作模块
// var fs = require("fs");
// // 导入音频操作模块
// var loadAudio = require('audio-loader')
const functions = require('firebase-functions');

 
// body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
// var bodyParser = require('body-parser');
// multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。
// var multer  = require('multer');
// 导入mysql模块
// var mysql = require('mysql');
// const { status } = require('express/lib/response');
// const { resolve } = require('path');

// 使用 express.static 中间件来设置静态文件路径，来设置静态文件如：图片， CSS, JavaScript 等
app.use('/public', express.static('public'));
// urlencoded返回仅解析 urlencoded 主体并仅查看 Content-Type标头与类型选项匹配的请求的中间件
// app.use(bodyParser.urlencoded({ extended: false }));

// 如果get到链接中有/index.html，则响应返回html文件index_3.html
app.get('/', function (req, res) {
  res.sendFile( __dirname + "/public/" + "index.html" );
});


// HTML文件会根据页面中的javascript的数据源自动向服务器发送get请求，如果get到链接中有/js/XXXX.js，则响应返回/public/js/中的XXXX.js文件
// app.get('/js/:jsname', function (req, res) {
//   var jsFileName=req.params.jsname;
//   res.sendFile( __dirname + `/public/js/${jsFileName}`);
// });


// HTML文件会根据页面中的CSS的数据源自动向服务器发送get请求，如果get到链接中有/style.css，则响应返回/public/中的/style.css文件
// app.get('/style.css', function (req, res) {
//   res.sendFile( __dirname + "/public/" + "style.css" );
// });


// javascript的数据源自动向服务器发送get请求，如果get到链接中有'/images/:name'，获取实际name的值，创建一个文件传输流，返回/public/images/对应文件名字的图片
// app.get('/images/:imagname', function (req, res) {
//   // console.log("获取到图片获取请求:"+ req.params.imagname);
//   var imageName=req.params.imagname;
//   var readerImageStream = fs.createReadStream(__dirname + `/public/images/${imageName}`).on('error', (err)=>{
//     console.log(err);
//   });
//   readerImageStream.pipe(res);
// });

// 用于app本身的图片，如网页抬头标识，javascript的数据源自动向服务器发送get请求，如果get到链接中有'/appimage/:name'，获取实际name的值，创建一个文件传输流，返回/public/appimage/对应文件名字的图片
// app.get('/appimage/:shortcutname', function (req, res) {
//   console.log("获取到图片获取请求:"+ req.params.shortcutname);
//   var imageName=req.params.shortcutname;
//   var readerImageStream = fs.createReadStream(__dirname + `/public/appimage/${imageName}`).on('error', (err)=>{
//     console.log(err);
//   });
//   readerImageStream.pipe(res);
// });





// 服务使用express.json()，不然服务器无法解析前端发挥的JSON数据
app.use(express.json());


// 监听8081端口
// var server = app.listen(8080, function () {
 
//   var host = server.address().address
//   var port = server.address().port
//   // console.log(host)
//   // console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
// })

exports.app = functions.https.onRequest(app);


        // "destination": "/index.html"


