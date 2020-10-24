'use strict';

//nodejs模块导出，commonJS规范
var firstName = 'ren';
var lastName = 'terry';
module.exports.firstName = firstName;
module.exports = {
    firstName: firstName,
    lastName: lastName
};
console.log(module.exports === exports);

// console.log(module.exports);
// console.log(exports);
// console.log(module.exports === exports);