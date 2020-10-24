//验证ES6导出的是引用
import { firstname, lastname } from './module7';
console.log(firstname, lastname);
setTimeout(() => {
    console.log(firstname, lastname);
}, 4000);


