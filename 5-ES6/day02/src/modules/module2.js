//ES6导入
// import './module1.js';
// import { firstName, lastName, first, last, first as f, a, test } from './module1';
// console.log('module2打印', firstName, lastName, first, last, f, a, test);
// import { a, test ,b} from './module1'
// console.log(a, test, b);
// test();
//一般在某个模块由export 和export default 导出用*
// import * as obj from './module1';  //对象，对象是module1中导出的全部内容
// console.log(obj);

//接收模块的默认导出
import person from './module1';
console.log(person);



