//对象内是键值对形式，key value 属性名是key,属性值是value
//创建对象
//1.构造函数new实例出来，构造函数创建对象
var obj = new Object(); //{}
console.log(obj);
//添加属性
obj.name = 'zhangsan';
obj.age = 12;
//修改属性值
obj.name = 'lisi';
console.log(obj);
//2.通过对象字面量创建对象
var obj2 = {
	name:'terry',
	age:30
};
console.log(obj2);
//修改属性值
obj2.age = 35;
console.log(obj2);

//访问属性
//.表示法
console.log(obj2.age);
//[]表示法 
console.log(obj2['age']);
//注意这下方的age不是属性age，而是变量age
//var age = 'name';
//console.log(obj2[age]);

var obj3 = {
	'name':'zhangsan',
	'gender':1,
	'age-1':22
};
console.log(obj3);
//访问了对象中不存在的属性，不报错，返回一个undefined
console.log(obj3.age);   //undefined
console.log(obj3.age-1);  //NaN undefined-1
console.log(obj3['age-1']);  //22




