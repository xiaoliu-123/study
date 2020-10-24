/*
 * @Author: your name
 * @Date: 2020-08-30 14:05:38
 * @LastEditTime: 2020-08-31 19:49:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \briup\5-js\day10\10-排序算法.js
 */
//冒泡排序算法
var arr = [223, 4, 22, 734, 2, 77, 23, 99];
for (var i = 0; i < arr.length - 1; i++) {  //确定轮数
    for (var j = 0; j < arr.length - 1 - i; j++) {  //确定每次比较的次数
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
    console.log('第' + i + '轮排序：' + arr);
}
console.log('最终排序：' + arr);

//选择排序算法
var arr = [223, 4, 22, 734, 2, 77, 23, 99];
for (var i = 0; i < arr.length - 1; i++) {
    var minIndex = i;
    //从之后的元素中找最小的
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }
    var temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
    // console.log('第' + i + '轮排序：' + arr);
}
// console.log('最终结果：' + arr);

//插入排序算法
var arr = [223, 4, 22, 734, 2, 77, 23, 99];
for (var i = 0; i < arr.length - 1; i++) {
    // 比较相邻元素，如果当要插入的元素比之前的相邻元素小，交换
    for (var j = i + 1; j > 0; j--) {
        if (arr[j] < arr[j - 1]) {
            var temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }
    }
    // console.log('第' + i + '轮排序：' + arr);
}
// console.log('最终排序结果：' + arr);


