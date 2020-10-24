
//1.调用方式  2.是否改变原数组，参数  3.功能  4.返回值

//给Array原型里添加myPop()
// Array.prototype.myPop = function () {
//     //this-->数组arr
//     var temp = this[this.length - 1]
//     this.length--;
//     return temp;
// }
// var arr = [1, 2, 3, 4, 'a', 'b'];
// console.log(arr);
// var result = arr.myPop();
// console.log(result);
// console.log(arr);

Array.prototype.myPop = function () {
    //this-->数组arr
    //先保存一份最后要删除的元素
    var temp = this[this.length - 1]
    //数组长度-1
    this.length--;
    //返回要删除的元素
    return temp;
}