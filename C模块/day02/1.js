function fn(x) {
    return function (y) {
        return x + y;
    }
}
fn(1)(2);//3
//第一个值是x,第二个值是y


console.log(a); //undefined
if (1 == 2) {
    var a = 12;
}
console.log(a);//undefined


console.log(a);//undefined
if (a in window) {
    var a = 100;
}
console.log(a);//100

f = function () {
    return true;
};
g = function () {
    return false;
};
~function () {
    if (g() && [] == ![]) {//报错g()is not defined
        f = function () { return false; };
        function g() {
            return true;
        }
    }
}();
console.log(f());
console.log(g());

var a = 0;
if (true) {
    a = 1;
    function a() { }
    a = 21;
    console.log(a);
}
console.log(a);

console.log(fn);//undefined
console.log(fn(1, 2));//报错
var fn = function (n, m) {
    return n + m;
}
console.log(fn(3, 4));

function fn(){
    console.log(f1);
    return function f1(){

    }
    function f2(){
        console.log("f2");
    }
}
fn();//报错

function fn(){
    console.log(f2);
    return function f1(){

    }
    function f2(){
        console.log("f2");
    }
}
fn();//"f2"