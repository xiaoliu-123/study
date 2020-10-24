//打印0-100的偶数
//使用break关键字结束循环
//使用continue关键字结束本次循环，进行下次循环
test:for(var i=0;i<100;i+=2){
	if(i==10){
		continue test;
	}
	console.log(i);
}

console.log('循环结束后i的值：',i);





