//创建Set集合 成员是唯一的， key-value是一样的
let set = new Set()
console.log(set)
//添加元素
set.add('hello')
set.add('world')
set.add('world')
//遍历
let keys = set.keys()
let values = set.values()
let entries = set.entries()
console.log(keys, values, entries)
set.forEach((value) => {
  console.log(value, '---')
})
//set应用
//将一个有重复值的数组转成Set集合有去重复
let set2 = new Set([2, 3, 4, 5, 2, 3, 4, 5])
console.log(set2)
//将数组去重复
//以前，遍历数组，新数组，从旧数组里获取每一个元素，如果新数组里没有放的这个元素，放，否则，不放
let arr = [2, 3, 4, 5, 2, 3, 4, 5]
let result = new Set(arr)
let arr2 = [...result]
console.log(arr2)
console.log([...new Set(arr)])

//删除
/* set.delete('hello')
set.add('hello')
console.log(set)
//判断有没有某个成员  返回true/false
console.log(set.has('hello'))  //true
console.log(set.has('h'))       //false
//清空
set.clear()
console.log(set)
console.log(set.size) */
