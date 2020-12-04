// JSON的方法
var obj={name:"li",age:10};
var obj3=JSON.stringify(obj);//JSON.parse(普通对象),将普通对象转换为JSON对象 
var obj2=JSON.parse(obj3);//将json对象转为普通对象
console.log(obj3,obj2);
// 深克隆
var obj={name:"li",age:10};
var obj2=JSON.parse(JSON.stringify(obj));//生成一个与原来一模一样，但毫不相关的对象

// class类
class Fn{
    //既不是块级作用域，也不是对象

    //constructor可以理解为是老式的构造函数 的函数类,是给实例赋值私有属性的
    constructor(a){
        this.a=a;
    }
    //在class中=是给实例赋值私有属性的
    c=2;//是给实例上添加了c:2

    getA(){
        //这个是类原型上的公有属性
    }

    //想把它当成对象添加私有属性要用static
    static a=12;
    static fn=function(){};
}
//继承要加上extends  且在constructor中添加super(),这样An()的实例就会有Fn的私有属性
class An extends Fn{
    constructor(){
        super()
    }

};
let a1=new An();
// An();class的类不能当成正常函数执行