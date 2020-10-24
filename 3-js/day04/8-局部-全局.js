//局部变量  全局变量
//写在函数内，使用var修饰的变量是局部变量，局部变量只能在该函数内使用
var a = 1;
function test() {
    console.log(a);  //局部变量a  第二个打印  undefined
    a = 2;
    console.log(a);  //局部变量a  第三个打印  2
    var a = 3;
    console.log(a);  //局部变量a  第四个打印  3
}
console.log(a);  //  第一个打印    1
test();          // 
console.log(a);  //  第五个打印    1








