//!!   Boolean()  转换效果是一样的

console.log(!!2);
console.log(Boolean(2));

console.log(!!undefined);     //false
console.log(Boolean(null));  //false
console.log(!!0);
console.log(!!NaN);
console.log(!!'');     //false
console.log(!!" ");    //true

console.log(!!{});   //true



