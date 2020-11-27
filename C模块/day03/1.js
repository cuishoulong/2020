let a = 1;
var a = 1;//报错

let a = 10;
let b = 10;
let fn = function () {
    console.log(a);
    let a = b = 20;
    console.log(a, b);
}
fn();
console.log(a, b);

function A() {
    function B() {
        function C() {

        }
    }
}


var n = 10;
function fn() {
    var n = 20;
    function f() {
        n++;
        console.log(n);
    }
    f();//21
    return f;
}
var x = fn();//21 x=f(){n++;console.log(n)};
x();//22 
x();//23
console.log(n);//10


function fn(i) {
    return function (n) {
        console.log(n + (++i));
    }
}
var f = fn(2);
f(3);//6
fn(5)(6);//12
fn(7)(8);//16
f(4)//8


function fn(i) {
    return function (n) {
        console.log(n + (i++));
    }
}
var f = fn(2);
f(3);//5
fn(5)(6);//11
fn(7)(8);//15
f(4)//7


var utils = (function () {
    var num = 0;
    function fn1() {
        console.log(1)
    }
    return {
        fn1: fn1
    }
}
)()
console.log(utils.fn1);

(function(){
    function jquery(){
    }
    //把jquer 这个方法通过window添加属性暴漏到全局
    window.jquery=window.$=jquery;
})()