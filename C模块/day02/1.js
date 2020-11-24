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

console.log(b);//报错 b is not defiend
function fn(){
    b=13;
    console.log(b);
}

fn();//不考虑报错不执行的情况下 13
console.log(b);//不考虑报错不执行的情况下 13


console.log(a,b);//undefined,undefined
var a=12,
b=12;
function fn(){
    console.log(a,b);//undefined,12
    var a=b=13;
    console.log(a,b);//13,13
}
fn();
console.log(a,b);//12,13



var a=12,b=13,c=14;
function fn(a){
   console.log(a,b,c); //12 undefined 14
   var b=c=a=20;
   console.log(a,b,c);//20 20 20
}
fn(a);
console.log(a,b,c);//12 13 20


var ary=[12,13];
function fn(ary){
   console.log(ary);//[12,13]
   ary[0]=100;
   ary=[100];
   ary[0]=0;
   console.log(ary);//[0]
}
fn(ary);
console.log(ary);//[100,13]


var a=2;
function fn(){
   console.log(a);
}
fn();//2
function sum(){
  var a=3;
  fn();
}

sum();//2


console.log(a); //undefined
var a=3;
console.log(window.a);//3
console.log("a" in window);//true


console.log(a); //undefined
var a=3;
b=6;
console.log(window.a);//3
console.log("a" in window);//true
delete window.a;//false
delete window.b;//true


function f2(){
    console.log("f2");
 }
 
  console.log(f1);//报错 f1 is not defined 因为f1在自执行函数中，是私有变量
 
 (function f1(){
    console.log(a);//undefined
    var a=3;
 })();



console.log(num);//undefined
var num = 1;
console.log(num);//1
var num = 2;
console.log(num);//2


fn();//4
function fn(){
    console.log(1);
}
function fn(){
    console.log(2);   
}
fn();//4
function fn(){
    console.log(3);
}
fn=100;
function fn(){
    console.log(4);   
}
fn();//报错 fn() is not a function


function fn(){
    console.log(f2);//"f2"
    return function f1(){
    }
    function f2(){
      console.log("f2")
    }
  }
  fn();



sum();//2
fn();//报错 fn is not a function
var fn=function(){
    console.log(1);
};

function sum(){
    console.log(2);
}

fn();//在不考虑报错下面不执行的情况下，1
sum();//2


var a=0;
if(true){
   a=1;
   function a(){}
   a=21;
   console.log(a);//21是私有变量a的值
}
console.log(a);//1在函数中遇到function后面的都为私有，所以到1截止了


console.log(fn);//undefined
if(1==1){
   console.log(fn);//fn(){console.log("ok")}
   function fn(){
       console.log("ok");
   }
}
console.log(fn)//fn(){console.log("ok")}


f=function(){
    return true;
};
g=function(){
    return false;
};
~function(){
 if(g()&&[]==![]){//到g报错 g is not a function
     f=function(){return false;};
     function g(){
         return true;
     }
 }
}();
console.log(f());
console.log(g());


console.log(a);//undefined
if(a in window){
    var a=100;
}
console.log(a);//100


console.log(a); //undefined
if(1==2){
  var a=12;
}
console.log(a);//undefined


console.log(fn(1,2));//3
function fn(n,m){
    return n+m;
 }
console.log(fn(1,2));//3