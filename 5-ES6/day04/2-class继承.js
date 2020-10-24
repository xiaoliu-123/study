class Animal {
  static animalAttr = 'Animal的静态属性'
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight
    console.log('Animal的构造器')
  }
  sayName() {
    console.log('Animal中的实例方法', this.name)
  }
  static animalMethod() {
    console.log('Animal的静态方法')
  }
}
class Dog extends Animal {
  constructor(name, age, weight, color) {
    super(name, age, weight);
    this.color = color;
    console.log('这是Dog构造器')
  }
}
let dog = new Dog('qwe', 1, 10, 'white');
//继承  子类原型对象继承父类原型对象
dog.sayName();
//继承  子类对象继承自父类对象
Dog.animalMethod();
console.log(Dog.animalAttr);

console.log(Object.getPrototypeOf(Dog));
console.log(Object.getPrototypeOf(Dog.prototype));
console.log(Dog.__proto__ === Animal);
console.log(Dog.prototype.__proto__ === Animal.prototype);