//方法1
//每次查找到就会执行，相当于a.ValueOf();,this为a
var a = {
    i: 0,
    valueOf: function () { return ++this.i }
}
//方法2
//每次查找到就会执行，相当于a.[Symbol.toPrimitive]();this为a
var a = {
    i: 0,
    [Symbol.toPrimitive]: function () { return ++this.i }
}
//方法3
//每次查找到就会执行，相当于a.toString();this为a
var a = {
    i: 0,
    toString: function () { return ++this.i }
}
if (a == 1 && a == 2 && a == 3) {
    console.log("ok");
}
//方法4
//重写toString属性，使他等于shift
var a = [1, 2, 3]
a.toString = a.shift;
if (a == 1 && a == 2 && a == 3) {
    console.log("ok");
}


var a = {
    n: 1
};
var b = a;
a.x = a = {//运算符优先级 先a.x={n:2}   再a={n:2}
    n: 2
}
console.log(a.x);//undefined
console.log(b);//{n:1,x:{n:2}}

let a=0,b=0;
function A(a){
    A=function(b){
        alert(a+b++);
    }
    alert(a++);
}
A(1);
A(2);