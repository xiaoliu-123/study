//ES6模块导出
let firstName = 'ren';
let lastName = 'terry';
console.log('这是module1模块');
//列表导出
// export { firstName, lastName }
//重命名导出
// export { firstName as first, lastName as last }
let b = 2;
//导出一个属性
export var a = 1;
export function test() {
    console.log(1);
}

//默认导出
export default {
    name: 'zhangsan',
    age: 12
};
// export default a;