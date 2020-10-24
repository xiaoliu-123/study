//数量词
//数量词后边的是重复方式的设定，默认贪婪模式  能多匹配多匹配
//在数量词后边？代表非贪婪模式（懒惰模式） 能少匹配少匹配
//var pattern = /\d[a-z]*/img;
//var pattern = /\d[a-z]*?/img;
//var pattern = /\d[a-z]?/img;
//var pattern = /\d[a-z]??/img;

var pattern = /\d[a-z]{2,}/img;
var str = '1ab2cdefg3';
console.log(pattern.exec(str));
console.log(pattern.exec(str));
console.log(pattern.exec(str));
console.log(pattern.exec(str));
