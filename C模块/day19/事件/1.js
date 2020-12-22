/* 
事件：就是元素天生自带的一个行为
DOM0级事件
每一个元素身上都会有onclick属性，绑定事件的过程就是给其属性赋值的过程
特点：不能给元素的同一个事件类型绑定多个方法
给当前元素的某个时间类型卸载对应的方法 元素.onclick=null


DOM2级事件
元素.addEventListener("事件类型",函数,布尔)
元素.addEventListener("事件类型",函数,布尔)

当前DOM2级事件绑定是吧当前addEventListener执行的时候传递的函数放到对应的事件的池子里，但是当放池子里存方法的时候会存在去重的操作
利用DOM2级事件绑定给元素的某一个事件类型不可以绑定同一个方法(也就是函数名不可以一样)
当事件池子里的事件触发的时候，先绑定的哪个方法就先执行哪个方法


*/
window.addEventListener("DOMContentLoaded",function(){
    console.log(100);
})
window.addEventListener("load",function(){
    console.log(300);
})
console.log(200);

Attr("id","ss");
