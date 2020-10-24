var arr = [1, 2, 3,];
console.log(typeof arr);

//判断arr是否是Array的实例，可以使用instanceof判断
console.log(arr instanceof Array);

console.log(Array.isArray(arr));

console.log(arr instanceof Object);

//序列化
console.log(arr);
console.log(arr.toString());
console.log(JSON.stringify(arr));

//join() 方法可以进行数组的序列化
console.log(arr.join('||'));

//以逗号连接元素，组成字符串
console.log(arr.join(','));

console.log(arr.join('&'));


