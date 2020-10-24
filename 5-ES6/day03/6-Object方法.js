//原型方法
let obj = {
    name: 'sanmao',
    age: 1
}
console.log(obj.__proto__)
console.log(obj.constructor.prototype)
console.log(Object.getPrototypeOf(obj))
//设置obj的原型对象
let obj2 = { test() { } }
//设置obj的原型对象为obj2
//只是设置当前对象的原型对象，并不改当前对象的构造函数的原型对象
Object.setPrototypeOf(obj, obj2)
console.log(obj.__proto__)
console.log(obj.constructor.prototype)
console.log(Object.getPrototypeOf(obj))