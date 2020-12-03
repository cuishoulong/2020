Array.prototype.myPush=function(){
    for(var i=0;i<arguments.length;i++){
        this[this.length]=arguments[i]
    }
    return this.length;
}
[1,2,3].myPush(4,5,6);


//原型继承
function A(){
    this.a="a";
}
A.prototype.getA=function(){
    console.log(this.a);
}
function B(){
    this.b="b";
}
B.prototype=new A();
var b=new B();
console.log(b);//"b"


//中间类继承
//想要让B的实例继承A的私有属性，我们可以在B的函数体中执行A，并且利用call，把里面的this指向B的实例
function fn(){
    arguments.__proto__=Array.prototype;
    arguments.sort(function(a,b){
        return a-b;
    })
    return arguments;
}
fn(8,2,1,9);//Arguments(4) [1, 2, 8, 9, callee: ƒ, Symbol(Symbol.iterator): ƒ]

//call继承
function A(){
    this.a="a";
    this.x=100;
}
function B(){
    //此时的this是b1
    A.call(this);
    this.b="b";
    this.y=200;
}
var b1=new B();

//寄生组合继承：A类、B类，B类想要继承A类的私有和公有

function A(){
    this.a="a";
    this.x=100;
}
function B(){
    this.b="b";
    this.y=200;
    A.call(this);
}
A.prototype.getA=function(){
    console.log(this.a);
}
B.prototype=new A();   
var b1=new B();
console.log(b1);
b1.getA();







//寄生组合继承：A类、B类，B类想要继承A类的私有和公有
function A(){
    this.a="a";
    this.x=100;
}
A.prototype.getA=function(){
    console.log("A");
}
function B(){
    A.call(this);
    this.b="b";
    this.y=200;
}
var obj=Object.create(A.prototype);
B.prototype=obj;
var b1=new B();
console.log(b1.getA);