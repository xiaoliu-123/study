//实例的属性和方法，包含本身的属性和方法，还包含原型中的属性和方法
var obj = {
    name: 'zhangsan',
    age: 12,
    sayHello: function () {
        // console.log('hello');
        return 'hello';
        //return之后的代码是不执行的
        //console.log('----------');   

        /*  if (a) {
              console.log(1);
              return 1;
          } else {
              console.log(2);
              return 2;
          } */
    }
};
//obj.sayHello拿到的是function，加个()可以执行function
var result = obj.sayHello();
console.log(result);



