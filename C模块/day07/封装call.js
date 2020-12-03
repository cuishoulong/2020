Function.prototype.myCall=function(obj,...ary){
    // var res=null;
    // if(obj){
    //     obj.this=this;
    //     res=obj.this(...ary);
    //     delete obj.this;
    // }else{
    //     res=this(...ary);
    //     delete obj.this;
    // }
    // return res;
    obj=obj||window;
    obj.this=this;
    res=obj.this(...ary);
    delete obj.this;
    return res;
}
var obj={name:"li"};
function fn(x,y){
    console.log(this);
    console.log(arguments);
    return x+y;
}
fn.myCall(obj,1,2);