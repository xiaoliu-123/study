//判断101-200之间有多少个素数，并输出所有素数（只能被1和它本身整除的自然数为 素数）
console.log('101-200之间的素数');
function test() {
    var count = 0;
    for (var i = 101; i < 200; i++) {
        var a = true;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                a = false;
            }
        }
        if (a) {
            console.log(i);
            count = count + 1;
        }
    }
    console.log('count=', count);
}
test();
