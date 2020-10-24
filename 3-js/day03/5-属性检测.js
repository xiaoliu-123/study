//检测属性
//in  hasOwnProperty() propertyIsEnumerable()
var obj = {
	name:'zhangsan',
	age:12,
	clazz:{},
	toString1:function(){}
};
//in 检测是否是自有属性或者继承属性,如果是返回true,否则返回false
console.log('name' in obj);  //true
console.log('toString' in obj);  //true
//如果在obj中有toString方法，调用toString方法，否则什么也做
if('toString' in obj){
	console.log(obj.toString());
}
if(obj.toString){
	console.log(obj.toString());
}
//hasOwnProperty()  检测是否是自有属性，对于自有属性返回true,其他返回false
console.log(obj.hasOwnProperty('name'));   //true
console.log(obj.hasOwnProperty('toString'));  //false
//propertyIsEnumerable() 检测属性是否是自有属性，并且是可枚举属性,如果是返回true,否则返回false
console.log(obj);
console.log(obj.propertyIsEnumerable('name'));  //true






















