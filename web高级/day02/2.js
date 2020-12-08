console.log(a, b, c);
var a = 12,
    b = 13,
    c = 14;
function fn(a) {
    console.log(a, b, c);//10 13 14
    a = 100;
    c = 200;
    console.log(a, b, c);//100 13 200
}
b = fn(10);
console.log(a, b, c);//12 undefined 200


var a = 1;
var obj = {
    name: "tom"
}
function fn() {
    var a2 = a;
    obj2 = obj;
    a2 = a;
    obj2.name = "jack";
}
fn();
console.log(a);//1
console.log(obj);//{name:"jack"}


var a = 1;
function fn(a) {
    console.log(a)
    var a = 2;
    function a() { }
}
fn(a);//a{}




console.log(a); //un
var a = 12;
function fn() {
    console.log(a); //un
    var a = 13;
}
fn(); //un  
console.log(a);//12




console.log(a); //un
var a = 12;
function fn() {
    console.log(a);//12
    a = 13;
}
fn();//un
console.log(a);//13



console.log(a);//a is not a defined
a = 12;
function fn() {
    console.log(a);
    a = 13;
}
fn();
console.log(a);


var foo = 'hello';
(function (foo) {
    console.log(foo);//"hello"
    var foo = foo || 'world';
    console.log(foo);//"hello"
})(foo);
console.log(foo);//"hello"




{
    function foo() { }
    // var foo=function() {};
    foo = 1;
}
console.log(foo);//



{
    function foo() { }
    foo = 1;
    function foo() { }
}
console.log(foo);//



{
    function foo() { }
    foo = 1;
    function foo() { }
    foo = 2;
}
console.log(foo);//

//出错
var x = 1;
function func(x, y = function anonymousl() { x = 2 }) {
    //scope-->EC(G)  this-->window  形参x=5/3/2   y=0002
    x = 3;
    y();
    console.log(x);//2
}
func(5);//un
console.log(x);//1


//出错
var x = 1;
function func(x, y = function anonymousl() { x = 2; }) {
    var x = 3;//
    y();
    console.log(x);//
}
func(5);//
console.log(x);//


//
var x = 1;
function func(x, y = function anonymousl() { x = 2; }) {
    var x = 3;
    var y = function anonymousl() { x = 4 };
    y();
    console.log(x);//4
}
func(5);
console.log(x);//1


var a = 10,
    b = 11,
    c = 12;
function test(a) {
    a = 1;
    var b = 2;
    c = 3;
}
test(10);//un
console.log(a, b, c);//10 11 3



var a = 4;
function b(x, y, a) {
    console.log(a);//3
    arguments[2] = 10;
    console.log(a);//10
}
a = b(1, 2, 3);//un
console.log(a);//un


var a = 9;//2
function fn() {
    a = 0;
    return function (b) {
        return b + a++;
    }
}
var f = fn();
console.log(f(5));//5
console.log(fn()(5));//5
console.log(f(5));//6
console.log(a);//2



var test = (function (i) {
    //i=2
    return function () {
        alert(i *= 2);
    }
})(2);
//test=alert(i *= 2);
test(5);//"4"


var x = 4;//1
function func() {
    return function (y) {
        console.log(y + (--x));
    }
}
var f = func(5);//function(y) -->console.log(y + (--x));
f(6);//9
func(7)(8);//10
f(9);//10
console.log(x);//1


var x = 5,
    y = 6;
function func() {
    x += y;
    func = function (y) {
        console.log(y + (--x));//13
    };
    console.log(x, y);//11 6
}
func(4);
func(3);
console.log(x, y);//10 6

//错了
function fun(n, o) {
    //n 0
    console.log(o);//
    return {
        fun: function (m) {
            return fun(m, n);//
        }
    };
}
var c = fun(0).fun(1);//
c.fun(2);//
c.fun(3);//


// 简述你对闭包的理解，以及其优缺点？
// 形成一个不销毁的上下文(作用域),用来保护内部变量不被污染，保存变量，当函数内声明的引用数据类型被外界占用时，会形成闭包
//缺点：耗性能


// 简述let和var的区别？
// 1.let阻断与window的关系,var在window添加键值对  2.同一上下文，相同的值，let不能重复声明，会报错，var重复声明的话，只声明一次  3.let有暂时性死区，且在运行前会进行词法解析,在声明前用，会报错 

// 下面代码输出的结果是多少，为什么？如何改造一下，就能让其输出 20 10？
//  错
var b = 10;//
(function b() {
    b = 20;
    console.log(b);//
})();
console.log(b);//


//实现函数fn，让其具有如下功能（百度二面）
function fn(a, b) {
    return function (c) {
        return a + b + c
    }
}
let res = fn(1, 2)(3);
console.log(res); //=>6  1+2+3



var num = 10;//65
var obj = {
    num: 20//30
};
obj.fn = (function (num) {
    //this-->window
    //num 23
    this.num = num * 3;
    num++;
    return function (n) {
        this.num += n;
        num++;
        console.log(num);
    }
})(obj.num);
var fn = obj.fn;
fn(5);//22
obj.fn(10);//23
console.log(num, obj.num);//65 30


let obj = {
    fn: (function () {
        return function () {
            console.log(this);
        }
    })()
};
obj.fn();//obj.fn{}
let fn = obj.fn;
fn();//window

var fullName = 'language';
var obj = {
    fullName: 'javascript',
    prop: {
        getFullName: function () {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName());//undefined
var test = obj.prop.getFullName;//
console.log(test());//'language'


var name = 'window';
var Tom = {
    name: "Tom",
    show: function () {
        console.log(this.name);
    },
    wait: function () {
        var fun = this.show;
        fun();
    }
};
Tom.wait();//"window"


window.val = 1;//4
var json = {
    val: 10,//20
    dbl: function () {
        this.val *= 2;
    }
}
json.dbl();//
var dbl = json.dbl;
dbl();//
json.dbl.call(window);//
alert(window.val + json.val);//


(function () {
    var val = 1;
    var json = {
        val: 10,
        dbl: function () {
            val *= 2;
        }
    };
    json.dbl();
    alert(json.val + val);
})();