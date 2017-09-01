/*Buffer类的实例类似整数数组，，但Buffer的大小固定、且在V8堆外分配物理内存。
Buffer的大小在创建时确定，且无法调整*/

/*Buffer类在node.js是一个全局变量，因此无需使用require("buffer").Buffer*/
/*
const buf1 = new Buffer(10);
const buf2 = new Buffer([1, 2, 3]);
const buf3 = new Buffer("test");
const buf4 = new Buffer("test", "utf8");

const buf5 = new Buffer("hello world", "ascii");
console.log(buf5.toString("hex"));
console.log(buf5.toString("base64"));
console.log(buf5.toString("utf8"));

const arr = new Uint16Array(2);
arr[0] = 5000;
arr[1] = 4000;
const buf6 = new Buffer(arr);
const buf7 = new Buffer(arr.buffer);

console.log(buf6);
console.log(arr.buffer);
console.log(buf7);
arr[1] = 6000;
console.log(buf6);
console.log(buf7);

const arr = new Uint16Array(20);
const buf = new Buffer(arr.buffer).slice(0, 16);
console.log(buf.length);


// Buffer与ES6迭代
const buf = new Buffer([1,2,3]);

for(var b of buf){
	console.log(b);
}


// buffer类
const buf = new Buffer([0x62,0x75,0x66,0x66,0x65,0x72]);
console.log(buf.toString());

const buf1 = new Buffer("buffer");
const buf2 = new Buffer(buf1);

buf1[0] = 0x61;
console.log(buf1.toString());
console.log(buf2.toString()); // 默认utf8 toString("ascii/bas64/hex/...")

const arr = new Uint16Array(2);
arr[0] = 5000;
arr[1] = 4000;
const buf = new Buffer(arr.buffer);
console.log(buf);
arr[1] = 6000;
console.log(buf);

// 类方法
const str = "\u00bd + \u00bc = \u00be";

console.log(`$(str): ${str.length} characters, ` + 
			`${Buffer.byteLength(str, "utf8")} bytes`);
console.log(str.toString());
console.log(str.length);
for(const b of str){
	console.log(b);
}

const arr = [Buffer("1234"), Buffer("0123")];
console.log(arr.sort(Buffer.compare));
const buf1 = new Buffer("1234");
const buf2 = new Buffer("1334");
console.log(buf1.compare(buf2));// buf1==buf2 return 0; buf1>buf2 return 1;buf1<buf2 return -1;

const obj = Buffer([1,2,3]);
console.log(Buffer.isBuffer(obj));
console.log(Buffer.isEncoding("unicode"));
*/

const buf1 = new Buffer(26);
const buf2 = new Buffer(26).fill("!");

for (var i = 0; i < 26; i++) {
	buf1[i] = i + 97;
}

buf1.copy(buf2, 8, 16, 20); // 从buf1中copy第16个到第20个字符，到buf2的第8个字符处
console.log(buf2.toString());


// 类属性
