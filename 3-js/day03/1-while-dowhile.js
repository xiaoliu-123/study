//10的阶乘
function test(num){
	//while
	var total = 1;	
	while(num>1){
		total *= num;
		num--;
	}
	console.log(total);
}
test(10);

function test2(num){
	//do while
	var total = 1;
	do{
		total *= num;
		num--;
	}while(num>1);
	console.log(total);
}
test2(10);

//10!  10*9!   9*8!
//有一个函数用来计算阶乘
//test3(num)   num*test3(num-1)
//test3(10)   10*test3(9)
//test3(9)    9*test3(8)
//test3(8)		8*test3(7)
//....
//test3(2)		2*test3(1)
//test3(1)    1
//递归
function test3(num){
	if(num==1){
		return 1;
	}else{
		return num*test3(num-1);
	}
}
//10*9*8*7*6*5...*1
//如果函数内有返回值，注意接收函数内的返回值
var result = test3(10);
console.log(result);



























