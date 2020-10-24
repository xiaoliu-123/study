//字符类
// var pattern = /\w\d/img;
//字符集合
// var pattern = /[^1hello]/img;
var pattern = /^h\w*\.$/img;
var str = 'helloq123.';
console.log(pattern.exec(str));
console.log(pattern.test(str));

