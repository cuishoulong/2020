var ary=[1,2,3];
console.log(ary.push(1,2));//5
console.log(ary);//[1,2,3,1,2]

var ary=[1,2,3];
console.log(ary.pop());//3
console.log(ary);//[1,2]

var ary=[1,2,3];
console.log(ary.shift());//1
console.log(ary);//[2,3]

var ary=[1,2,3];
console.log(ary.unshift(1,2));//5
console.log(ary);//[1,2,1,2,3]

var ary=[1,2,3];
console.log(ary.splice(1,2,3));//[2,3]
console.log(ary);//[1,3]

var ary=[1,2,3];
console.log(ary.slice());//[1,2,3]
console.log(ary.slice(1,2));//[2]
console.log(ary);//[1,2,3]

var ary=[1,2,3,1];
console.log(ary.indexOf(1));//0
console.log(ary.indexOf(1,2));//3
console.log(ary.lastIndexOf(1));//3
console.log(ary.lastIndexOf(1,2));//0

var ary=[1,2,3];
console.log(ary.toString());//"1,2,3"
console.log(ary);//[1,2,3]

var ary=[1,2,3];
console.log(ary.join("+"));//"1+2+3"
console.log(ary);//[1,2,3]

var ary=[1,2,3];
console.log(ary.concat(8,6));//[1,2,3,8,6]
console.log(ary);//[1,2,3]