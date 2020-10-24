//递归  实现10！= 10*9! = 10*9*8!=...=10*9*8*7*6*5*4*3*2*1
function jc(num) {
    if (num <= 1) {
        return 1;
    }
    return num * arguments.callee(num - 1);
}
// var result = jc(10);
// console.log(result);


//递归 实现斐波那契数列 1 1 2 3 5 8 13...
function fb(index) {
    if (index <= 1) {
        return index;
    }
    return arguments.callee(index - 1) + arguments.callee(index - 2);
}
// var result2 = fb(10);
// console.log(result2);


//递归 实现最大公约数
function gys(a, b) {
    if (b == 0) {
        return a;
    }
    var r = a % b;
    // console.log(r);k
    return gys(b, r);
}
// var result3 = gys(30, 45);
// console.log(result3);


