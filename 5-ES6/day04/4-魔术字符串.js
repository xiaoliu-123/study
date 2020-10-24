
let obj = {
    attr1: Symbol('one'),
    attr2: Symbol('two'),
    attr3: Symbol('three'),
    attr4: Symbol('four'),
}
function test(param) {
    switch (param) {
        case obj.attr1:
            console.log('这是one的操作');
            break;
        case obj.attr2:
            console.log('这是two的操作');
            break;
        case obj.attr3:
            console.log('这是three的操作');
            break;
        default:
            console.log('默认的操作');
            break;
    }
}
test(obj.attr2);









