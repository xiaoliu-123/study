
var arr1 = ['hello', 'a', 'b', 'c'];
//遍历
arr1.forEach(function (item, index, arr) {
    //item-->元素   index-->索引  arr-->数组arr1
    //console.log(item,index,arr);
});
//判断是否都满足某个条件every，返回true/false
var arr2 = [23, 45, 34, 6];
var result = arr2.every(function (item, idnex) {
    return item > 18;
});
console.log(result);
var result2 = arr2.some(function (item) {
    return item > 18;
})
console.log(result2);
//过滤 filter  返回满足条件的元素组成的数组
var result3 = arr2.filter(function (item) {
    return item > 18;
});
console.log(result3);
//映射计算  map  返回计算后的元素组成的数组
//作业：将数组内的每个对象的年龄加一，返回学生对象
var result = arr2.map(function (item) {
    return item * item;
    //return item.name;
});
console.log(result);
























