'use strict';

var firstname = 'ren';
var lastname = 'terry';
setTimeout(function () {
    firstname = 'zhao';
}, 2000);

module.exports = {
    //对象属性的简写方式  如果属性名和变量名一样的情况下可以简写  
    firstname: firstname,
    lastname: lastname
    // firstname: firstname,
    // lastname: lastname


    // let a = 1;
    // let obj = { a: a };
    // setTimeout(() => {
    //     a = 2;
    //     console.log(obj);
    // })

};