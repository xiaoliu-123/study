//ES5函数内部属性  this arguments
//rest参数 可以接收多余的实参 并不仅仅是在箭头函数内使用
let test = (a, ...b) => {
    console.log(a, b);
    //箭头函数内arguments不再保存实参
    // console.log(arguments);
}
test(1, 2, 3, 4, 5);


