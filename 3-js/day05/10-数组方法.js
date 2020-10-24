

//concat()  连接数组,可以将多个数组连成一个数组
var arr1 = [1, 2];
var arr2 = [3, 4];
//arr1.push(arr2,'hello');  
//var result = arr1.concat(arr2,'hello');  
//console.log(result);  //[1,2,3,4,'hello']

var arr = [4, 5, 6, 7, 8, 9, 5, 7, 4, '5'];
//数组裁切   从3下标开始截取，截取到数组末尾
//var result = arr.slice(3);
//从3号位置开始截取，到5号位置结束，但是不包含5号位置上的元素
//var result = arr.slice(3,5);
console.log(arr);
//删除
//var result = arr.splice(2,3);
//替换
//var result = arr.splice(2,3,'hello','a','b','c');
//插入
//var result = arr.splice(2,0,'hello','a','b','c');
//查找元素位置
//var result = arr.indexOf(4);
//找5 元素，从4号位置开始从后往前找
//var result = arr.lastIndexOf(5,4);
//判断数组中是否包含某个元素  true/false
var result = arr.includes(5);
console.log(result);
console.log(arr);










