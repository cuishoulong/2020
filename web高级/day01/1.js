//对象数据类型转换成数字/字符串
//1.查找对象的 Svmbol.toPrimitive
//2. 对象.valueOf()  原始值   几个基类
//3.对象.toString() 变为字符串
//4.Number(str) 转数字
//Object.is(NaN,NaN)//true   判断相不相等(特殊处理)


//第一类，隐式进行数据类型转换的时候进行处理的
//1
var a = {
    i: 0,
    [Symbol.toPrimitive]: function () {
        return ++this.i;
    }
};
// a[Symbol.toPrimitive](){
//     return ++this.i;
// }

//2

if (a == 1 && a == 2 && a == 3) {
    console.log("ok");
}


//第二大类 es6数据劫持
let obj = {};
Object.defineProperty(obj, "name", {
    get() {
        console.log("获取时候执行");
    },
    set(value) {
        console.log("赋值时候执行");
    }
})


//parseInt处理机制
// parseInt([value],[radix])     [value]必须是一个字符串,如果不是，则也要默认转换为字符串
// [radix]不设置或者写的是0：正常都是按照10处理的，如果字符串一"0x"开始的则会默认为16进制
//  [radix]传几就是几进制
// 101 2进制-->10进制
//进制的转换 从右往左算，可以理解为 值*（进制的几次幂）,幂以0开始，每进一位，+个1
// 1*（2^0） + 0*（2^1） + 1*（2^2）

//进制默认2-以上
let arr = [27.2, 0, "0013", "14px", 123];//27.2 0,0 1,0013 2,14px 3,123 4
arr = arr.map(parseInt);
console.log(arr);//[27 ,NaN ,1 ,1 ,27]

//数据中有多少箱，就循环多超此，每一次执行回调函数，支持回调函数返回值，返回啥，酒吧当前项替换成啥,原始数组不变，以新数组返回
let arrNew = arr.map(function (item, index) {
    return "@";
})


var a={
    n:1
};
var b=a;
a.x=a={
    n:2
}
console.log(a.x);
console.log(b);
