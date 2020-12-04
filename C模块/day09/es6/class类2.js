//老式的
function fn(a,b){
    this.a=b;
    this.b=a;
};
fn.prototype.getA=function(){
    console.log("getA");
}
var fn1=new fn();




class Fn{
    //constructor相当于老版的构造函数类,用来给实例赋值的,可以接受传参
    constructor(a,b){
        this.a=a;
        this.b=b;
        // this.c=100;
    }
    //在ES7中支持此语法，等同于在constructor中创建的this.c=100;不过只限与有确定值的量
    //变量=任意值 代表的是在实例上添加私有属性
    c=100;

    //原型上的"公共方法",只能是方法，公共属性不能这样写
    //原型上的公共属性还得用老办法 Fn.prototype.d=1;这样写而且要写在{}外面
    getA(){
        console.log("getA");
    }

    //把其当成"普通对象"设置属性和方法(也可以称之为静态的属性和方法),要与static来声明
    static getB={name:"li",age:11};
    static f=10;
}
//extends是继承其他类的私有属性的
//配套的要在自己的constructor中加super()
class An extends Fn{
    constructor(){
        super();
        this.g=1;
        this.p=2;
    }
}
let a1=new An();
console.log(a1);


let fn1=new fn(9,8);
Fn.prototype.d=1;


fn();//Class constructor fn cannot be invoked without 'new'   class类不能当成普通函数执行
