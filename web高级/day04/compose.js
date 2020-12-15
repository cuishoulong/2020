function a(x){
    return x+1;
}//2
function b(x){
    return x*3;
}//6
function c(x){
    return x/2;
}//3
// c(b(a(1)));
//实现一个函数，让其可以实现compose(a,b,c)(1)结果与c(b(a(1)));一样
function compose(...arg){
    return function(...ary){
        let res=arg[0](...ary);
        for(var i=1;i<arg.length;i++){
            res=arg[i](res);
        }
        return res;
    };
}
compose(a,b,c)(1)