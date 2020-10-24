
//打印1-100
/*for(var i=1;i<=100;i++){
	console.log(i);
}*/
//计算1-100和
var sum = 0;
for(var i=1;i<=100;i++){
	sum += i;
}
console.log(sum);
//计算阶乘  10=10*9*8*7*6....*1=3628800;
function test(num){
	var str = '10=';
	var sum = 1;
	for(var i=num;i>0;i--){
		sum *= i;
		if(i==1){
			str += i+'=';
		}else{
			str += i+'*';
		}
	}	
	console.log(str+sum);
}
//test(10);

//水仙花数  100-1000  内的水仙花  153 =1*1*1+5*5*5+3*3*3
function test1(){
	var count = 0;
	for(var i=100;i<1000;i++){
		var a = parseInt(i/100);
		var b = parseInt(i%100/10);
		var c = i%10;
		if(a*a*a+b*b*b+c*c*c == i){
			count++;
			console.log(i);
		}
	}
	console.log('count:',count);
}
//test1();
//99乘法表
//1*1=1
//1*2=2  2*2=4
//1*3=3  2*3=6  3*3=9
//...
//1*9=9  2*9=18 3*9=27 .... 9*9=81 
function test2(){
	for(var i=1;i<10;i++){
		var str = '';
		for(var j=1;j<=i;j++){
			str += j+'*'+i+'='+(i*j)+'\t';
		}
		console.log(str);
	}
}
test2();

























