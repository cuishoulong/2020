/* Array方法

filter: 依次便历，参数为回调函数，返回一个新数组，数组里是过滤好的数组，
var res=[100, 200, 300].filter((item, index) => {
    return item > 200
})

some 依次便历，参数为回调函数,找到符合规则的那一项，就返回true,然后就停止查询了，如果全部都没找到，就返回false
[100, 200, 300,400].some((item, index) => {
    return item > 200
})

every 依次便历，参数为回调函数,只要数组中有一个不满足，就停止查找，返回false，如果全部满足，就返回true
[100, 200, 300,400].every((item, index) => {
    return item > 200
})

find 发现的意思，依次便历，参数为回调函数,找到符合规则的第一项，然后return出来,找到就停止便利，没找到就是undefined
[100, 200, 300,400].find((item, index) => {
    return item > 200
})

findIndex 发现的意思，依次便历，参数为回调函数,找到符合规则的第一项，然后return出来它的索引,找到就停止便利，没找到就是undefined
[100, 200, 300,400].findIndex((item, index) => {
    return item > 200
})
 */
Array.prototype.myFilter = function myFilter(fn) {
    let obj = [];
    let res;
    if(typeof fn!=="function"&&fn==null)return;
    for (var i = 0; i < this.length; i++) {
        res = fn(this[i], i);
        if (res) {
            obj.push(this[i]);
        }
    }
    return obj;
}
let a = [1, 200, 300, 2];
let res = a.myFilter((item) => {
    return item > 1
})
console.log(res);

Array.prototype.mySome = function mySome(fn) {
    let res;
    if(typeof fn!=="function"&&fn==null)return;
    for (var i = 0; i < this.length; i++) {
        res = fn(this[i], i);
        if(res)return true;
    }
}

let a = [1, 200, 300, 2];
let res = a.mySome((item) => {
    return item > 1
})
console.log(res);

Array.prototype.myEvery = function myEvery(fn) {
    let res;
    if(typeof fn!=="function"&&fn==null)return;
    for (var i = 0; i < this.length; i++) {
        res = fn(this[i], i);
        if(!res)return false;
    }
    return res;
}

let a = [1, 200, 300, 2];
let res = a.myEvery((item) => {
    return item > 200
})
console.log(res);


Array.prototype.myFind = function myFind(fn) {
    let res;
    if(typeof fn!=="function"&&fn==null)return;
    for (var i = 0; i < this.length; i++) {
        res = fn(this[i], i);
        if(res)return this[i];
    }
}

let a = [1, 200, 300, 2];
let res = a.myFind((item) => {
    return item > 1
})
console.log(res);