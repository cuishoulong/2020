let n = 10;
let m = n.plus(10).minus(5);
console.log(m);//=>15（10+10-5）


//只要名字相同，直接替换
function fn(){

};
fn.prototype.a=function(){
    console.log(1)
};
fn.prototype.b=10;
let obj={b:{a:20}}
fn.prototype=Object.assign(obj,fn.prototype)
console.dir(fn.prototype)


let obj1={n:10,m:20};
let obj2={a:44,m:{p:9}};
let obj=Object.assign(obj1,obj2);
console.log(obj===obj1)//true
console.log(obj)//{n: 10, m: {…}, a: 44}
console.log(obj1)//{n: 10, m: {…}, a: 44}
//改变第一个原来的

function fn(){

}
let a={};
a.__proto__=new fn;
fn.prototype=a;


/* 
for in循环遍历的机制

优先遍历数字属性，而且按照从大到小的顺序遍历，数字遍历完，再去遍历其他的
无法遍历Symbol的私有属性
遍历所有类原型上自定义的属性和方法，遍历可枚举属性，共有属性方法中自定义的是可枚举的

解决方法Object.keys(obj)返回不包含Symbol的属性
Object.
*/
for(let key in obj){

}


Object.prototype.hasPubProperty=function hasPubProperty(attr){

}