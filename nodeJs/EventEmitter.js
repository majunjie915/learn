/*events 模块只提供了一个对象： events.EventEmitter。
EventEmitter 的核心就是事件触发与事件监听器功能的封装。*/
var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on("some_event", function(){
	console.log("some_event事件触发");
});
setTimeout(function(){
	eventEmitter.emit("some_event");
} ,2000)


// 绑定事件
eventEmitter.on("someEvent", function(arg1, arg2){
	console.log("listener1", arg1, arg2);
});
eventEmitter.on("someEvent", function(arg1, arg2){
	console.log("listener2", arg1, arg2);
});
// 触发事件  事件出发时，注册到这个事件的事件监听器被依次调用，
// 事件参数作为回调函数参数传递
eventEmitter.emit("someEvent", "arg1参数", "arg2参数");
console.log(require("events").EventEmitter.listenerCount(eventEmitter, "someEvent"));


// 通过connection（连接）事件演示EventEmitter类的应用
var listener1 = function listener1(){
	console.log("监听器listener1执行。");
}; // 监听器1
var listener2 = function listener2(){
	console.log("监听器listener2执行。");
}; // 监听器2

eventEmitter.addListener("connection", listener1); //绑定connection事件，处理函数为listener1
eventEmitter.addListener("connection", listener2);

var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter, "connection");
console.log(eventListeners + "个监听器监听连接事件");

eventEmitter.emit("connection"); // 处理connection事件

eventEmitter.removeListener("connection", listener1);// 移除监听器listener1
console.log("listener1不再受监听");

eventEmitter.emit("connection");

eventListeners = require("events").EventEmitter.listenerCount(eventEmitter, "connection");
console.log(eventListeners + "个监听器监听连接事件");

console.log("程序执行完毕");