
var a = 1;
//值传递，将a的值复制了一份给了b
var b = a;
console.log(a,b);   //1,1
a = 2;
console.log(a,b);   //2,1

var obj = {
	name:'zhangsan',
	age:12
};
//引用传递 将obj的引用地址复制一份给obj2
var obj2 = obj;
console.log(obj,obj2);  //{name:'zhangsan',age:12}  一样
//修改obj2中name属性的值为lisi
obj2.name = 'lisi';
console.log(obj,obj2); //{name:'lisi',age:12}  一样
















