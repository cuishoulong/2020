var ary = [1, 2, 3];
// var a=ary[0];
// var b=ary[1];
// var c=ary[2];


var [a, b, c] = ary;
console.log(a, b, c);//1 2 3

var [a, , b] = ary;
console.log(a, c);//1 3

var [a, b, c] = [1, 2];
console.log(a, b, c);//1 2 undefined

var [a, b, c = 10] = [1, 2, 3];
console.log(a, b, c);//1 2 3

var [a, b, c = 10] = [1, 2];
console.log(a, b, c);//1 2 10

var [a, [b, c], d] = [1, [2, 3], 4];
console.log(a, b, c, d);//1 2 3 4 

var [a, b, c = 10] = [1, 2, null];
console.log(a, b, c);//1 2 null



let { age, name } = { name: "li", age: 10 };
console.log(age, name);//10 "li"

let { age, name, sex } = { name: "li", age: 10 };
console.log(age, name, sex);//10 "li" undefined

let { age, name, sex = 100 } = { name: "li", age: 10 };
console.log(age, name, sex);//10 "li" 100

let { age, name, sex = 100 } = { name: "li", age: 10, sex: null };
console.log(age, name, sex);//10 "li" null
//要绝对等于undefin才走默认值
let { age, name, sex = 100 } = { name: "li", age: 10, sex: undefined };
console.log(age, name, sex);//10 "li" 100

//改名字 在左边的名字后面加:然后写上别名
let { age: a, name, sex = 100 } = { name: "li", age: 10 };
console.log(a, name);//10 "li"



// 函数中的解构赋值

function fn([x, y]) {
    console.log(x, y);
}
fn([1, 2]);//1,2

function fn(x = 1, y = 2) {
    console.log(x, y);
}
fn(5);//5,2

function fn({ name: a }) {
    console.log(a);
};
fn({age:10,name:"li"});//"li"