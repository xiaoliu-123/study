//nodeJS模块导入
// let obj = require('./module3.js');
let { firstName, lastName } = require('./module3');
console.log(firstName, lastName);
// console.log(obj);
console.log(module.id);
console.log(module.filename);
console.log(module.loaded);
console.log(module.parent);
console.log(module.children);

