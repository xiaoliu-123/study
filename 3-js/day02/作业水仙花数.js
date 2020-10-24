//打印出所有的“水仙花数”，所谓“水仙花数”是指一个三位数，其各位数字立方和 等于该数本身。例如：153是一个“水仙花数”，因为153=1的三次方＋5的三次方＋3 的三次方
console.log('100-1000的水仙花数：');
function test() {
    for (var i = 100; i < 1000; i++) {
        var a = parseInt(i / 100);
        var b = parseInt(i % 100 / 10);
        var c = i % 10;
        if (a * a * a + b * b * b + c * c * c == i) {
            console.log(i);
        }
    }
}
test();




