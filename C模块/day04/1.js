var a=4;
function b(x,y,a){
  console.log(a);
  arguments[2]=10;
  console.log(a);
}
a=b(1,2,3);
console.log(a)

var foo="hello";
(function(foo){
  console.log(foo);//"hello"
  var foo=foo||"word";
  console.log(foo);//"hello"
})(foo);
console.log(foo);//"hello"

var a=9;
function fn(){
  a=0;
  return function(b){
     return b+a++;
  }
}
var f=fn();
console.log(f(5));//5
console.log(fn()(5));//5
console.log(f(5));//6
console.log(a);//2

function fn(i){
    return function (n){
       console.log(n+(++i));
    }
 }
 var f=fn(10);
 f(20);//31
 fn(20)(40);//61
 fn(30)(50);//81
 f(30);//42

 var i=10;
function fn(){
   return function(n){
      console.log(n+i++);
   }
}
var f=fn();
f(20);//30
fn()(20);//31
fn()(30);//42
f(30);//43


 var i=10;
function fn(){
   return function(n){
      console.log(n+(++i));
   }
}
var f=fn();
f(20);//
fn()(20);//
fn()(30);//
f(30);//


var ary=[1,2,3,4];
function fn(ary){
   ary[0]=0;
   ary=[0];
   ary[0]=100;
   return ary;
}
var res=fn(ary);
console.log(ary);//[0,2,3,4]
console.log(res);//[100]

var num=10;
var obj={num:20};
obj.fn=(function(num){
   this.num=num*3;
   num++;
   return function(n){
       this.num+=n;
       num++;
       console.log(num);
   }
})(obj.num);
var fn=obj.fn;
fn(5);
obj.fn(10);
console.log(num,obj.num)

