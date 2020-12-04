var obj='{"name":"li","age":10}';
var res=JSON.parse(obj);//JSON.parse(json格式的属性)   转为普通对象
console.log(res);//{ name: 'li', age: 10 }
console.log(obj.name);//undefined

var obj2=JSON.stringify(res);//JSON.stringify(普通对象)   普通对象转为JSON格式
console.log(obj2);//"{"name":"li","age":10}"



var obj={name:"li",age:10,aa:{c:100}};
var obj2={};
for(var key in obj){
    obj2[key]=obj[key];
}
console.log(obj,obj2);//{ name: 'li', age: 10, aa: { c: 100 } } { name: 'li', age: 10, aa: { c: 100 } }
obj2.aa.c=200;
obj.name="wang";
console.log(obj,obj2);//{ name: 'wamg', age: 10, aa: { c: 200 } } { name: 'li', age: 10, aa: { c: 200 } }


var obj={name:"li",age:10,aa:{c:100}};
var obj2={};
obj2=JSON.parse(JSON.stringify(obj));
console.log(obj,obj2);//{ name: 'li', age: 10, aa: { c: 100 } } { name: 'li', age: 10, aa: { c: 100 } }
obj2.aa.c=200;
console.log(obj,obj2);//{ name: 'li', age: 10, aa: { c: 100 } } { name: 'li', age: 10, aa: { c: 200 } }
