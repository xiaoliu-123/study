//2-闭包

var arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = function () {
        console.log(i);
    };
    // arr.push(function () {
    //     console.log(i);
    // });  
}
// console.log(arr[4]())

for (var i = 0; i < 10; i++) {
    //IIFE
    arr[i] = (function (num) {
        //num-->0,1,2,3...
        return function () {
            console.log(num);
        }
    })(i);
    // arr.push(function () {
    //     console.log(i);
    // });
}





//console.log(i);
//i = 100;
// arr[4]();
//(function () { console.log(i) })


