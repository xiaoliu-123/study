
var str = ' Hello  World  ';
console.log(str);
//获取某个位置上的字符
console.log(str.charAt(2));
//获取某个位置上的字符的字符编码
console.log(str.charCodeAt(2));
//获取l字符在字符串中的位置，返回位置或者-1，从前往后找
console.log(str.indexOf('l'));
//获取l字符在字符串中的位置，返回位置或者-1，从后往前找
console.log(str.lastIndexOf('l'));
//拼接字符串
console.log(str.concat('你好', 'a'));
//截取字符串，开始位置和结束位置，不包含结束位置字符
console.log(str.slice(2, 5));
//截取字符串，开始位置和结束位置，不包含结束位置字符
console.log(str.substring(2, 5));
//截取字符串，开始位置和项数
console.log(str.substr(2, 5));
//去除前后空格
console.log(str.trim());
//转小写
console.log(str.toLowerCase());
//转大写
console.log(str.toUpperCase());


