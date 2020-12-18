let uls=document.getElementsByTagName("ul");
let imgs=document.getElementsByClassName("bg");
let winH=utils.win("clientHeight");
console.log(winH)
function getData(){
    let data;
    let xhr=new XMLHttpRequest;
    xhr.open("get","data.txt",false);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&/^2\d{2}$/.test(xhr.status)){
            data=JSON.parse(xhr.responseText);
            // console.log(data)
            bindImg(data)
        }
    }
    xhr.send();
}
function bindImg(data){
    for(var i=0;i<20;i++){
        let index=Math.round(Math.random()*9);
        let randomImg=data[index];
        let li=document.createElement("li");
        let p=document.createElement("p");
        let img=document.createElement("img");
        p.innerText=randomImg.title;
        img.setAttribute("true-src",randomImg.src);
        img.setAttribute("height",randomImg.height);
        img.classList.add("bg");
        li.appendChild(img);
        li.appendChild(p);
        uls=Array.from(uls);
        uls.sort((a,b)=>{
            return a.offsetHeight-b.offsetHeight;
        })
        uls[0].appendChild(li);
    }
}
getData()
function appendimgs(){
    for(var i=0;i<imgs.length;i++){
        appendImg(imgs[i]);
    }
}
function appendImg(img){
    let trueSrc=img.getAttribute("true-src");
    let newImg=new Image();
    newImg.src=trueSrc;
    let winT=utils.win("scrollTop");
    let imgH=img.scrollHeight;
    let imgT=utils.offset(img).top;
    if(winT+winH+100>imgH+imgT){
        newImg.onload=function(){
            img.src=trueSrc;
            img.classList.remove("bg")
        }
    }
}
appendimgs();

function getP(){
    let winT=utils.win("scrollTop");
    let bodyH=utils.win("scrollHeight");
    if(winT+winH+100>bodyH){
        getData()
    }
}
function appendBox(){
    let winT=utils.win("scrollTop");
    if(winT>winH){
        box.style.display="block";
    }else{
        box.style.display="none";
    }
}
function debounce(func,wait,imm){
    let timer;
    return function(){
        if(imm){
            let that=this;
            clearTimeout(timer);
            timer=null;
            timer=setTimeout(()=>{
                func.call(that)
            },wait)
        }else{
            clearTimeout(timer);
            if(!timer){
                func.call(this);
            }
            timer=setTimeout(()=>{
                timer=null;
            },wait)
        }
    }
}
function fn(){
    let winT=utils.win("scrollTop");
    let ww=winT/20;
    if(winT-ww>=0){
       let timer2=setInterval(()=>{
            winT-=ww;
            utils.win("scrollTop",winT)
            if(winT<=0){
                clearInterval(timer2)
            }
        },17)
    }
}
box.onclick=debounce(fn,1000)
window.onscroll=function(){
    getP();
    appendimgs();
    appendBox()
}