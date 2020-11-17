// 对象
// 属性名：一般为数字或字符串
// 属性值：可以为任何数据类型
var obj={name:'xiaowang',age:'28',100:'he'};
// 获取属性名对应的属性值，方法：
// 1.对象.属性名
// 2.对象['属性名']
// 注意：数字的属性名不可以用obj.要用另一种
console.log(obj.name);//xiaowang
console.log(obj['name']);//xiaowang
// console.log(obj.100); 会报错，数字的属性名不可以用obj.
console.log(obj[100]);//he
var name="aa";
console.log(obj[name]);//undefined

// 更改,添加与删除
var obj={name:'xiaowang',age:'28',100:'he'};
obj.name='didi';//更改
obj.user='wowowo';//添加
obj.age=null;//删除 把值变为空
delete obj.age;//彻底删除
console.log(obj);
思考题:
//堆内存： 2.主要用来存放引用数据类型，如果是对象，存的就是属性名和属性值，如果是函数，把函数当成字符串存起来
//栈内存：1.供js代码运行 2.存基本数据类型的值
// 基本数据类型与引用数据类型的区别：一个是按值操作，一个是按空间地址操作
var a=12;
var b=a;
console.log(b);//12
var obj1={"name":"lili","age":12};
var obj2=obj1;
obj2.age=18;
console.log(obj1.age);//18

var obj={
    n:10,
    b:n*10
};
console.log(obj.b);

var ary1=[3,4];
var ary2=ary1;
ary2[0]=1;
ary2=[4,5];
ary2[1]=2;
ary1[1]=0;
console.log(ary1,ary2);//1,0 4,2 因为中间给ary2赋值的时候给了他一个新的地址

//if语句
var ad=12;
//单个的一个if
if(ad>10){
    alert(1);
}

//if==> else if ==> else   else if可以有多个
if(ad<10){
    alert(1);
}else if(ad<20){
    alert(2);
}
else{
    alert(3);
}

//可以嵌套
if(ad>5){
    if(ad<7){
        alert(2);
    }
}
// 转换为三元运算符
var num=12;
if(num>0){
   if(num<10){
     num++;
   }else{
     num--;
     console.log(num);
   }
}else{
    if(num==0){
       num++;
       num=num/10;
    }
};
var num=12;
num>0?(num<10?num++:num--,console.log(num)):(num==0?(num++,num=num/10):null);

switch(num){
    case 5:
        num++;
        break;
    case 6:
        num--;
        break;
    default:
        num=0;
}

let x = [1, 2, 3];
let y = x;
let z = [4, 5, 6];
y[0] = 10;//x,y=[10,2,3]
y = z; //x=[10,2,3] y,z=[4,5,6]
z[1] = 20;  //y,z=[4,20,6] x=[10,2,3]
console.log(x,y,z);
x[2] = z;
console.log(x,y,z);//x=[ 10, 2, [ 4, 20, 6 ] ] y=[ 4, 20, 6 ] z=[ 4, 20, 6 ]
x[2] = z= 30;
console.log(x,y,z);

let a={
    n:1,
}
let b=a;
a.x=a={
    n:2
}
console.log(b.x);//n:2
console.log(a.x);//undefined
console.log(b)//{n:1,x:{n:2}}
console.log(a)//{n:1,x:{n:2}}