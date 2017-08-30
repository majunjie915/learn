// 写入缓存区
var buf = new Buffer(256);
var len = buf.write("www.runoob.com");

console.log("写入字节数" + len);

// 从缓存区中读取数据
buf = new Buffer(26);
for (var i = 0; i < 26; i++) {
	buf[i] = i + 97;
}

console.log(buf.toString("ascii"));
console.log(buf.toString("ascii", 0, 5));
console.log(buf.toString("utf-8", 0, 5));
console.log(buf.toString(undefined, 0, 5));// 使用utf-8编码

// 将Buffer转换成JSON对象
var buf2 = new Buffer("www.runoob.com");
var json = buf2.toJSON(buf2);
console.log(json);

// 缓存区合并
var buf1 = new Buffer("菜鸟教程 ");
var buf3 = Buffer.concat([buf1, buf2]);
console.log("buf3内容："+buf3.toString());

// 缓存区比较
var buffer1 = new Buffer("ABCDE"),
	buffer2 = new Buffer("ABCD"),
	result = buffer1.compare(buffer2);

console.log(result);

if (result<0) {
	console.log(buffer1 + "在" + buffer2 + "之前");
}else if(result == 0){
	console.log(buffer1 + "与" + buffer2 + "相同");
}else{
	console.log(buffer1 + "在" + buffer2 + "之后");
}

// 拷贝缓存区
var buffer3 = new Buffer(5);
buffer1.copy(buffer3);
console.log("buffer3 content: " + buffer3.toString());

// 缓存区裁剪
var buffer4 = new Buffer("runoob");
var buffer5 = buffer4.slice(0,2);
console.log("buffer5 content: " + buffer5.toString() + " | buffer4 content: " + buffer4.toString());

// 缓存区长度
console.log("buffer4 length: "+buffer4.length);