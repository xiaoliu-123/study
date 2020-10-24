//逻辑与或非
//短路运算符 逻辑与&&  逻辑或||
//逻辑与&&  有假则假，如果第一个操作数是假，直接跳出该假性值，否则返回第二个数
//undefined null 0 NaN "" false 转为boolean的false。假性值
var result = (NaN && 1);  
console.log(result);  //NaN
console.log(1 && 5);  //5
//逻辑或|| 有真则真，如果第一个数是真，直接返回第一个数，否则返回第二个数
console.log(undefined || null); //null
console.log(2 || 3); //2
console.log(NaN || 2);  //2
/*
var a = 1;
var b = 2;
if(a<5&&b<5){}
if(a<5||b<5){}
if(10){}
*/
//逻辑非  返回true/false
console.log(!10);  //false
//!!可以将其他数据类型转成boolean类型
console.log(!!10); //true
console.log(!!undefined);  //false








