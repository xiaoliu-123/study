function Animal(type, age, weight, length) {
    this.type = type;
    this.age = age;
    this.weight = weight;
    this.length = length;
}
// Animal.prototype.say = function(){} 
Animal.prototype = {
    constructor: Animal,
    sayType: function () {
        console.log(this.type);
    }
};

function Dog(type, age, weight, length, name, color) {
    //构造函数继承，经典继承
    Animal.call(this, type, age, weight, length);
    this.name = name;
    this.color = color;
}
//Dog的原型对象
//原型链继承
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
Dog.prototype.sayColor = function () {
    console.log(this.color);
};
var dog = new Dog('狗', 1, '10kg', '70cm', '可乐', '白色');
console.log(dog);
dog.sayColor();
dog.sayType();
//没有sayName(), dag.sayName undefined
dog.sayName();