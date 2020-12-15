var name = 'WINDOW';
function A() {
    console.log(1, this.name);
    name = this.name;
};
function B() {
     name = this.name;
    console.log(2, this.name);
};
A.call(B, 10);//1 "b"
A.call.call.call(B);//2 "b"
Function.prototype.call(B);//
Function.prototype.call.call.call(B);


Object.prototype.myCall=function myCall(pointer,...arg){
    pointer=pointer||window;
    pointer[this]=this;
    let b=pointer[this](arg);
    delete pointer[this];
    return b;
}
let obj={
    b:1
};
let a=function(){
    console.log(this.b);
}
a.myCall(obj);

function fun(n,o){//0 un/1 0/2 1
    console.log(o);//un 0 1 1
    return{
        fun:function(m){//1 2 3
            return fun(m,n);//1 0/2 1
        }
    }
}
var c=fun(0).fun(1);
c.fun(2);
c.fun(3);