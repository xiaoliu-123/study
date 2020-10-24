let arr = [2, 3, 4, 5, 6, 2]

//遍历
let keys = arr.keys()
let values = arr.values()
let entries = arr.entries()
console.log(keys, values, entries)

//keys,values,entries变量当前是迭代器对象

//遍历迭代器对象
let result;
while (!(result = entries.next()).done) {
    console.log(result.value)
}

/* console.log(keys.next());  //{ value: 0, done: false }
console.log(keys.next());  //{ value: 1, done: false }
console.log(keys.next());  //{ value: 2, done: false }
console.log(keys.next());  //{ value: 3, done: false }
console.log(keys.next());  //{ value: 4, done: false }
console.log(keys.next());  //{ value: 5, done: false }
console.log(keys.next());  //{ value: undefined, done: true }
console.log(keys.next());  //{ value: undefined, done: true }
 */
// console.log(entries.next());


// 迭代器实现了Iterator接口，只要有Iterator接口就可以for-of遍历
/* for (let key of keys) {
    console.log(key)  //下标
}
for (let value of values) {
    console.log(value, '-----')
}
for (let entry of entries) {
    console.log(entry)
} */



/* let str = 'hello'
let str2 = str.split('')
console.log(str2)
let str3 = [...str]
console.log(str3, '------')
for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i))
} */
//对字符串进行遍历
/* for (let key of str) {
    console.log(key)
} */



//find()  查找大于2的元素,返回第一个满足条件的元素或者undefined
/* let result = arr.find((item, index) => {
    // console.log(item, index)
    return item > 2
});
console.log(result) */

//findIndex()返回第一个满足条件的索引或者-1
/* let result = arr.findIndex((item, index) => {
    return item === 2
});
console.log(result) */

//includes()  返回true/false
// console.log(arr.includes(3))  

//fill()用来填充数组  改变原数组 可不接收返回值
// let result = arr.fill(7)
/* arr.fill(7)
// console.log(result)
console.log(arr) */


