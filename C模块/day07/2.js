function fn(){
    this=100;
    console.log(this);
}
obj.fn();//报错，因为this不能手动更改

function fn(){
    console.log(this);//obj{}
    console.log(arguments);//Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}
var obj={};
fn.call(obj,1,2,3);