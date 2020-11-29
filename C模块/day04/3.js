// 1
var a="lalala";
var obj={
    a:"java",
    prop:{
        fn:function(){
            return this.a;
        }
    }
}
console.log(obj.prop.fn());//undefined
var res=obj.prop.fn;
console.log(res());//"lalala"

// 2
var name = "window";
var tom = {
    name: "tom",
    show: function () {
        console.log(this.name);
    },
    wait: function () {
        //this==>tom
        var fun = this.show;
        fun();//window  函数的this与在哪定义与在哪运行无关，只看前面是否有.
    }
}
tom.wait();//"window"

// 3
var a = 1;//3
    var obj1 = {
        a: 0,  //2
        fn1: (function (a) { 
    //形参赋值 a=1  2  3
    //this==>window
            this.a = a;
//window.a=私有变量a=1
            a++;
//私有变量a++;a=1+1;2
            return function () {
    //this==>obj1
    //this==>window
                this.a = a++;
//obj1.a=上级私有的a=2    上级的a自身累加 a=a+1=2+1=3
//window.a=上级私有的a=3   上级的a自身累加 a=a+1=3+1=4
                console.log(a)//输出上级的a=3    a=4
            }
        })(a)
    };
    obj1.fn1();  //3
    var fn1 = obj1.fn1;   
    fn1(); //4
    console.log(a);console.log(obj1.a);//3 2

//4
var num =1;  //2 4
    var obj = {
        num : 2,//4
        fn : (function () {
    //this==>window
    //变量提升var num 1  3  4  6 7
            this.num *= 2;
//window.num=window.num*2=2
            num +=3;
//自身的num现在为undefined 所以 num=undefined+3=NaN
            var num =1;
//自身私有变量赋值num=1  
            return function () {
    //this==>window
    //this==>obj
                    num +=2;
//num自身没有向上级作用域查找 num=num+2=3
//同上 num=num+2=4+2=6
                    this.num +=2
//window.num=window.num+2=2+2=4
//obj.num=obj.num+2=2+2=4
                    console.log(++num);
//++num是上级作用域的num,num+1=4
//同上 num=num+1=6+1=7
            }
        })()
    };
    var f= obj.fn;
f();//4
obj.fn();//7
console.log(window.num,obj.num);//4 4


//5
var num = 10; //20 30
    var obj = {num: 15};//30
    obj.fn = (function (num) { 
    //this==>window
    //形参赋值num=15   30    29  28
        this.num += 10;
//window.num=window.num+10=20
        num *= 2;
//私有变量num=num*2=30
        return function (n) {
    //this==>window
    //形参赋值n=10

    //this==>obj
    //形参赋值n=15
            this.num += n;
//window.num=window.num+n=25+10=35
//obj.num=obj.num+n=15+15=30
            console.log(n + (--num));
//这里的num是上级作用域的,因为是--num所以先自身-为29，然后进行计算,10+29=39
//同上  num=28   15+28=43
        }
    })(obj.num);
    var fn = obj.fn;
    fn(10);  //39
    obj.fn(15);//43
    console.log(window.num, obj.num);//30 30

//6
window.val=1;//2 4
var json={
    val:10,//20
    dbl:function(){
        //this==>json
        //this==>window
        //this==>window
        this.val*=2;
        //json.val=json.val*2=20
        //window.val=window.val*2=2
        //window.val=window.val*2=4
    }
}
json.dbl();
var dbl=json.dbl;
dbl();
json.dbl.call(window);
alert(window.val+json.val);//先进行数学运算，4+20=24，alert输出字符串"24"

//7
(function(){
    var val=1;
    var json={
        val:10,
        dbl:function(){
            //this==>json
            val*=2;
            //val是变量，自己没有，向上查找，因为json.val是属性名，所以继续向上查找，找到window.val，然后*2=2
        }
    }
    json.dbl();
    alert(json.val+val);//先进行数学运算，10+2=12，alert输出字符串"12"
})()


//8
var b = {
    a: 23,
    c: 3,
    d: {
        a: 78,
        e: {
            a: 100,
            f: function () {
                // this==>window
                //this==>b.d.e
                console.log(this.a);
                //window.a,全局没有window.a，我的理解为window是个对象,对象里面没有属性名，就输出为undefined
                //b.d.e.a=100
            }
        }
    }
}
var fn = b.d.e.f;
fn();//undefined
b.d.e.f();//100

//9
var $ = {
    fn:function(){
        console.log(1);
    },
    fn2:function(){
        console.log(2);
    }
}
$.fn().fn2();//报错