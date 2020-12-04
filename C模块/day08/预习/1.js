var A=function(x,y){
    console.log(this);
    return x+y;
};

Function.prototype.mycall=function(item,...ary){
    item=item||window;
    item instanceof Object||item instanceof Function?null:item=Object(item);
    var key=Symbol("key"),res;
    item.key=this;
    res=item.key(...ary);
    delete item.key;
    return res;
}
A.mycall(100,1,2);

var A=function(x,y){
    console.log(this);
    return x+y;
};
Function.prototype.mybind=function(...ary){
    let that=this;
    // return function(){
    //     that.call(...ary);
    // }
    return that.call(...ary);
}
document.body.onclick=A.mybind(100,10,20);
