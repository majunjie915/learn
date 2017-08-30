function Hello(){
	var name;
	this.setName = function(thyName){
		name = thyName;
	};
	this.sayHello = function(){
		console.log("hello " + name);
	};
};
module.exports = Hello;


/*node.js 函数*/
function say(word){
	console.log(word);
}

function execute(someFunction, value){
	someFunction(value);
}

execute(say, "Hello");

// 匿名函数
execute(function(word){
	console.log(word);
} , "world");


/*全局对象*/
console.log(__filename); // 当前正在执行的脚本的文件名
console.log(__dirname); // 当前执行脚本所在的目录
// 全局函数 setTimeout  clearTimeout  setInterval  clearInterval
function printHello(){
	console.log("两秒后输出的结果");
}
setTimeout(printHello ,2000);

var timer = setInterval(printHello, 2000);
clearInterval(timer);


/*全局变量 process*/
process.on("exit", function(code){
	setTimeout(function(){
		console.log("该代码不会执行");
	} , 0)

	console.log("退出码为 ", code);
})
console.log("程序执行完毕");


/*Process属性*/
process.stdout.write("输出到终端"+"\n");

process.argv.forEach(function(val, index, array){
	console.log(index+ ": "+val);
})

console.log(process.execPath); // 获取执行路径

console.log(process.platform); // 平台信息

// process方法
console.log("当前目录："+process.cwd());
console.log("当前版本："+process.version);
console.log("内存使用情况："+process.memoryUsage());