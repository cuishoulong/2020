/* 
Promise就是一个状态机
作用：把异步的代码以同步的方式展现出来
Promise有三种状态，当吧Promise的实例创建出来的时候默认是pending等待态
pending-->fulfilled或者pending-->rejected
当new Promise时，传递一个回调函数，这个回调函数里有两个形参，resolve,reject，这两个形参对应的是成功态，和失败态


then
then是promise原型上的方法，可以传递两个回调函数，分别对应实例的成功态执行的函数和失败态执行的函数
还可以连then
下一个then中的回调函数是怎么执行的，要看上一个then中回调函数执行的时候有没有返回新的Promise实例，如果反悔了，拿下一个then中的回调函数的执行就受当前Promise实例的状态的管控
如果没有返回promise实例，那下一个then中的回调函数就会默认执行成功态(第一个)

catch
catch是promise原型上的一个方法，当任何一个promise的实例是失败态的时候就会窒息catch函数
如果回调函数执行的时候发生了错误，那当前promise的实例会默认为失败态
*/
let p1=new Promise((resolve,reject)=>{
    // console.log(a);
    resolve()
})
p1.then(()=>{
    console.log("成功态")
    return new Promise((resolve,reject)=>{
        reject(aa)
    })
},()=>{
    console.log("失败态")
}).catch((error)=>{console.log(error)}).finally(()=>{console.log(888)})

/* 
Promise.all([])
all里面的数组可以放promise实例，等里面的全部执行完毕，会返回一个态度(成功态，或失败态),数组内全部成功all才返回成功态，有一个失败就位失败态
如果all为成功态，那么数组内所有promise的实例的返回值会传递给.then里面的成功态，如果失败，会把第一个失败的传参传递给.then里的失败态
Promise.all的参数不一定是promise的实例，是别的值也可以，他内部会把当前的值转换成成功态的promise实例
*/
let p1=new Promise((resolve,reject)=>{
    resolve(100);
})
let p2=new Promise((resolve,reject)=>{
    resolve(200);
})
let p3=new Promise((resolve,reject)=>{
    resolve(300);
})
const p=Promise.all([p1,p2,p3]);
p.then((res)=>{
    console.log(res,"成功态")// (3) [100, 200, 300] "成功态"
},(rej)=>{
    console.log("失败态")
})
/* 
Promise.race([])
[]里的promise实例中谁先执行完毕，那么这个先执行完成的是什么态那就是什么态(成功，失败，等待)，返回值也只接收这一个,如果为等待态，那么就不执行.then
*/
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{    resolve(100);},1000)
})
let p2=new Promise((resolve,reject)=>{
    // resolve(200);
    setTimeout(()=>{},100)
})
let p3=new Promise((resolve,reject)=>{
    // resolve(300);
})
const p=Promise.all([p1,p2,p3]);
p.then((res)=>{
    console.log(res,"成功态")//Promise {<pending>}
},(rej)=>{
    console.log("失败态")
})

/* 
Promise.resolve()
他的返回值就是一个已经成功的promise的实例
*/
let pp=Promise.resolve(100);
let pp=new Promise((res,rej)=>{
    res(100);
})

/* 
Promise.reject()
他的返回值就是一个已经失败的promise的实例
*/
let pp=Promise.reject(100);
let pp=new Promise((res,rej)=>{
    rej(100);
})


let p1=new Promise((res,rej)=>{
    res();
});

p1.then((res)=>{
    console.log(res,100);
    return new Promise((res,rej)=>{
        rej(111);
    })
}).then(()=>{},()=>{})
.catch((res)=>{
    console.log(res,200);
}).finally(()=>{
    console.log("最后")
})