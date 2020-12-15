function fn(x,y){
    console.log(this);
    return x+y;
}
let obj={name:100};
//bind函数执行，形成一个不销毁的作用域，可以保存里面的变量不受外界干扰，还可以让变量一直存在，这样fn和context就一直被保存下来了，
//当以后bind返回的 函数执行的时候就可以拿到fn和context
//所以bind返回的函数里做的就是call做的事
Function.prototype.myBind=function myCall(context,...arg){
    return (...arg1)=> this.call(context,...arg,...arg1)
}
let res=fn.myBind(obj,1,2);
res(3,4);