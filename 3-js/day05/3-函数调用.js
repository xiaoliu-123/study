

var obj = {
    name: 'zhangsan',
    sayThis: function (a, b) {
        console.log(this, a, b);
    }
};
obj.sayThis(1, 2);
//call  更改函数内部this的指向，第一个参数是this指向的对象，第二个参数是函数需要的参数列表
//call(this,参数列表);
obj.sayThis.call({ a: 1 }, 1, 2);
//apply(this,[参数列表]);
obj.sayThis.apply({}, [1, 2]);
//bind方法返回值是更改函数内部this指向的函数，但是该函数并不执行
obj.sayThis.bind({}, 1, 2)();
obj.sayThis.bind({})(1, 2);