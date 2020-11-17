var str=[1,2,3,4,5,6,7];
//遍历输出str的数字
// for(i=str.length-1;i>=0;i--)
// {
//     console.log(str[i]);
// }
//打印奇数项
for(var i=0;i<str.length;i++){
    if(i%2==0){
        // i是索引i[0]=1
        // i是索引i[1]=2,当索引为偶数时值就是偶数，当索引为奇数时值就是奇数,%是取余数  2%2=0  3%2=1
        console.log(str[i]);
    }
}
var str=[1,2,3,4,5,6,7];
for(var i=0;i<str.length;i++){
    if(i%2==0){
        console.log(str[i]);
    }
}
//无论是++i，还是i++，值都是加1
//var b=++i; 加号在前，先自身累加，然后再赋值给b，b就是3
//var b=i++; 加号在后，先赋值给b，再自身累加，b就是2 
var i=2;
i++;
var b=i;
console.log(i);//3
console.log(b);//3

var i=2;
++i;
var b=i;
console.log(i);//3
console.log(b);//3

var i=2;
var b=i++;
console.log(i);//3
console.log(b);//2

var i=2;
var b=++i;
console.log(i);//3
console.log(b);//3

for(var i=1;i<=10;i+=2){
    if(i<=5){
       i++;//
       continue;
    }else{
       i-=2;
       break;
    }
    i--;
    console.log(i);
    
}
console.log(i);

