var a = 1+2;
var b = 1-2;
var c = 1*2;  //乘
var d = 1/2;  //除
var e = 1%2; 	//取余
console.log(a,b,c,d,e);

var f = 1/'a';
console.log(f);   //NaN  Not a Number   NaN不是一个数值，但是是Number数据类型
//isNaN()  判断是否是NaN  如果返回true是NaN，如果返回false不是NaN
var result = isNaN(f);
console.log(result);  //true
console.log(isNaN(1)); //false
console.log(2==5);  //false
console.log(NaN==NaN);  //false

console.log('=========');
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(9/0); //Infinity
console.log(-9/0); //-Infinity
//isFinite()函数用来判断数值是否在Number数据类型的可表示范围内，如果在返回true，否则返回false
console.log(isFinite(9/0)); //false
console.log(isFinite(100)); //true



