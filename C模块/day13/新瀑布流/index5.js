let uls = document.getElementsByTagName("ul");
let data = null;
// let imgs = document.querySelectorAll(".bg");
let imgs = document.getElementsByClassName('bg');
function getData(num) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "data.txt", false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
            data = JSON.parse(xhr.responseText)
        }
    }
    xhr.send();
    renderHtml(data);
}
getData(1);
console.log();

//渲染数据
function renderHtml(data) {
    for (var i = 0; i < 20; i++) {
        uls = Array.from(uls)
        let index = Math.round(Math.random() * 9);//随机索引
        let curImg = data[index];//随机抽取一张图片
        let li = document.createElement("li");
        let img = document.createElement("img");
        let p = document.createElement("p");
        img.style.height = Math.round(Math.random() * (250 - 180) + 180) + "px";//随机生成一个高250~180之间
        img.setAttribute("true-src", curImg.src);//把图片的真实路径方法哦img元素的行间
        img.className = "bg";
        p.innerText = curImg.title;
        li.appendChild(img);
        li.appendChild(p);
        uls.sort((a, b) => a.scrollHeight - b.scrollHeight);
        uls[0].appendChild(li);
    }
}
//使

// console.log(imgs.length);
function delay(img) {
    let winH = utils.win("clientHeight");
    let winT = utils.win("scrollTop");
    let imgH = img.offsetHeight;
    let imgT = utils.offset(img).top;
    if (winH + winT >= imgH + imgT) {
        let trueSrc=img.getAttribute("true-src");
        let newImg=new Image;
        newImg.src=trueSrc;
        newImg.onload=function(){
            img.src=trueSrc;
            img.className="";
        }
    }
}
//循环使用delay
function delays(){
    for(var i=0;i<imgs.length;i++){
        delay(imgs[i]);
    }
}
delays();
function isLoad(){
    //判断是否请求下一页照片
    let winH=utils.win("clientHeight");
    let winT=utils.win("scrollTop");
    let bodyH=utils.win("scrollHeight");
    if(winH+winT+100>=bodyH){
        getData();
    }
}
window.onscroll = function () {
    delays();
    isLoad();
}
