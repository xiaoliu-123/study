//|代表或者的关系
//匹配hello2或者1字符串   不是匹配hello2或者hello1字符串
var pattern = /hello2|1/img;
//匹配hello2或者hello1
// var pattern = /hello(2|1)/img;
var pattern = /(?<test>\w)\w\w\1/img;
var str = 'hello1abca2002';
console.log(pattern.exec(str));
console.log(pattern.exec(str));


