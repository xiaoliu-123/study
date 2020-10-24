//构造函数创建方式
var arr = new Array();
console.log();
//创建了一个数组并且长度为34
var arr2 = new Array(34);
console.log(arr2);
//访问数组元素
console.log(arr2[20]);  //undefined
//创建数组的同时设置内部元素
var arr3 = new Array(20, 30);
console.log(arr3);  //[20,30]


//数组字面量创建数组对象
var arr4 = {};
var arr5 = [20, 30, 40, 50];
console.log(arr4, arr5);