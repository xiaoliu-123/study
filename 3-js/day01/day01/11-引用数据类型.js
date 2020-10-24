//function test(){}
//var obj,obj2,a,zhangsan;
//function test(){}
//var test;
console.log(test);  //function
//test();
var test = 1;
console.log(test);  //1  

/*function test(){}
var test = function(){
}*/




//对象
var obj = {};
var a = null;
var zhangsan = "lisi";
console.log(obj);
//对象字面量声明
var obj2 = {
	name:zhangsan,
};
//访问对象内的属性，点表示法
console.log(obj2.name);
console.log(obj2);
console.log('==========');
//test();
//函数声明
function test(){
	//函数体
	console.log(1);
}
console.log(2);
//函数的运行
//test();
//数组
var arr = [3,'hello',true,undefined];
console.log(arr);
//获取数组内元素个数，数组的长度
console.log(arr.length);  //4
//通过下标获取元素
console.log(arr[1]);  //'hello'
console.log(arr[100]);//undefined



