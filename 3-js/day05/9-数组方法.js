var arr = [null, undefined, 3, 4, 6, 7, '33', 34, 67, 678, 'NaN', 'hello']

console.log(arr);

//处理数组  将有数值值的转成number,没有数值的转成0
//Number() 0 NaN 33 NaN NaN
//isNaN  0
//parseInt() NaN NaN 33 NaN NaN
//isNaN() 0

for (i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
    if (isNaN(arr[i])) {
        arr[i] = 0;
    }
}
console.log(arr);

//反转数组
var result = arr.reverse();
console.log(arr);



