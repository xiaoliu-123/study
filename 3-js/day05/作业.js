var arr = [{ name: 'zhangsan', age: 12 }, { name: 'lisi', age: 22 }];

console.log(arr);
console.log('------------------------');
// var result = arr.map(function (item, index) {

// });
// console.log(result);

for (var i = 0; i <= arr.length - 1; i++) {
    var obj = arr[i];
    obj.age = obj.age + 1;
    console.log(obj);

}


