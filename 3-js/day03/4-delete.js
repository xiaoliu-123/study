//值 基本数据类型值，引用数据类型值
var obj = {
	name:'zhangsan',
	age:12,
	clazz:{
		name:'1班',
		size:45
	}
};
console.log(obj);
//删除属性
delete obj.name;
console.log(obj);


//获取班级名称
console.log(obj.clazz.name);
delete obj.clazz;
console.log(obj);





