//obj-遍历
var obj = {
    name: 'zhangsan',
    age: 12
}
//遍历对象
for (var key in obj) {
    //key-->可枚举的属性的属性名
    // obj[key];
    console.log(key, obj[key]);
}