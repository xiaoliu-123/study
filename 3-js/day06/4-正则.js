//声明方式
//1.构造函数
var pattern = new RegExp('hello', 'img');
console.log(pattern);
//字面量
var pattern2 = /hello/img;
console.log(pattern2);

var str = '你好，世界Hello World';
console.log(pattern.exec(str));