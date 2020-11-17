function unique(ary){
    for(var i=0;i<ary.length-1;i++){
        for(var j=i+1;j<ary.length;j++){
            if(ary[i]==ary[j]){
                ary.splice(j,1);
                j--;
            }
        }
    }
    return ary;
}
var ary=[1,1,1,2,1,9,2,8,11];
var res=unique(ary);
console.log(res)

function unique(ary){
   var obj={};
   for(var i=0;i<ary.length;i++){
       if(obj[ary[i]]==ary[i]){
           ary.splice(i,1);
           i--;
           continue;
       }
       obj[ary[i]]=ary[i];
   }
   return ary;
}
var ary=[1,1,1,2,1,9,2,8,11];
var res=unique(ary);
console.log(res)

function unique(ary){
    var newAry=[];
    for(var i=0;i<ary.length;i++){
        if(newAry.indexOf(ary[i])==-1){
            newAry.push(ary[i]);
        }
    }
    return newAry;
}
var ary=[1,1,1,2,1,9,2,8,11];
var res=unique(ary);
console.log(res)

// 删除最后一项的方法
var ary=[1,1,1,2,1,9,2,8,11];
ary.pop();
ary.splice(ary.length-1,1);
ary.length--;
console.log(ary)

//删除数组第一项
var ary=[1,1,1,2,1,9,2,8,11];
ary.shift();
ary.splice(0,1);
console.log(ary)

//在数组最后添加一项
var ary=[1,1,1,2,1,9,2,8,11];
ary.splice(ary.length,0,15);
ary.splice(ary.length,1,15);
ary.push(15);
console.log(ary)

//在数组最前面添加
var ary=[1,1,1,2,1,9,2,8,11];
ary.splice(0,0,15);
ary.unshift(15);
console.log(ary)