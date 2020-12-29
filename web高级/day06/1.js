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

/* 
深浅克隆
浅克隆：新开辟一个堆内存，只克隆表面，但其中引用数据类型的引用地址相同    展开运算符，循环，Object.assign
深克隆 新开辟一个堆内存，从头到尾全部重新开辟空间     
JSON.parse(JSON.stringify())过程是先转json格式字符串，再转引用数据类型
有缺陷：如果是 值是正则/Math，那正则那一项会转为空{},如果为Symbol/函数/undefined，那么会直接删除当前项，如果为bigint那么会报错,日期对象会变为字符串

 */
let obj1={
    a:1,
    b:2,
    c:{
        d:1
    }
}
let obj2=Object.assign({},obj1);
console.log(obj2===obj1);
console.log(obj2.c===obj1.c);


/* 封装一下 */
// 获取所有的私有属性，包含Symbol私有属性
function getOwnPropertys(obj){
    if(obj==null)return[];//排除undefined和null
    return[
        ...Object.keys(obj),
        ...Object.getOwnPropertySymbols(obj)
    ]
}
/* 浅克隆 */
function shallowClon(obj){
    //只处理对象和数组
    let keys=getOwnPropertys(obj),
    clone={};
    Array.isArray(obj)?clone=[]:null;
    keys.forEach(key=>{clone[key]=obj[key]})
    return clone;
}

/* 浅比较
Object.assign，直接替换相同的
*/
/* 封装实现合并 */
