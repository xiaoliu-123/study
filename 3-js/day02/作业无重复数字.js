//有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数？都是多少？
console.log('三位无重复数：');
function test() {
    var count = 0;
    var str = ''
    for (var i = 1; i < 5; i++) {
        for (var j = 1; j < 5; j++) {
            for (k = 1; k < 5; k++) {
                if (i != j && i != k && j != k) {
                    count = count + 1;
                    str = str + i + j + k + '\t';
                }
            }
        }
    }
    console.log(str);
    console.log('count=', count);
}
test();