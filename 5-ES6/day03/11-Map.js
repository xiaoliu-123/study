//Map()  值-值
let obj = {
    name: 'zahngsan',
    age: 12
}
let arr = Object.entries(obj)
let map = new Map(arr)
console.log(map)
//添加元素
map.set('1', '2')  //{ 'name' => 'zahngsan', 'age' => 12, '1' => '2' }
map.set('1', '3')  //{ 'name' => 'zahngsan', 'age' => 12, '1' => '3' }
//删除  通过key删除
map.delete('1')
//获取  通过key获取
console.log(map.get('name'))
//清空
// map.clear()
console.log(map)
//遍历
let keys = map.keys()
let values = map.values()
let entries = map.entries()
console.log(keys, values, entries)

map.forEach((value, key) => {
    console.log(value, key)
})