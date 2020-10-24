//构造函数  构造函数创建出来的实例都有种类

var sayName = function () {
    console.log(this.name);
}
function Person(name, age, gender) {
    //1.创建实例obj
    //2.this-->obj
    //3.执行函数内的代码
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayName = sayName;
    //4.返回obj
}
var p1 = new Person('zhangsan', 12, '男');
var p2 = new Person('lisi', 10, '女');
console.log(p1, p2);

var result = Person('terry', 20, '男');
console.log(result);  //undefined




