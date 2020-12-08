//1
// 下面代码输出的结果是多少，为什么？如何改造一下，就能让其输出 20 10？
//  错
var b = 10;//
(function b() {
    b = 20;
    console.log(b);//
})();
console.log(b);//



//2
function fun(n, o) {
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


//3
var x = 1;
function func(x, y = function anonymousl() { x = 2; }) {
    var x = 3;//
    y();
    console.log(x);//
}
func(5);//
console.log(x);//


//4
var x = 1;
function func(x, y = function anonymousl() { x = 2 }) {
    //scope-->EC(G)  this-->window  形参x=5/3/2   y=0002
    x = 3;
    y();
    console.log(x);//2
}
func(5);//un
console.log(x);//1


//5
{
    function foo() { }
    foo = 1;
    function foo() { }
    foo = 2;
}
console.log(foo);//

//6
{
    function foo() { }
    foo = 1;
    function foo() { }
}
console.log(foo);//

//7
{
    function foo() { }
    // var foo=function() {};
    foo = 1;
}
console.log(foo);//