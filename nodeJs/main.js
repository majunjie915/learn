var fs = require("fs");
var events = require("events");

// 阻塞代码实例
/*var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("程序执行结束！--同步")*/

// 非阻塞代码实例
/*fs.readFile('input.txt', function(err, data){
	if (err) {
		return console.err(err);
	}
	console.log(data.toString());
})
console.log("执行程序又结束了！--异步");*/


// 事件驱动程序
/*var eventEmitter = new events.EventEmitter();
var connectHandler = function connected(){
	console.log("连接成功。")

	eventEmitter.emit('data_received');
}
eventEmitter.on('connected', connectHandler);
eventEmitter.on('data_received', function(){
	console.log("数据接收成功。");
})
eventEmitter.emit('connected');
console.log("事件驱动程序执行完毕");*/

/*Stream*/
// 从流中读取数据
var data = "";
// 创建可读流
var readerStream = fs.createReadStream("input.txt");
// 设置编码为utf8
readerStream.setEncoding("utf8");
// 处理流事件
readerStream.on("data", function(chunk){
	data += chunk;
})

readerStream.on("end", function(){
	console.log(data);
})

readerStream.on("error", function(err){
	console.log(err.stack);
});

console.log("读取数据程序执行完毕");

// 写入流
var data2 = "菜鸟教程官网地址：www.runoob.com";

// 创建一个可写入的流，写入文件output.txt中
var writerStream = fs.createWriteStream("output.txt");
writerStream.write(data2, "utf8");
writerStream.end();// 标记文件末尾
// 处理流事件--> data,end,and error
writerStream.on("finish", function(){
	console.log("写入完成。")
})
writerStream.on("error", function(err){
	console.log(err.stack);
});

console.log("写入数据程序执行完毕");


/*管道流*/
var rStream = fs.createReadStream("input.txt");
var wStream = fs.createWriteStream("output2.txt");
rStream.pipe(wStream);
console.log("管道流程序执行完毕");


/*链式流*/
var zlib = require("zlib");

// 压缩input.txt文件为input.txt.gz
fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input.txt.gz"));

console.log("文件压缩完成");

// 解压input.txt.gz文件为input.txt
/*fs.createReadStream("input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("input2.txt"));

console.log("文件解压完成");*/


/*引入模块*/
var HelloWorld = require("./helloWorld");
hello = new HelloWorld();
hello.setName("BYVoid");
hello.sayHello();