/*
function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
*/
/*
function test(num) {
    var str = {};
    var a = num;
    for (var i = 2; i < num; i++) {
        if (isPrime(i) && num % i == 0) {
            console.log(i);

        }
    }
}
test(45);
*/

function test(num) {
    for (var i = 2; i <= num; i++) {
        if (num / i == 1) {
            console.log(i);
        } else {
            while (num % i == 0) {
                num = num / i;
                console.log(i);
            }
        }
    }
}
//test(45);



