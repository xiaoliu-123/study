//基本包装类型 Number String Boolean
var num = new Number(10);
console.log(num);
var bool = new Boolean(true);
console.log(bool);
console.log(bool.toString());

//基本数据类型string
var s = 'hello';
//s在调用属性和方法的时候，自动装箱为String类型的实例，可以调用String.prototype属性和方法，在调用完自动拆箱。
console.log(s.split(''));




