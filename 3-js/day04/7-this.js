function test() {
    console.log(this);  //this-->globle全局对象   浏览器this-->window对象

}
//test();

var obj = {
    name: 'zhangsan',
    sayName: function () {
        console.log(this);  //obj     谁调用sayName，this就是谁
        console.log(this === obj);  //true
        console.log(this.name);   //zhangsan
    },
    test: test,
};
obj.sayName();   //this-->obj
console.log('---------------1------------------');
obj.test();      //this-->obj
console.log('----------------2-----------------');
test();          //this-->globle



