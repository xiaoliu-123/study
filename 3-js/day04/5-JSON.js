//json
var obj = {
    name: 'zhangsan',
    age: 12
};
//序列化
var jsonStr = JSON.stringify(obj);
console.log(jsonStr);
//JSON字符串 将对象中的字符串使用双引号包裹

//将JSON字符串转成JS对象
var str = '{"name":"zhangsan","age":12}';
console.log(JSON.parse(str));
console.log(JSON.parse(jsonStr));
