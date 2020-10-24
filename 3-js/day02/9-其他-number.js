//其他到number类型的转换
//Number()  +   在字符串转number过程中共 认数值，如果是非数值NaN
console.log(Number(undefined));  //NaN  
console.log(Number(null));  //0
console.log(+true);  //1
console.log(+false);  //0
console.log(+'123');  //123
console.log(+'hello123');  //NaN
//parseInt()  取整转换操作 其他到number取整转换，只认数值，遇到非数值的，将之前的数值返回
console.log(parseInt(12.89));  //1212
//null undefined true false "" NaN 
console.log(parseInt(true));  //NaN
console.log(parseInt('123hello'));  //123

//parseFloat()  可以转换出小数
console.log(parseFloat('123.1ac'));  //123.1
//null undefiend true false ""-->NaN







