// Promise是一个es6类
let p1 = new Promise((resolve, reject) => {
    resolve();//假设第一个函数执行
    reject();//第二个代表失败
});
/* 
使用的时候new一个promise实例，promise里传回调函数
函数有两个值
*/
p1.then(() => {
    console.log("成功")
    // resolve执行，那这个就执行
}, () => {
    //reject执行，那这个就执行
    console.log("失败")
})
/* 
Promise的实例有三种状态，pending(等待),fulfilled(成功),rejected(失败)
状态一旦发生变化就会凝固，不会再变化
pending-->fulfilled或者 pending-->rejected要么成功要么失败,写两个的话，先执行哪个就是哪个，第二个不起作用
*/


setTimeout((a, b) => { console.log(a, b) }, 1000, 10, 12)
//定时器第一个值是函数，第二个值是时间，再往后的值都当做实参传递给第一个函数

console.log(100);
let p1 = new Promise((resolve, reject) => {
    console.log(800);
    setTimeout(() => {
        console.log(700);
        resolve()
    });
    reject();
});
console.log(200);
p1.then(() => {
    console.log(300);
}, () => {
    console.log(400);
});
console.log(500);


//连续调用
let p1 = new Promise((resolve, reject) => {
    // resolve();
    reject()
})
let p2 = new Promise((resolve, reject) => { resolve(); })

p1.then(() => {
    //成功
    return p2;
}
    , () => {
        //失败 
        return p2;
    })
    .then(() => { console.log(1) }, () => { console.log(2) })



//------------------------
const getJSON = function (url) {
    const promise = new Promise(function (resolve, reject) {
        const handler = function () {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

    });

    return promise;
};

getJSON("/posts.json").then(function (json) {
    console.log('Contents: ' + json);
}, function (error) {
    console.error('出错了', error);
});


const getData = function (url) {
    let data;
    let promise = new Promise((resolove, reject) => {
        function aa() {
            if (!url) {
                reject("报错")
                return;
            }
            let xhr = new XMLHttpRequest();
            xhr.open("get", url);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (/^2\d{2}/.test(xhr.status)) {
                        data = 12;
                        resolove(data);
                    } else {
                        reject("报错")
                        return;
                    }
                } else {
                    reject("报错");
                    return;
                }
            }
            xhr.send();
        }
        aa()
    })
    return promise;
}
getData(1).then((data) => { console.log(data) }, (bb) => { console.log(bb) });

let aa = new Promise((res, rej) => {
    res();
    console.log(1);
    return new Promise((res, rej) => { rej(); });
});
aa.then(() => { console.log(2) },
    () => { console.log(3) }).then(
        () => { console.log(4) }, () => { console.log(5) })

let promise1 = new Promise((res, rej) => {
    console.log(res, rej)
})
promise1.__proto__


// bad
promise
    .then(function (data) {
        // success
    }, function (err) {
        // error
    });

// good
promise
    .then(function (data) { //cb
        // success
    })
    .catch(function (err) {
        // error
    });