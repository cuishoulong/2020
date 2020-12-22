/* 
this都是对象，严格模式下会出现原始值
*/
/* 
Array的原型是一个类数组对象，Array.isArray(Array.prototype)//true    Array.prototype instanceof Array//false
*/

/* 
Function的原型是一个匿名空函数，执行结果是undefined，
且没有prototype
但是有bind,apply,call
*/
const checkVal=val=>{
    val=+val;
    return isNaN(val)?0:val;
}
Number.prototype.puls=function puls(val){
    checkVal(val);
    return this+val
}
Number.prototype.minus=function minus(val){
    checkVal(val);
    return this-val
}
let n=10;
let m=n.puls(10).minus(5);//15
console.log(m)