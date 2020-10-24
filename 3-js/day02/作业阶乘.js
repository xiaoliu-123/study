//for循环实现10的阶乘  10=10*9*7*8*6*5*4*3*2*1=
function jc1(num) {
    var str = '10!=';
    var sum = 1;
    for (var i = num; i > 0; i--) {
        sum = sum * i;
        if (i == 1) {
            str = str + i + '=';
        } else {
            str = str + i + '*';
        }
    }
    console.log('for循环实现10的阶乘');
    console.log(str + sum);
}
// jc1(10);

//while循环实现10的阶乘
function jc2(num2) {
    var str = '10!=';
    var sum = 1;
    var i = num2;
    while (i > 0) {
        sum = sum * i;
        if (i == 1) {
            str = str + i + '=';
        } else {
            str = str + i + '*';
        }
        i--;
    }
    console.log('while循环实现10的阶乘');
    console.log(str + sum);
}
// jc2(10);

//do-while循环实现10的阶乘
function jc3(num3) {
    var str = '10!=';
    var sum = 1;
    var i = num3;
    do {
        sum = sum * i;
        if (i == 1) {
            str = str + i + '=';
        } else {
            str = str + i + '*';
        }
        i--;
    } while (i > 0);
    console.log('do-while循环实现10的阶乘');
    console.log(str + sum);
}
// jc3(10);

//递归实现10的阶乘
function jc4(num) {
    if (num <= 1) {
        return 1;
    }
    return num * arguments.callee(num - 1);
}
var result = '10!=' + jc4(10);
console.log(result);