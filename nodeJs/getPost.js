var http = require("http");
var url = require("url");
var util = require("util");
var querystring = require("querystring");
/*
http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});

	// 获取url参数
	var params = url.parse(req.url, true).query; // 解析url参数
	res.write("网站名：" + params.name + "\n");
	res.write("网站URL：" + params.url + "\n");

	// 获取get请求内容
	res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);
*/


// 获取post请求内容
var postHTML = 
	  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
	  '<body>' +
	  '<form method="post">' +
	  '网站名： <input name="name"><br>' +
	  '网站 URL： <input name="url"><br>' +
	  '<input type="submit">' +
	  '</form>' +
	  '</body></html>';

http.createServer(function(req, res){
	var post = "";

	req.on("data", function(chunk){
		post += chunk;
	});

	req.on("end", function(){
		// 解析参数
		post = querystring.parse(post);
		// 设置响应头部信息及编码
		res.writeHead(200, {"Content-Type": "text/html; charset=utf8"});

		if (post.name && post.url) {// 输出提交的数据
			res.write("网站名：" + post.name);
			res.write("<br/>");
			res.write("网站URL：" + post.url);
			res.write("<br>");
			res.end(util.inspect(post));
		}else{// 输出表单
			res.write(postHTML);
		}
	})
}).listen(3000);