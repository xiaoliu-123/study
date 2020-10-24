
/* let [a, b, c] = "hello"; //['h','e','l','l','o']
console.log(a, b, c); //h e l */
let { toString, valueOf, length } = "hello";
console.log(toString, valueOf, length);
console.log(toString === String.prototype.toString);

//将string字符串转成数组
let [...arr] = "hello";
console.log(arr);