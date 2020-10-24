//第一次创建的时候会将symbol放到全局注册表中
let sy1 = Symbol.for('hello');
//从全局注册表中找到该key对应的symbol值
let sy2 = Symbol.for('hello');   //key -->hello
console.log(sy1 == sy2);

let sy3 = Symbol('hello');
let sy4 = Symbol('hello');   //key -->hello
console.log(sy3 == sy4);
