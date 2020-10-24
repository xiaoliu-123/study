//Object静态方法
//Object.is(a,b)  判断两个值是否一样
/* console.log(1 === 1)
console.log(Object.is(1, 1))
console.log(Object.is(1, 2)) */
/* console.log(+0 === -0)           //true
console.log(Object.is(+0, -0))   //false
 */
/* console.log(NaN === NaN)            //false
console.log(Object.is(NaN, NaN))    //true
console.log(isNaN(NaN))             //true */

let obj = {
    name: 'zhangsna',
    age: 12
}
//实现对象拷贝、复制
//{} 目标对象 obj复制的对象
// Object.assign() 返回值就是目标对象
/* let o = {}
let result = Object.assign(o, obj)
console.log(o)
console.log(o === result) */
//对象的合并
//如果属性冲突，后边的会覆盖前边的
let obj2 = { name: 'lisi', gender: 'male' }
let o = {}
let result = Object.assign(obj, obj2)
console.log(obj)
console.log(o === result)
