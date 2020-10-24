//876 的百位、十位、个位数值
//获取百位十位个位的函数
//水仙花数 
//找100-1000内的水仙花数
//num是形参，在函数声明的时候写
function test(num){
	//var num = 876;
	var a = parseInt(num/100);  //8
	var b = parseInt(num%100/10);  //7
	var c = num%10;
	console.log(a*a*a+b*b*b+c*c*c == num);	
}
//函数调用的时候传递的参数是实参
test(153);
//循环语句.....










