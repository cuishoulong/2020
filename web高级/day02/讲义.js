/* 
arguments在函数传参的时候执行,只关联传的参数,如下只有arguments[0]与a关联
*/
function fn(a,b){
    arguments[0]=10;
    arguments[1]=20;
    console.log(a);//10
    console.log(b);//undefined
}
fn(1);
/* 
闭包的理解，以及优缺点
*/





/* 
匿名函数“具名化”,特点
那个函数名不能修改，不论如何修改，都不改变
且这个名字不会进行变量提升，属于私有的，只能在匿名函数内部获取到
但是如果重新声明了，那么再输出就不是函数了，两者不冲突
*/
var b=10;
(function b(){
    b=20;
    console.log(b);
})();
console.log(b);

Array.prototype.myReduce=function reduce(callback,initial){
    if(typeof callback!=="function")throw new TypeError('callback must ba a function!')//自己报错误;
}
let total=[1,2,3];
let arr=total.myReduce((result,item,index)=>result+item);
console.log(arr);