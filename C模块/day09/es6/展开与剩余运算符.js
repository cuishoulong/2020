var ary1=[1,2,3];
var ary2=[1,4,5,6];
var ary3=[...ary1,...ary2];
console.log(ary3);//[ 1, 2, 3, 1, 4, 5, 6 ]

//以后面为主，重复会替换
var obj1={name:"li"};
var obj2={name:"wang",age:10};
var obj3={...obj1,...obj2};
console.log(obj3);//{ name: 'wang', age: 10 }



var [a,...ary]=[1,2,3,4,5];
console.log(ary);//[ 2, 3, 4, 5 ]