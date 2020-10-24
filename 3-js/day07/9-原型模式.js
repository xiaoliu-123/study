//原型模式  属性和方法都在原型中
function Person() { }
Person.prototype = {
    constructor: Person,
    name: 'tom',
    age: 12,
    gender: '男',
    friends: [],
    sayName: function () {
        console.log(this.name);
    }
};
//上面把属性和方法写在原型中，创建p1,p2实例时，p1和p2实例的属性和方法也会一样，即它们有同样的名字、年龄...
var p1 = new Person();
var p2 = new Person();
p1.friends.push('lili');
console.log(p1.friends);
console.log(p2.friends);