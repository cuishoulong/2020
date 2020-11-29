//1 编写一个hasOwnPubProperty方法，检测一个属性是不是公有的

//2.原型与原型链

//3.画图
function Fn(){
    var n=100;
    this.A=function(){console.log("私有A")};
    this.B=function(){console.log("私有B")}
 }
 Fn.prototype.A=function(){console.log("公有A")};
 var f1=new Fn();
 var f2=new Fn();
 console.log(f1.A==f2.A);
 console.log(f1.__proto__.A==f2.__proto__.A);
 console.log(f1.__proto__.A==Fn.prototype.A)

 //4.
function Dog(name){
    this.name=name;
}
Dog.prototype.bark=function(){
    console.log("wangwang");
}
Dog.prototype.sayName=function(){
    console.log("my name is"+this.name);
}

let sanmao=new Dog("三毛");
sanmao.sayName();//"my name is 三毛"
sanmao.bark();//"wangwang"

//5

function Dog(name){
    this.name=name;
}
Dog.prototype.bark=function(){
    console.log("wangwang");
}
Dog.prototype.sayName=function(){
    console.log("my name is"+this.name);
}
function _new(fn,name){
//创建一个实例对象
//吧构造函数当做普通函数执行
//this指向创建的实例对象
let obj={
    fn:fn,
    name:name
};
obj.__proto__=Dog.prototype;
return obj;
}
// _new(Dog,"三毛");
let sanmao=_new(Dog,"三毛");
console.dir(sanmao);
sanmao.bark();//"wangwang"
sanmao.sayName();//"my name is三毛"
console.log(sanmao instanceof Dog);//true