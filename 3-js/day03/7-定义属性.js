//访问器属性
var obj = {
	name: 'zhangsan',
	age: 24,
	//_属性是私有属性，不暴露在外
	//真实体重
	_weight: 50
};
//obj.weight
//obj.weight = 80;
Object.defineProperty(obj, 'weight', {
	//访问器属性
	configurable: true,
	enumerable: true,
	get: function () {
		console.log('获取weight的信息');
		return this._weight - 5;
	},
	set: function (weight) {
		console.log('修改weight的信息');
		this._weight = weight;
	}
});
console.log(obj);
console.log(obj.weight);
obj.weight = 80;
console.log(obj);
Object.defineProperty(obj, '_weight', {
	enumerable: false
})
console.log(obj);









