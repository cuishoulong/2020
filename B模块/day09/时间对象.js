//new Date()是时间对象 
//获取到的是一个对象,身上有一些属性
// + getFullYear()
//  + 年
// + getMonth();
//     + 表示月份，值的范围在0-11之间，使用的时候需要+1
// + getDate();
//     + 获取当前的日期
// + getDay();
//     + 表示周几，值[0-6],0代表的是周日，1-6代表的是周一到周六
// + getHours();
//     + 小时
// + getMinutes();
//     + 分钟
// + getSeconds();
//     + 秒
// + getMilliseconds();
//     + 毫秒
var res=new Date();
console.log(res);//2020-11-20T01:44:15.532Z
console.log(typeof(res));//object
console.log(res.getFullYear());
console.log(res.getMonth());//月的索引要+1
console.log(res.getDay());//星期，[0-6],0代表周日，1-6代表周1-周6
console.log(res.getHours());//小时
console.log(res.getMinutes());//分钟
console.log(res.getSeconds());//秒
console.log(res.getMilliseconds());//毫秒
console.log(res.getTime());//时间戳1605838098212
// console.log(res);

//setTimeout(函数,时间毫秒)定时器是只执行一次  setInterval(函数,时间毫秒)是每隔多长时间执行一次
//参数有两个，一个函数，一个时间间隔，为毫秒，1秒等于1000毫秒
//返回值为当前定时器在浏览器中的排序，如果是第一个就为1
var time1=setTimeout(function(){
    console.log('setTimeout是只做一次');
},1000)
var time2=setInterval(function(){
    console.log('setInterval是每隔多长时间做一次')
},0)
console.log('我是同步先走');
// console.log(time1,time2);//1,2
clearTimeout(time1);//清除定时器
clearInterval(time2);//清除定时器

