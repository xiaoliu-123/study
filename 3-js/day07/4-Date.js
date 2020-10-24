//时间
//获取当前时间
var date = new Date();
console.log(date);

//调用函数
console.log(parseDate(date));
function parseDate(date) {
    var year = date.getFullYear();
    //获取月，返回0-11，所以后面+1
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    // console.log(year, month, day, hours, minutes, seconds);
    return year + '-' + addZero(month) + '-' + addZero(day) + ' ' + addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
}

function addZero(num) {
    return num < 10 ? '0' + num : num;
}