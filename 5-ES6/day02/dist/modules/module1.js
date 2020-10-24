'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.test = test;
//ES6模块导出
var firstName = 'ren';
var lastName = 'terry';
console.log('这是module1模块');
//列表导出
// export { firstName, lastName }
//重命名导出
// export { firstName as first, lastName as last }
var b = 2;
//导出一个属性
var a = exports.a = 1;
function test() {
    console.log(1);
}

//默认导出
exports.default = {
    name: 'zhangsan',
    age: 12
};
// export default a;