//最大公约数
function maxgys(a, b) {
    for (var i = a; i > 0; i--) {
        if (a % i == 0 && b % i == 0) {
            // console.log(i);
            return i;
            break;
        }
    }
}
var result = maxgys(30, 45);
console.log(result);

//最小公倍数
//最小公倍数，最小公倍数的算法，是两个数的乘积除以最大公倍数
function gbs(a, b) {
    return (a * b) / maxgys(a, b);
}
// var result = gbs(30, 45);
// console.log(result);




