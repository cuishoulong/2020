//1
var ary=[1,9,8,2,5];
console.log(ary.sort(function(a,b){return b-a})[0]);

//2
var ary=[1,9,8,2,5];
for(var i=0;i<ary.length-1;i++){
    var item=ary[i];
    if(ary[i]<ary[i+1]){
        ary[i]=ary[i+1];
        ary[i+1]=item;
    }
}
console.log(ary[0]);

//3
var ary=[1,9,8,2,5];
Math.max(...ary);

//4
var ary=[1,9,8,2,5];
Math.max.apply(null,ary);

//5
var ary=[1,9,8,2,5];
console.log(ary.sort(function(a,b){return a-b}).pop());

//6
var ary=[1,9,8,2,5];
console.log(ary.sort(function(a,b){return b-a}).shift());