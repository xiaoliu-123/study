/* let [a, b, c, d, e] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c, d, e); */
/* let [a, b, [c], d] = [1, 2, [3, 4, 5], 6];
console.log(a, b, c, d); */
//...扩展运算法
/* let [a, ...b] = [1, 2, 3, 4, 5];
console.log(a, b);  //1 [ 2, 3, 4, 5 ] */
//默认值，当解构完如果c是undefined的时候，默认值生效
/* let [a = 1000, b = 100, c = 10] = [1, 2];
console.log(a, b, c); */
/* let [method = 'get'] = ['post'];
console.log(method); */

function test() {
    console.log('hello');
    return 10;
}
// let [x = test()] = [1];
let [x = test()] = [];
console.log(x);