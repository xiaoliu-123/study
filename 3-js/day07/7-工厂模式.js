//工厂模式  封装创建对象的函数，创建出来的对象都是Object类型，，无法区分种类。注意方法的冗余问题，可以提供公共的方法解决方法冗余问题。

var sayName = function () {
    console.log(this.name);
}
function person(name, age, gender) {
    return {
        name: name,
        age: age,
        gender: gender,
        sayName: sayName,
        //容易造成内存浪费,所以写到全局中去
        /*sayName: function () {
            console.log(this.name);
        }*/
    }
}
var p1 = person('zhangsan', 12, '男');
console.log(p1);
p1.sayName();
var p2 = person('lisi', 10, '女');
//判断p1和p2的sayName是不是同一个函数
console.log(p1.sayName() === p2.sayName());

function dog(name) {
    return {
        name: name,
    }
}
var d1 = dog('可乐');
console.log(d1);

