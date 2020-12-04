class A{
    //既不是对象也不是函数
    constructor(name){
        this.a=1;
        this.b=2;
    }
    getA(){
        console.log("getA");
    }
    //给实例添加私有属性
    f=300;

    static a=600;
}
var b=new A();
console.log(b);//{f: 300, a: 1, b: 2}


class B extends A{
    //既不是对象也不是函数
    constructor(name){
        super();//相当于call继承
        this.a=1;
        this.b=2;
    }
    getA(){
        console.log("getA");
    }
    //给实例添加私有属性
    f=300;

    static a=600;
    //通过super可以拿到原型上的方法
    fn(){
        super.getA();
    }
}

let fn=b=>console.log(1);
var ad=new fn();// fn is not a constructor










class A{
    //不是块级作用域，也不是对象 
    
}

