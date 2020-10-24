var a = 10;
//作用域链
function test() {
  //局部变量
  var a = 1;
  b = 2;
  //局部函数
  /*function test1() {
      console.log(a);
  }*/
  return function () {
    console.log(a);
  }
}
test()();
// console.log(b);  //2  如果调用a，会报错，全局没有a
// test1();
console.log(a);