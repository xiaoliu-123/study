//函数参数对象解构
/* function test({ name, age = 1, ...a }) {
    //name,age
    console.log(name, age, a);
}
test({ name: 'zhangsan', age: 12, gender: 'male' }) */

//函数参数数组解构
// function test([a, b, ...c]) {
function test([a, b, c, d, e = 1]) {
    console.log(a, b, c, d, e)
}
test([1, 2, 3, 4])

