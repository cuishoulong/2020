console.log(f);
const f=2;//Missing initializer in const declaration      意思const设置初始的时候必须要赋值
// f=2;
console.log(f);


const f=2;
f=2;//Assignment to constant variable  常量的值不能改
console.log(f);




function fn(){
    console.log(1);
}
let obj={
    // fn:fn
    fn
}
obj.fn();//1


const a=[1,3];
a.push(5);
console.log(a);