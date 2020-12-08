//RegExp.prototype.exec()是正则原型上的一个方法
//是实现捕获符合规则内容的
//先看大括号，大括号看完再看小括号
/* 
#### exec返回值的特点
1. 是数组类型的，如果捕获不到就是null
2. 数组的正常项就是捕获到的内容
3. index是第一次捕获内容的开始位置的索引
4. input是原来的字符串
5. 正则身上有一个属性global，如果正则有g就是true，没有就是false

#### 正则的懒惰性
##### 1.正则再捕获的时候只会把第一次符合规则的内容捕获到
```javascript
let str="ad123da789bfs367";
let reg=/\d{3}/;
console.log(reg.lastIndex);//0
var res=reg.exec(str);
console.log(res);//VM136:4 ["123", index: 2, input: "ad123da789bfs367", groups: undefined]
console.log(reg.lastIndex);//0
```
##### 2. 正则是一个对象，身上有lastIndex属性，控制的是当前正则捕获开始位置的索引
> 到最后查找不到了为null,然后从0开始，重新查找
> 取消懒惰性的话+g,改变lastIndex，也就是改变下一次捕获开始的索引,但是是一次一次的查找的,有些麻烦
```javascript
let str="ad123da789bfs367";
let reg=/\d{3}/g;
console.log(reg.lastIndex);//0
var res=reg.exec(str);
console.log(res);
console.log(reg.lastIndex);//5
var res=reg.exec(str);
console.log(res);
console.log(reg.lastIndex);//10
var res=reg.exec(str);
console.log(res);
console.log(reg.lastIndex);//16
var res=reg.exec(str);
console.log(res);//null
console.log(reg.lastIndex);//0
```

##### 封装一个方法，可以把当前字符串所有符合正则规则的内容全部捕获到,并且以数组方式返回
> 如果正则不加g，那方法返回的值跟exec一样
> 如果正则匹配不到那返回null
> 正常情况下返回的是一个数组,数组里存放的是符合规则的每一个内容
```
let str = "ad123da789bfs367";
let reg = /\d{3}/;
RegExp.prototype.myExec = function (str) {
    let ary=[];
    var res=this.exec(str);
    if(!this.global){
        ary.push(res[0]);
    }else{
        while(res){
            ary.push(res[0]);
            res=this.exec(str);
        }
    }
    return ary.length?ary:null;
}
var res = reg.myExec(str);
console.log(res);
```

#### match是字符串身上的方法，用来配合正则使用
> 如果正则不加g，那方法返回的值跟exec一样
> 如果正则匹配不到那返回null
> 正常情况下返回的是一个数组,数组里存放的是符合规则的每一个内容
> 其他特点（也可以称为缺陷）
    > match不能捕获到小分组()的内容，只能捕获符合整个正则的字符串
结果跟自己封装的myExec一样
str.match(reg);

#### matchAll是字符串的一个方法，但是可以获取到()内的内容
let str = "ad123da789bfs367";
let reg = /\d{3}/;
let Iterator = str.matchAll(reg);
for (let item of Iterator) {
    console.log(item);
}



//封装一个字符串方法，既可以得到大正则捕获的内容，还可以得到每一次分组捕获的内容
function myMatch(reg){
    if(!reg.global){
        return reg.exec(this);
    }
    let obj={
        big:[],
        small:[]
    };
    let Iterator=this.matchAll(reg);
    for(let item of Iterator){
        obj.big.push(item[0]);
        obj.small.push(item[1]);
    }
    return obj.big?obj:null;
}
String.prototype.myMatch=myMatch;
let str = "ad123da789bfs367";
let reg = /(\d{3})/g;
str.myMatch(reg);

function myMatch(reg){
    let res=reg.exec(this);
    let obj={
        big:[],
        small:[]
    };
    if(!reg.global){
        return reg.exec(this);
    }
    while(res){
        obj.big.push(res[0]);
        obj.small.push(res[1]);
        res=reg.exec(this);
    }
    return obj.big?obj:null
}
String.prototype.myMatch=myMatch;
let str = "ad123da789bfs367";
let reg = /\d{2}(\d)/g;
str.myMatch(reg);
*/


/* 
#### 正则的贪婪性
>当正则捕获的时候能多捕获一个就多捕获一个
```javascript
let str="2019";
let reg=/\d+/g;
console.log(str.match(reg));//["2019"]
```
> 取消正则的贪婪性,在后面加？
```javascript
let str="2019";
let reg=/\d+?/g;
console.log(str.match(reg));// ["2", "0", "1", "9"]
```
正则类上的$1-$9存储的是正则匹配到的分组内容
*/
// let str="zhufeng1|zhufeng2";
// str.replace(/zhufeng/g,"zhufengpeixun");


let str = "qfevws123qfegs456fs789";
let reg = /\d{3}/g;
let res = str.replace(reg, function () {
    //replace第一个传正则，第二个传函数的时候
    //正则捕获成功几次，当前回调函数就执行几次，每次捕获的时候都会把当前捕获的内容传递给回调函数
    console.dir(arguments);
    return "pp";
    //return 返回的什么就把匹配到的替换成什么,如果没有return就替换为undefined
})
console.log(res);//"qfevwsppqfegsppfspp"


let time = "2019-08-13";
let reg = /-/;
var res = time.replace(reg, "年").replace(reg, "月").replace(/13/, "13日");


let time = "2019-08-13";
// let reg=/(\d{4})-(\d{2})-(\d{2})/;
let reg = /-/g;
var a = ["日", "月", "年", ""];
var res = time.replace(reg, function () {
    a.length--;
    return a[a.length - 1];
}).replace(/13/, "13日");


let time = "2019-08-03";
let reg = /(\d{4})-(\d{2})-(\d{2})/;
var res = time.replace(reg, function (...arg) {
    let [, a, b, c] = [...arg];
    return `${a}年${b}月${c}日`
})



//首字母大写
let str = "good good study,day day up";
let reg = /\b[a-zA-Z]/g;
var res = str.replace(reg, function () {
    return arguments[0].toUpperCase();
})

//?传参
//第一种
let url = "http://www.baidu.com?name=erya&age=18&sex=0#index";
String.prototype.URLParams = function () {
    var newObj = {};
    let reg = /([^#*=&?]*)=([^#&?=*]*)/g
    let Iterator = this.matchAll(reg);
    console.log(Iterator)
    for (let item of Iterator) {
        newObj[item[1]] = item[2]
    }
    return newObj;
}
url.URLParams();

//第二种
let url = "https://www.baidu.com/s?wd=%E7%88%B1%E6%93%A6&rsv_spt=1&rsv_iqid=0x95896f7c00000872&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=80035161_1_dg&rsv_enter=1&rsv_dl=tb&rsv_sug3=3&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&inputT=1208&rsv_sug4=1306";
String.prototype.URLParams = function () {
    var newObj = {};
    let reg = /([^#*=&?]*)=([^#&?=*]*)/g;
    this.replace(reg, function (a, ...arg) {
        newObj[arg[0]] = arg[1];
    })
    return newObj;
}
url.URLParams();

//时间2019年12月03日 12时10分03秒
let time = "2019-12-3 12:12:12";
String.prototype.myTime = function (tem = "{0}年{0}月{0}日 {0}时{0}分{0}秒") {

    let reg = /(\d+)/g
    let timeAry = this.match(reg);
    let time2 = tem.match(/[^\{\d\}\s]/g);
    // console.log(time2)
    let a = ``;
    for (var i = 0; i < time2.length; i++) {
        if (timeAry[i].length < 2) {
            timeAry[i] = "0" + timeAry[i];
        }
        // timeAry[i]=timeAry[i]||"0";
        // time2[i]=time2[i]||"0";
        a += (timeAry[i] + time2[i])
    }
    return a;
}
time.myTime();


let time = "2019-12-3 12:12:12";
String.prototype.myTime = function (tem = "{1}年{2}月{3}日 {4}时{5}分{6}秒") {
    let timeAry=this.match(/\d+/g);
    tem=tem.replace(/\{(\d)\}/g, function (a,b) {
        
    })
}
time.myTime();


let time = '2019-12-3 12:12:3';
// 想要得到这样的结果 ==>'2019年12月03日 12时10分03秒'
function formatTime(template = '{0}年{1}月{2}日 {3}时{4}分{5}秒') {
    let timeAry = this.match(/\d+/g);// 把字符串里的年月日时分秒都拿到,以数组的格式进行展示 ["2019", "12", "3", "12", "10", "3"]
    // let template = '{0}年{1}月{2}日 {3}时{4}分{5}秒';// 编写一个模板，一会用来进行替换
    template = template.replace(/\{(\d)\}/g, function (content, index) {
        // index是每一次分组捕获的内容
        // console.log(content, index)
        // console.log(timeAry[index])
        console.log(content,index)
        let time = timeAry[index] || "00"; // 如果index获取不到对应的值，那就默认赋值为 "00"
        time.length < 2 ? time = "0" + time : null;
        // 如果获取的时间不足十位就补零
        return time;
    })
    return template
    console.log(timeAry)
}
String.prototype.formatTime = formatTime;
console.log(time.formatTime())