//数组对象的length属性代表数组内成员的个数
//length可变

var arr = ['hello', true, { name: 'zhangsan', age: 12 }, 11, function () { console.log(1); }];

//修改数组元素
arr[1] = 'a';

//如果下标超了length-1，数组会自动扩充到目标位置，使用undefined填充其他位置，使用给定的值填充目标位置
arr[10] = 'b';

console.log(arr);
console.log(arr.length);

console.log(arr[2]);
//拿到下标为4的item，也就是function，并执行
arr[4]();

//数组长度变大，填充undefined
// arr.length = 20;
//数组长度变小，后边的舍弃
// arr.length = 2;
arr.length--;
console.log(arr);

