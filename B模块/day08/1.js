console.log(Math.abs(-1));//1
console.log(Math.abs(-2));//2

console.log(Math.round(-1.5));//-1
console.log(Math.round(1.5));//2

console.log(Math.floor(-1.5));//-1
console.log(Math.floor(1.5));//1

console.log(Math.min(1.5,2,3));//1.5
console.log(Math.max(1.5,2,3));//3

var str="qazwsxedcrfvtgbyhnujmikolpQAZWSXEDCRFVTGBYHNUJMIKOLP0123456789";
var aa="";
for(var i=0;i<4;i++){
 var item=Math.floor(Math.random()*(str.length-0));
 aa+=str[item];
}
console.log(aa)
// btn.innerText(aa);

