//string对正则表达式的支持
var pattern = /\w{2,}?/img;
var str = 'hello1world';
//search返回位置或者-1
console.log(str.search(pattern));


console.log(pattern.exec(str));




