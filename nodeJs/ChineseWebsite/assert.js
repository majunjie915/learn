/*assert 模块提供了断言预测的函数，用于测试不变式。*/
const assert = require("assert");


/*assert.deepEqual(actual, expected[, message])    == ; 只测试可枚举
的自身属性，不测试对象的原型、连字符、不可枚举的属性;
*/
assert.deepEqual(Error("a"), Error("b"));// 不会抛出AssertionError，Error对象的属性不可枚举

// Map和Set包含的子项也会被检测
const obj1 = {
	a: {
		b: 1
	}
};
const obj2 = {
	a: {
		b: 2
	}
};
const obj3 = {
	a: {
		b: 1
	}
};
const obj4 = Object.create(obj1);

assert.deepEqual(obj1, obj1);// 通过，对象与自身相等
assert.deepEqual(obj1, obj3);// 通过，两个对象相等
// assert.deepEqual(obj1, obj2);   抛错，两个对象不相等
// assert.deepEqual(obj1, obj4, "不测试原型");   //抛错，不测试原型


/*assert.deepStrictEqual(actual, expected[, message])  === ; 
对象的原型也使用全等运算符比较  ; 对象类型标签要求相等;*/

assert.deepEqual({a: 1}, {a: "1"});
// assert.deepStrictEqual({a: 1}, {a: "1"}); 抛错，1 !== "1"

const date = new Date();
const object = {};
const fakeDate = {};

Object.setPrototypeOf(fakeDate, Date.prototype);

assert.deepEqual(object, fakeDate); // 测试通过，不测试原型
// assert.deepStrictEqual(object, fakeDate);  抛错，原型不同
assert.deepEqual(date, object); // 测试通过，不测试类型标签
// assert.deepStrictEqual(date, object);  抛错，类型标签不同


/*assert.doesNotThrow(block[, error][, message]) 如果抛出错误且错误类型与
error参数相同，则抛出AssertionError。如果错误类型不相同，或error参数为
undefined，则抛出错误

assert.doesNotThrow(
	() => {
		throw new TypeError("错误信息");
	},
	TypeError,
	"抛出错误"
);
*/


/*assert.equal(actual, expected[, message]) 用 == 测试actual与expect是否相等*/

assert.equal(1, 1);
assert.equal(1, "1");
// assert.equal(1, 2);
// assert.equal({a: {b: 1}}, {a: {b: 1}})

