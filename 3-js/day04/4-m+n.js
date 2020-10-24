
console.log('hello' + 1);  //'hello1'
console.log(true + 1);   //2
console.log(null + 1);    //1
console.log(undefined + 1);  //NaN
console.log('hello' + undefined);  //'helloundefined'

var obj = {
    toString: function () {
        return '123';
    },
    /*    valueOf: function () {
            return 123;
        }
        */
};
console.log(obj + 1);  //对象既没有重写valueOf也没有重写toString,调用原型中的toString  [object Object]1
                        //如果对象重写了valueOf，用valueOf返回值 123+1 = 124
                        //如果对象只有重写了toString，用toString返回值 ‘123’+1 = 1231





