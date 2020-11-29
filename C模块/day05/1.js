function fn(a, b) {
return ((a in b)&&(!b.hasOwnproperty(a)))?true:false;
}
var fn1 = [1, 2, 3];
console.log(fn(fn1, Array));0