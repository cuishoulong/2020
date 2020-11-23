var oclass=document.getElementsByClassName('box');
var oid=document.getElementById('id');
//id与Name的上下文只能是document
//Name只能写给input,写给其他会有兼容性问题，所以我们一般只用来获取表单,且获取到的也是个类数组
var names=document.getElementsByName('userName');
var oclass=oid.getElementsByTagName('div');

//通过选择器选择你想要的元素,querySelector是单个的，querySelectorAll是多个，多个的是类数组
var div=document.querySelector('#main>p');//单个
var divs=document.querySelectorAll('#main>p');//多个

//获取屏幕的宽
document.documentElement.clientWidth||document.body.clientWidth;
