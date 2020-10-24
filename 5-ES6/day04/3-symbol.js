//创建symbol值
let sy1 = Symbol('sy1');
let sy2 = Symbol('sy2');
console.log(sy1, sy2);
console.log(sy1 === sy2)
//为了解决冲突
let obj = {
    name: 'hello',
    age: 12
}
Object.defineProperties(obj, {
    name: {
        enumerable: false,
    }
    ,
    age: {
        enumerable: false
    }
})
//新增属性，修改属性
let sy3 = Symbol('新增的name');
// obj[sy3] = 'myName';

let obj2 = {
    ...obj,
    //属性名是变量名时使用中括号
    [sy3]: 'myName',
};
console.log(obj2)

