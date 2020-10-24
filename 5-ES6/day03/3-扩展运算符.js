//扩展运算符...
let arr = [1, 2, 3, 4]
let [...a] = arr
console.log(a);  //新数组
console.log(a === arr);
let obj = { name: 'zhangsan', age: 12 };
let { ...b } = obj;
console.log(b);
console.log(b === obj);
// ...用到左侧是聚合  ...用到右侧是展开 
let c = {
    ...obj,
    gender: '男'
}
let { ...d } = obj
d.gender = '女'

// let { gender = '1', ...d } = obj;
// console.log(d, gender, '---')

let e = { ...obj, gender: '1' }