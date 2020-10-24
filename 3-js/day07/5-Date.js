var date = new Date();
//获取当前时间
console.log(date);

//时间戳，毫秒单位
console.log(date.getTime())
//当前时间的时间戳
console.log(Date.now());

console.log('--------------');
var str = '2019-09-09 09:09:09';
//将字符串转成Date对象
var date2 = new Date(str);

console.log(date2);
console.log(date2.getTime());

//修改月份
date2.setMonth(10);
date2.setDate(3);
console.log(date2);
console.log(date2.getHours());