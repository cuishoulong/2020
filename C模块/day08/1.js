function fn1(){
    console.log(1);
}
function fn2(){
    console.log(2);
}
fn1.call(fn2);//1
fn1.call.call(fn2);//2
Function.prototype.call(fn1)//没效果
Function.prototype.call.call(fn1)//1

Object.prototype.toString.call(1);//"[object Number]";
toString.call(1);//"[object Number]";