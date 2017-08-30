
/*创建web客户端*/
var http = require("http");

// 用于请求的选项
var option = {
	host: "localhost",
	port: "8081",
	path: "/index.html"
};

// 处理响应回调函数
var callback = function(response){
	var body = "";
	response.on("data", function(data){
		body += data;
	});

	response.on("end", function(){
		// 数据接收完成
		console.log(body);
	});
}

// 向服务器发送请求
var req = http.request(option, callback);
req.end();