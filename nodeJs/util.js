var util = require("util");

/*util.inherits 实现对象间原型继承的函数*/
function Base(){
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function(){
		console.log("Hello " + this.name);
	};
}
Base.prototype.showName = function(){
	console.log(this.name);
};
function Sub(){
	this.name = "sub";
}

util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
// objSub.sayHello();
console.log(objSub);

/*util.inspect 将任意对象转换为字符串，通常用于调试和错误输出*/
function Person () {
	this.name = "byvoid";
	this.toString = function(){
		return this.name;
	}
}
var objPerson = new Person();
console.log(util.inspect(objPerson));
console.log(util.inspect(objPerson, true));


/*util.isArray(object) 如果给定参数“object”是一个数组返回true，否则返回false*/
console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));

/*util.isRegExp(object)*/
console.log(util.isRegExp(/some regexp/));
console.log(util.isRegExp(new RegExp("another regexp")));
console.log(util.isRegExp({}));

/*util.isDate(object)   util.isError(object)*/




/*工具模块 OS模块*/
var os = require("os");
// CPU的字节序
console.log("endianness: " + os.endianness());

// 操作系统名
console.log("type: " + os.type());

// 操作系统名
console.log("platform: " + os.platform());

// 系统内存总量
console.log("total memory: " + os.totalmem() + " bytes.")

// 操作系统空闲内存量
console.log("free memory: " + os.freemem() + " bytes.")

/*Path 模块提供了一些用于处理文件路径的小工具*/
var path = require("path");
// 格式化路径
console.log("normalization: "+ path.normalize("/test/test1//2slasddsk/1sdff/tab.."));

// 连接路径
console.log("joint path : " + path.join("/test", "test1", "sdjjd/dsdk", "tab", ".."));

// 转为绝对路径
console.log("resolve : " + path.resolve("util.js"));

// 路径中文件的后缀名
console.log("ext name : " + path.extname("input.txt"));


/*NDS 模块 用于解析域名*/
var dns = require("dns");
 dns.lookup("www.github.com", function(err, address, family){
 	console.log("ip地址： " + address);
 	dns.reverse(address, function(err, hostnames){
 		if (err) {
 			return console.log(err);
 		}
 		console.log("反向解析：" + address + ":" + JSON.stringify(hostnames));
 	})
 })