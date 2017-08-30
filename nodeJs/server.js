var http = require('http');

/*http.createServer(function(request, response){
	response.writeHead(200, {
		'Content-Type': 'text/html'
	});
	response.write('<head><meta charset="utf-8"/></head>');
	response.write('我是http服务器传递出来的值');
	response.end('Hello World\n')
}).listen(8888)

console.log('Server running at http://127.0.0.1:8888/');*/


/*路由*/
var url = require("url");

function start(route){
	function onRequest(request, response){

		var pathName = url.parse(request.url).pathname;
		console.log("Request for "+ pathName + "received.");

		route(pathName);

		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("hello node");
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;