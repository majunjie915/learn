/*node.js 文件系统*/
var fs = require("fs");
var buf = new Buffer(1024);

/*
// 异步和同步
// 异步读取数据
fs.readFile("input.txt", function(err, data){
	if (err) {
		return console.error(err);
	}
	console.log("异步读取：" + data.toString());
})
// 同步读取数据
var data = fs.readFileSync("input.txt");
console.log("同步读取：" + data.toString());

console.log("程序执行完毕");

// 异步打开文件
console.log("准备打开文件！");
fs.open("input.txt", "r+", function(err, fd){
	if (err) {
		return console.log(err);
	}
	console.log("文件打开成功！");
})

// 获取文件信息
fs.stat("D:/project/learnGit/nodeJs/file.js", function(err, stats){
	if (err) {
		return console.log(err);
	}
	console.log(stats)
	console.log("读取文件信息成功");

	console.log("是否为文件（isFile）? " + stats.isFile());
	console.log("是否为目录（isDirectory）? " + stats.isDirectory());
})


// 写入文件
console.log("准备写入文件");

fs.writeFile("input.txt", "我是通过写入的文件内容!我把之前存在的内容给覆盖了", function(err){
	if (err) {
		return console.log(err);
	}
	console.log("数据写入成功！");
	console.log("--------------------我是分割线----------------------");
	console.log("读取写入的数据");
	fs.readFile("input.txt", function(err, data){
		if (err) {
			return console.log(err);
		}
		console.log("异步读取文件数据：" + data.toString());
	})
})


// 读取文件
console.log("准备打开已存在的文件！");
fs.open("input.txt", "r+", function(err, fd){
	if (err) {
		return console.log(err);
	}
	console.log("文件打开成功！");
	console.log("准备读取文件！");
	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
		if (err) {
			return console.log(err);
		}
		console.log(bytes + " 字节被读取");

		// 仅输出读取字节
		if (bytes>0) {
			console.log(buf.slice(0, bytes).toString());
		}

		// 关闭文件
		fs.close(fd, function(err){
			if (err) {
				return console.log(err);
			}
			console.log("文件关闭成功");
		})
	})
})



// 截取文件
console.log("准备打开文件！");
fs.open("input.txt", "r+", function(err, fd){
	if (err) {
		return console.log(err);
	}
	console.log("文件打开成功！");
	console.log("截取16字节后的内容");

	// 截取文件
	fs.ftruncate(fd, 16, function(err){
		if (err) {
			return console.log(err);
		}
		console.log("文件截取成功。");
		console.log("读取相同的文件");
		fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
			if (err) {
				return console.log(err);
			}

			// 仅输出读取的字段
			if (bytes>0) {
				console.log(buf.slice(0, bytes).toString());
			}

			// 关闭文件
			fs.close(fd, function(err){
				if (err) {
					return console.log(err);
				};
				console.log("文件关闭成功");
			})
		})
	})
})


// 删除文件
console.log("准备删除文件");
fs.unlink("input2.txt", function(err){
	if (err) {
		return console.log(err);
	}
	console.log("文件删除成功！");
})


// 创建目录
console.log("创建目录/project/learnGit/test/");
fs.mkdir("/project/learnGit/test/", function(err){
	if (err) {
		return console.log(err);
	}
	console.log("目录创建成功。");
})


// 读取目录
console.log("查看/project/learnGit/nodeJs目录");
fs.readdir("/project/learnGit/nodeJs/", function(err, files){
	if (err) {
		return console.log(err);
	}
	files.forEach(function(file){
		console.log(file);
	})
})
*/



// 删除目录
console.log("准备删除目录/project/learnGit/test");
fs.rmdir("/project/learnGit/test", function(err){
	if (err) {
		return console.log(err);
	}
	console.log("读取/project/learnGit目录");
	fs.readdir("/project/learnGit", function(err, files){
		if (err) {
			return console.log(err);
		};
		files.forEach(function(file){
			console.log(file);
		})
	})
})