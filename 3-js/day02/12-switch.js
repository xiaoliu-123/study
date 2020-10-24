//大小写转换  1 2 3 4 5
function test(num){
	switch(num){
		case '1':
			console.log('壹');
			// break 跳出switch语句
			break;
		case '2':
			console.log('贰');
			break;
		case '3':
			console.log('叁');
			break;
		//如果以上条件都不满足，走default
		default:
			console.log('其他');
			break;
	}	
}
test('2');



