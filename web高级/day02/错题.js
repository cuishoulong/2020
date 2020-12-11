//1
// 下面代码输出的结果是多少，为什么？如何改造一下，就能让其输出 20 10？
//  错
var b = 10;//
(function b() {
    b = 20;
    console.log(b);//
})();
console.log(b);//

/*
ES6新规则
前提:
1. 函数有形参赋值默认值，不论是否生效，也就是传递值以后不走默认值，都遵循以下规律
2. 函数体中有声明变量[基于let/const/var]，注意，let/const生命的变量是不允许重复声明的，且不能与形参一致，function的不算
规则：
函数执行会产生一个私有的执行上下文[作用域->this->arguments->形参赋值]
它会把函数体中的代码，单独作为一个私有的块级上下文，并且其上级上下文是函数的那个私有上下文
小知识点：如果函数私有上下文中的某变量和块级上下文的某变量一致，则块级上下文的最开始的时候，会把函数上下文中的值同步给块级上下问中同名变量一份

简单概括:
> 如果函数有形参赋值默认值，且在函数体内用(let/var/const)声明变量，不论声明的变量与形参是不是一个，都会开辟两个上下文，且函数先进行变量提升，然后函数体内的内容在私有块级上下文执行，在执行前，会把函数私有上下文中与私有块级上下文中的同名变量拷贝给块级上下文一份
*/

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
    x = 3;
    y();
    console.log(x);//2
}
func(5);//
console.log(x);//1


//为了兼容新老规范,
/* 
1.出现在{}(除了函数和对象外)中的function，在变量提升时候,只声明不定义
2.{}中出现的let/const/function则会产生一个块级上下文[es6]
3.原本变量提升已经处理过了，应该不管了，但是：由于这行代码被EC(G)和EC(B)都宠幸过，所以：浏览器会把当前上下文中，这行代码之前包括本行对本名字(如foo)的所有操作同步给全局中的foo一份，如果有两个foo函数那么在块级作用域里出现几次，同步几次，且同步的是变量提升后的foo，而且是在代码行到了foo当前行以后以后同步，但之后的foo都是私有的
*/
//5
var c=1;
{
    function foo() { }
    foo = 1;
    c = 1;
    function b() { }
    foo = 2;
}
console.log(foo);//
console.log(c);//

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



















var c=1;
{
    function foo() { }
    foo = 1;
    c = 1;
    function b() { }
    foo = 2;
}
console.log(foo);//function(){}
console.log(c);//1
console.log(b);//function(){}



//2
{
    function foo() { }
    foo = 1;
    function foo() { }
}
console.log(foo);//1

//3
{
    function foo() { };
    var foo=function() {};
    foo = 1;
}
console.log(foo);