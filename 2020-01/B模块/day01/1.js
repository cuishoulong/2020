var btn=document.getElementById('btn');
btn.onclick=function(){
    alert(5);
    // window.location.href="https://www.baidu.com/";
    window.location.href;
    console.log(1);
}
  
console.log(Number('1'));//1
console.log(Number('1PX'));//NaN
console.log(Number(null));//0
console.log(Number(undefined));//NaN
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(''));//0
console.log(Number([]));//0
console.log(Number({}));//NaN

console.log(parseInt('1px'));//1
console.log(parseInt(''));//NaN
console.log(parseInt([]));//NaN
console.log(parseInt(undefined));//NaN
console.log(parseInt(null));//NaN
console.log(parseInt({}));//NaN
console.log('6'/'2');
console.log('6'/undefined);
console.log(!![]);//true
console.log(!!{});//true
console.log(!!undefined);//false
console.log(!!null);//false
console.log(!!'');//false
console.log(!!NaN);//false
console.log(!!0);//false
console.log(Number(function(){}));//NaN
console.log(toString(function(){}));//[object Undefined]
console.log(!![]);//true
var go=[名字,名字];
console.dir(go);
console.log(new Date());