//lastIndex
//匹配0-9之间的数字3次
var pattern = /\d{3}/img;
var str = '123456789';
//lastIndex代表下次开始检索的位置
/*
console.log(pattern.lastIndex);
console.log(pattern.exec(str));
console.log(pattern.lastIndex);
console.log(pattern.exec(str));
console.log(pattern.lastIndex);
*/
var arr = [];
while (result = pattern.exec(str)) {
    arr.push(result);
}
console.log(arr);

var temp = arr.map(function (item) {
    return item[0];
});
console.log(temp);


//正则表达式对象的属性
console.log(pattern.global);
console.log(pattern.ignoreCase);
console.log(pattern.multiline);
console.log(pattern.lastIndex);
console.log(pattern.source);


//检测str字符串中是否有符合正则表达式规则的字符串，如果有返回true，否则返回false.
console.log(pattern.test(str));



