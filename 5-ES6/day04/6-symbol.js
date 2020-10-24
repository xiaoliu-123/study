//参数是描述
let s = Symbol('hello');
//Symbol.keyFor(s)可以检测s这个symbol值是否在全局注册表中注册过。返回key或undefined
let s2 = Symbol.for('hello');
//获取s值的key值
let result = Symbol.keyFor(s);
let result2 = Symbol.keyFor(s2);
console.log(result, result2);

//通过注册过的s2值，找到该s2值的key，再通过key值找到s2值
let key = Symbol.keyFor(s2);
let result3 = Symbol.for(key);
console.log(result3 == s2)

