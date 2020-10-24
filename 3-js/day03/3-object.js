
var obj = {};
//没有自有属性
//但是有继承属性
//在Object的构造函数的原型对象中的属性和方法都可以被Object构造函数的实例所继承。
console.log(obj.toString());

//构造函数  Object
//原型对象  Object.prototype
console.log(Object);
console.log(Object.prototype);
console.log(Object.prototype.constructor === Object);





