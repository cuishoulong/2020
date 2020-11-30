//原型拓展
function Fn(name,age){
    this.name=name;
    this.age=age;
}
Fn.prototype.sayFn=function(){
    alert("姓名"+this.name+"年龄"+this.age);
}
Fn.prototype.myPush=function(item){
    this[this.length]=item;
}
var f1=new Fn("丽丽",18);
f1.sayFn();
f1.myPush(12);
console.log(f1);


Array.prototype.myPush=function(){
    for(var i=0;i<arguments.length;i++){
        // this[this.length]=arguments[i];
        // this.splice(this.length,0,arguments[i]);
        this.splice(this.length,1,arguments[i]);
    }
    return this.length;
}
var ary=[1,2,3];
console.log(ary.myPush(4,5,6,7));//返回数组长度7
console.log(ary);//新数组[1,2,3,4,5,6,7]


//想要实现一个需求：
//var ary=[5,8,2,1,10] ；想要让这个数组先排序，然后再倒序，然后再往里面添加一个10，然后再删除第一项；
var ary=[5,8,2,1,10];
ary.sort(function(a,b){return a-b}).reverse().push(10);//因为push返回值是10所以不能继续
ary.shift();
console.log(ary);



function Fn(){
    this.x=100;
  }
  Fn.prototype.getX=function(){
    return this.x;
  }
  var f1=new Fn();
  Fn.prototype={
     //consturctor:Fn,
     getY:function(){
        return this.x
     }
  };
  var f2=new Fn();
  console.log(f1.getX());
  console.log(f2.getX()); // 报错
  console.log(f1.constructor); 
  console.log(f2.constructor); // Object


Object.prototype.myHasOwnProperty=function(item){return item in this&&!this.hasOwnProperty(item)?true:false;}
var str={name:"1"};
str.myHasOwnProperty("name");
[1,2,3].myHasOwnProperty("length");
// [1,2,3].hasOwnProperty("length");

function fn(x){
    this.x=x;
}
var f1=new fn(2);//false
function fn1(){
    var x=1;
}
fn1.myHasOwnProperty("x");//false



function Fn(x,y){
    var total=x+y;
    this.a=x;
    this.b=y;
    this.total=total;
  }
  
  Fn(); // 当成普通函数执行
  
  var f1=new Fn(1,2); // 构造函数
  Fn.age=12;
  Fn.myName="lili"; // 普通的对象
  console.log(Fn.age);//12
  console.log(f1.age);//undefined
  



function Fn() {
    let a = 1;
    this.a = a;
}
Fn.prototype.say = function () {
    this.a = 2;
}
Fn.prototype = new Fn;
let f1 = new Fn;

Fn.prototype.b = function () {
    this.a = 3;
};
console.log(f1.a);//1
console.log(f1.prototype); //undefined
console.log(f1.b);//function(){this.a=3};
console.log(f1.hasOwnProperty('b'));//false
console.log('b' in f1);//true
console.log(f1.constructor == Fn);//true



function Foo(){
    getName=function(){
      console.log(1);
    };
    return this;
}
Foo.getName=function(){
    console.log(2);
}
Foo.prototype.getName=function(){
    console.log(3);
}
var getName=function(){
    console.log(4);
}
function getName(){
    console.log(5);
}
Foo.getName();//2
getName(); //4
Foo().getName();//1
getName();//1
new Foo.getName();//{}  2
new Foo().getName();// {}  3先算new Foo再算.getName
new new (Foo().getName());//{} 3


function fun(){
    this.a=0;
    this.b=function(){
        alert(this.a);
    }
}
fun.prototype={
    b:function(){
        this.a=20;
        alert(this.a);
    },
    c:function(){
        this.a=30;
        alert(this.a)
    }
}
var my_fun=new fun();
my_fun.b();//"0"
my_fun.c();//"30"



function C1(name) { 
    //name=undefined
    if (name) {
        //没有进入
        this.name = name;
    }
}
function C2(name) { 
    this.name = name;
}
function C3(name) { 
    this.name = name || 'join';
}
C1.prototype.name = 'Tom'; 
C2.prototype.name = 'Tom'; 
C3.prototype.name = 'Tom'; 
alert((new C1().name) + (new C2().name) + (new C3().name));//"Tom"+undefined+"join"


function Fn(num) {
    this.x = this.y = num;
}
Fn.prototype = {
    x: 20,
    sum: function () {
        console.log(this.x + this.y);
    }
};
let f = new Fn(10);//f={x:10,y:10}
console.log(f.sum === Fn.prototype.sum);//true
f.sum();//20
Fn.prototype.sum();//NaN
console.log(f.constructor);//Object