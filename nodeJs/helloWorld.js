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