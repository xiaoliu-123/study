/* let { name: username, age: age, gender, friends = "lisi" } = {
    name: 'zhangsan',
    age: 12,
    gender: '男'
};
console.log(username, age, gender, friends); */

let obj = { p: ['hello', { y: 'world' }] };
let { p: [a, { y: b }] } = obj;
console.log(a, b);