//组合模式 （构造函数模式和原型模式的组合）
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.friends = [];
}
Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name);
    },
    sayAge: function () {
        console.log(this.age);
    }
}
var p1 = new Person('zhangsan', 12, '男');
var p2 = new Person('lisi', 10, '女');
console.log(p1, p2);
p1.friends.push('tom');
console.log(p1, p2);
console.log(p1.sayName === p2.sayName);