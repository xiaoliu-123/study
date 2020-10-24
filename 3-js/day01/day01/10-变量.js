var a = 1;
console.log(a); //1
//变量声明提升  使用var声明的变量会提升到作用域的前边。代码的前边，var声明的变量可以重复声明
console.log(b); //undefined
var b = 2;    
console.log(b);  //2

//console.log(c);  //报错

//let 声明的变量没有变量提升，暂时性死区，并且let声明的变量不允许重复声明
//console.log(d);
let d = 2;
console.log(d);

//var a = 10;  //可以的
//let d = 20;  //报错

//const 用来声明常量，常量的值不可修改，常量必须在声明的时候初始化。
const PI = 3.14159;

//const PI;   //报错，常量在声明的时候必须初始化
//PI = 3.14;  





