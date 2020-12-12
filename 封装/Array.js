let arg = [1, 2, 3];
arg.reduce(function (res, item, index) {
    console.log(index)
}, 0)
//reduce特点，有两个值，第一个值为函数，第二个值为默认的函数内的第一个值如res
//循环几次看数组长度,如果没有第二个值，那么就是数组长度-1
/* 
第一个值函数有三个值res item index 分别为上一次输出结果的return值  值   值的索引
如果reduce没有传第二个值，那么res第一次就是索引为0的值，再往后就为上次return的值,这样的话item和index都是下一个值
*/


Array.prototype.myReduce = function myReduce(callback, initialValue) {
    if(typeof callback!=="function"){
        throw new TypeError("错误")
    }
    let i=0,that=this,len=this.length;
    if(typeof initialValue==="undefined"){
        i=1;
        initialValue=that[0];
    }
    for(i;i<len;i++){
        initialValue=callback(initialValue,that[i],i)
    }
    return initialValue;
}
let arg = [1, 2, 3];
// arg.myReduce(1, 0)
arg.reduce(function (res,item,index) {
    console.log(res,item,index)
}, 0)


