console.log(this);//window

function fn(){
    console.log(this);
}
var obj={
    "name":"li",
    fn:fn
}

obj.fn();//{ name: 'li', fn: [Function: fn] }
fn();//window

var name="珠峰培训";
function fn(){
   console.log(this.name)
}
var obj={
  name:"你好世界",
  fn:fn
}
obj.fn();//"你好世界"
fn();//"珠峰培训"

(function(){
  this.fn();//"珠峰培训"
})();

let obj={
    name:"li",
    fn:(function(n){
         // 这里的this
         console.log(this);//window
         return function(){
            // 这里的this
            console.log(this);//obj
         }
    })(10),
  }
  obj.fn();

  function fn(){
      console.log(this);
  }
  var obj={
      name:"li",
      fn:fn
  }
  fn.apply(obj);//{ name: 'li', fn: [Function: fn] }

var num=10;
var obj={num:20};
obj.fn=(function(num){
   this.num=num*3;
   num++;
   return function(n){
       this.num+=n;
       num++;
       console.log(num);
   }
})(obj.num);
var fn=obj.fn;
fn(5);//22 这里的this是window
obj.fn(10);//23 这里的this是obj
console.log(num,obj.num)//65 30


var obj1={
    name:"cui",
    sex:"男"
}
var obj2={
    name:"yang",
    sex:"男"
}

function person (name,age,sex){
    return {
        name:name,
        age:age,
        sex:sex
    }
}
var p1=person("李",12,"男")

function fn(){
    console.log(this);
}
var f1=new fn();
var f2=new fn();
console.log(f1,f2,fn);

var ary1=[1,2,3];
var ary2=Array(1,2,3);
var ary3=Array(5);
console.log(ary1,ary2,ary3)

