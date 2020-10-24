'use strict';

//nodeJS模块导入
// let obj = require('./module3.js');
var _require = require('./module3'),
    firstName = _require.firstName,
    lastName = _require.lastName;

console.log(firstName, lastName);
// console.log(obj);
console.log(module.id);
console.log(module.filename);
console.log(module.loaded);
console.log(module.parent);
console.log(module.children);