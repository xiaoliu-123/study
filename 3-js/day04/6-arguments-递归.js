
//计算不确定个数数值的和
function add() {
    //arguments
    //console.log(arguments);
    //console.log(arguments.length);  //实参个数
    //console.log(arguments[0]);   //获取0号位置的实参
    var total = 0;
    for (i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    console.log(total);
    //callee 函数本身
    console.log(arguments.callee === add);
}
//实参个数不确定
add(1, 2, 3, 4, 5);  //1,2,3,4,5 实参列表


//递归 10！
function jc(num) {
    if (num <= 1) {
        return 1;
    }
    return num * arguments.callee(num - 1);
}

//斐波那契数列递归
function fb(index) {
    //每个位置上放什么数据
    if (index <= 1) {
        return index;
    }
    return arguments.callee(index - 1) + arguments.callee(index - 2);
}
//console.log(fb(10));
var str = "";
for (var i = 0; i <= 20; i++) {
    str += fb(i) + ',';
}
console.log(str);











