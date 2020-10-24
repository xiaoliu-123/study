//九九乘法表
console.log('正的九九乘法表一');
function test1() {

    for (var i = 1; i <= 9; i++) {
        // console.log(i);
        var str = '';
        for (j = 1; j <= i; j++) {
            str += j + '*' + i + '=' + (i * j) + '\t';
        }
        console.log(str);
    }

}
test1();
/*
console.log('倒过来的九九乘法表二');
function test2() {
    for (i = 9; i > 0; i--) {
        var str = "";
        for (j = 1; j <= i; j++) {
            str = str + j + '*' + i + "=" + (i * j) + "\t";
        }
        console.log(str);
    }
}
//test2();

console.log('倒过来的九九乘法表三');
function test3() {
    for (i = 9; i > 0; i--) {
        var str = "";
        for (j = i; j > 0; j--) {
            str = str + j + '*' + i + "=" + (i * j) + "\t";
        }
        console.log(str);
    }
}
//test3();
*/
console.log('倒过来的九九乘法表四');
function test4() {
    for (i = 1; i < 10; i++) {
        var str = "";
        for (j = i; j > 0; j--) {
            str = str + j + '*' + i + "=" + (i * j) + "\t";
        }
        console.log(str);
    }
}
test4();
