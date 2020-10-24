'use strict';

require('babel-polyfill');

var a = 1;
//Set
//引入babel-ployfill
//模块导入第三方包 -->找包？  从本项目的node_modules里找，-->从父级的node_modules里找-->从父级的node_modules里找-->...直到往全局找，如果没有找到就报错
var set = new Set();
//添加内容
set.add('zhangsan');
console.log(set);

var arr = [1, 2, 3];
var result = Array.from(arr);
console.log(result);