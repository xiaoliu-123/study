var obj = {
    name: 'zhangsan',
    age: 12

};
console.log(obj);
Object.defineProperties(obj, {
    name: {
        enumerable: false,
    },
    age: {
        enumerable: false,
    },
    //访问器属性
    weight: {
        get: function () {
            return 20;
        },
        set: function (weight) {
            console.log(weight);
        }
    }
})
console.log(obj);
//获取属性特性
var desc = Object.getOwnPropertyDescriptor(obj, 'name');
var desc2 = Object.getOwnPropertyDescriptor(obj, 'weight');
var desc3 = Object.getOwnPropertyDescriptor(Object.prototype, 'toString');
console.log(desc, desc2, desc3);
//getOwnPropertyDescriptor

