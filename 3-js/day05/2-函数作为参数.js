
//形参 形式参数 占位置
function test(obj, fun, c) {
    var a = 'hello';
    console.log(obj.name);
    // a 实参
    fun(a);

    // console.log(a, b, c);
}
//实参 实际参数 真正传进去的值
// test(1, 2);
test(
    {
        name: 'zhangsan',
    },
    //temp 形参
    function (temp) {
        console.log(temp);
    }
);
