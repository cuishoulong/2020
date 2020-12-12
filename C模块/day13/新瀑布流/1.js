var data;
var ulEle=document.getElementsByTagName("ul");
var imgs=document.getElementsByClassName("bg");
function getData(){
    var xhr=new XMLHttpRequest();
    xhr.open("get","data.txt",false);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&/^2\d{2}$/.test(xhr.status)){
            data=JSON.parse(xhr.responseText);
        }
    }
    xhr.send();
    bindImg(data);
}
getData();

//绑定图片，但不绑定src
function bindImg(data){
    for(var i=0;i<20;i++){
        var ulEles=Array.from(ulEle);
        let index=Math.round(Math.random()*9);//随机获取一个index
        let randomImg=data[index];
        let li=document.createElement("li");
        let img=document.createElement("img");
        img.style.height=Math.round(Math.random()*(250-180)+180)+"px";
        let p=document.createElement("p");
        img.setAttribute("true-src",randomImg.src);
        img.className="bg";
        p.innerText=randomImg.title;
        li.appendChild(img);
        li.appendChild(p);
        ulEles.sort(function(a,b){
            return a.scrollHeight-b.scrollHeight;
        })
        ulEles[0].appendChild(li);
    }
}
//循环绑定
function bindSrces(){
    for(var i=0;i<imgs.length;i++){
        bindSrc(imgs[i]);
    }
}
bindSrces();
function bindSrc(img){
    let winH=utils.win("clientHeight");
    let winT=utils.win("scrollTop");
    let imgH=img.offsetHeight;
    let imgT=utils.offset(img).top;
    if(winH+winT>=imgT+imgH){
        let trueSrc=img.getAttribute("true-src")
        let newImg=new Image;
        newImg.src=trueSrc;
        newImg.onload=function(){
            img.src=trueSrc;
            img.className="";
        }
    }
}
//判断是否到达临界点
function critical(){
    let winH=utils.win("clientHeight");
    let winT=utils.win("scrollTop");
    let bodyH=utils.win("scrollHeight");
    if(winH+winT>=bodyH){
        getData();
    }
}
window.onload=function(){
    bindSrces();
    critical();
}
