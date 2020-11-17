function fn(num) {
    if (num > 10) {
        return
    }
    console.log(num);
    fn(num + 1);
}
fn(1);


//求和
function fn(num) {
    var total = 0;
    for (var i = 0; i <= num; i++) {
        total += i;
    }
    return total;
}
console.log(fn(100))

//递归求和
function total(num){
    if(num>0){
        return 0;
    }
    return num+total(num+1);
    //total(num+1)一直在重复执行total函数
}
total(1);

//递归执行
function total(num){
    if(num>100){
        return 0;
    }
    if(num%2==0&&num%3==0){
        return num+total(num+1);
    }
    return total(num+1);
}
console.log(total(1));



//  for循环解决
 var total=0;
 for(var i=1;i<=100;i++){
     if(i%3==0&&i%2==0){
         total+=i;
     }
 }
 console.log(total);

