//1
var ary = [];
function A() {
    for (var i = 0; i < arguments.length; i++) {
        ary[i] = arguments[i];
    }
}
A(1, 2, 3, 10, 9);
console.log(ary);


//2
var ary = [];
function A() {
    arguments.__proto__ = Array.prototype;
    arguments.forEach(function (item, index) {
        ary.push(item);
    });
}
A(1, 2, 3, 10, 9);
console.log(ary);

//3
// Array.from(类数组)   将类数组转换为数组
var ary = [];
function A() {
    ary = Array.from(arguments);
}
A(1, 2, 3, 10, 9);
console.log(ary);

//4
var ary = [];
function A() {
    ary = [...arguments];
}
A(1, 2, 3, 10, 9);
console.log(ary);