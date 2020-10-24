//求1000以内的完全数（若一个自然数，恰好与除去它本身以外的一切因数的和相等， 这种数叫做完全数。）
function wqs(num) {
    count = 0;
    for (i = 0; i < num; i++) {
        if (num % i == 0) {
            count += i;
        }
    }
    if (count == num) {
        console.log(num);
    } else {
        // console.log('...');
    }

}

for (i = 1; i < 1000; i++) {
    wqs(i);
}

