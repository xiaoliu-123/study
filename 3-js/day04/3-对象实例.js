//实例调用原型的属性和方法
var obj = {
    name: 'zhangsan',
    toString: function () {
        console.log('123');
        return '321';
    }
};
console.log(obj.toString());  //[object Object]
console.log(obj.valueOf());    //{name:'zhangsan'}
console.log(obj.toLocaleString());  //[object Object]  /   { name: 'zhangsan', toString: [Function: toString] }
console.log(Object.prototype.isPrototypeOf(obj));
console.log(obj.constructor);  //[Function: Object]   如果obj中没有constructor,会调用原型中的constructor，原型中的constructor指向构造函数Object
console.log(obj.constructor === Object);


