//如果想查看Object.prototype中的属性和方法
//console.log(Object.prototype);
//定义属性：定义属性的特征/定义属性的描述
//属性类型：数据属性、访问器属性
//定义数据属性
var obj = {
	name:'zhangsan',
	age:12
};
console.log(obj);
Object.defineProperty(obj,'name',{
	//属性描述符对象/属性特征对象
	//可配置性，可删除性
	configurable:false,
	//可枚举性
	//enumerable:false,
	//可写性，是否可修改
	writable:false,
	//值
	//value:'lisi'
});
//就是要修改name属性值
/*Object.defineProperty(obj,'name',{
	value:'test',
	writable:true
});*/
//obj.name = 'lisi';
delete obj.name;
console.log(obj);
















