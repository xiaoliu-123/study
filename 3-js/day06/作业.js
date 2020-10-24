//1.匹配密码，密码必须包含数字与字母
// 数字前后可以有其他的字符，字母前后也可有其他字符

var pattern = /.*\d+.*[a-z]+.*/img;
// var str = '1-+*.ajsj127'  //true
//var str = '123';           //false
//var str = 'abc';           //false
// var str = '1a2b!^&'        //true
// console.log(pattern.test(str));


//2.匹配密码，密码强度：强，必须包含大写，小写和数字, 和特殊字符(!,@,#,%,&),且大于6位

//reg=/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!|@|#|%|&])^([a-zA-Z0-9!@#%&]){6,}$/

var pattern2 = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!|@|#|%|&])^([a-zA-Z0-9!@#%&]){6,}$/mg;
//var str = '123';     //false
//var str = 'asd';      //false
//var str = '1d';      //false
//var str = '8h!';     //false
//var str = '1aP#';
//console.log(pattern2.test(str));


//3.匹配email
var pattern3 = /^([0-9a-zA-Z]+)@([0-9a-zA-Z]+)+.com$/;
//var str = '123@sj.com';
//console.log(pattern3.test(str));

//4.匹配身份证
var pattern4 = /^[0-9]{17}([0-9]|X)$/;
//var str = '45088119980901444X';
//console.log(pattern4.test(str));

// 5.匹配用户名，包含字母或者数字,且8位
var pattern5 = /^[0-9a-zA-Z]{8}$/;
//var str = '12345asd';
//console.log(pattern5.test(str));

// 6.匹配ip地址
var pattern6 = /^[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}$/;
//var str = '172.0.0.1';
//console.log(pattern6.test(str));


//计算一个字符串中所有的数字的和
//例如  字符串是：‘hello90abc 78sjh12.5’ 结果是90 + 78 + 12.5 = 180.5
var pattern7 = /([0-9]+.[0-9]+)|([0-9]+)/img;
var str = 'hello90abc 78sjh12.5';

var arr = [];
while (result = pattern7.exec(str)) {
    arr.push(result);
};
var temp = arr.map(function (item) {
    return item[0];
});
console.log(temp);

var sum = 0;
for (var i = 0; i, i < temp.length; i++) {
    temp[i] = Number(temp[i]);
    sum += temp[i]
}
console.log(sum);

// console.log(pattern7.exec(str));
// console.log(pattern7.exec(str));
// console.log(pattern7.exec(str));


