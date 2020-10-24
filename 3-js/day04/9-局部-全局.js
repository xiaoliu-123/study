//局部变量  全局变量
//写在函数内，使用var修饰的变量是局部变量，局部变量只能在该函数内使用
var a = 1;
function test() {
    console.log(a);  // 第二个打印    全局变量a  1
    a = 2;
    console.log(a);  //  第三个打印   全局变量a  2
    var b = 3;
    console.log(b);  //  第四个打印   局部变量b  3
}
console.log(a);     //  第一个打印    全局变量a  1
test();
console.log(a);     //  第五个打印    全局变量a  2
console.log(b);     //  第六个打印    报错







