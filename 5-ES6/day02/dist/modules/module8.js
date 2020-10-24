'use strict';

var _module = require('./module7');

console.log(_module.firstname, _module.lastname); //验证ES6导出的是引用

setTimeout(function () {
    console.log(_module.firstname, _module.lastname);
}, 4000);