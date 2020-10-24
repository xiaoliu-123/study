
let name = 'zhangsan'
let age = 12
/* let obj = {
     name,
     age
} */
// let { name: n, age: a } = { name, age }

let sayName = () => {
    console.log(this)
};
// sayName();   //this->{}

let obj = {
    name,
    age,
    /* sayName() {
        console.log(this.name);
    } */
    /* sayName: () => {
        //箭头函数内没有自己的this 它指向外部this
        console.log(this)
    } */
    /* sayName() {
        //this->obj
        return () => {
            console.log(this);
        }
    } */
    // sayName
    sayName() {
        return sayName
    }
};
//箭头函数没有自己的this，内部this指向声明时箭头函外部作用域中的this
// obj.sayName();  //this-->{}
obj.sayName()()  //this-->{}

// obj.sayName()()
// console.log(this);



