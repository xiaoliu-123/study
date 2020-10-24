//创建一个类  
class Person {
    //静态属性
    static attr = 'hello';
    //实例私有属性
    // test1 = [];
    //实例属性,原型对象内的公共属性
    //构造器,默认有一个，可以显示提供
    constructor(name, age, test1) {
        //实例属性
        this.name = name;
        this.age = age;
        this.test1 = test1;
    }
    //实例方法-->原型对象中的方法   方法之间不需要逗号分隔
    sayName() {
        console.log(this.name)
    }
    //静态方法
    static isPerson(obj) {
        return obj instanceof Person;
    }
}
//静态属性
// Person.attr = 'hello';
let p = new Person('zhangsan', 12);
console.log(p);
p.sayName();
let result = Person.isPerson(p);
let result2 = Person.isPerson({});
console.log(result, result2);
console.log(p instanceof Object);
// 子类如果继承了父类，子类的实例是自己的实例也是父类的实例
console.log(Person.attr);
//修改实例的属性
let p2 = new Person('lisi', 15);
// p.test1.push('tom');
console.log(p);
console.log(p2);
console.log(p.sayName === p2.sayName);
console.log(p.test1 === p2.test1);

//实例属性和实例方法通过实例调
//静态属性和静态方法通过类调
