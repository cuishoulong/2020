let uls = document.getElementsByTagName("ul");
let imgs = document.getElementsByClassName("bg");
let winH = utils.win("clientHeight");
let back=document.querySelector("#back");
function getData() {
    let data;
    let xhr = new XMLHttpRequest();
    xhr.open("get", "data.txt", false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
            data = JSON.parse(xhr.responseText);
            bindImg(data);
        }
    }
    xhr.send();
}
getData();
//绑定li
function bindImg(data) {
    for (var i = 0; i < 20; i++) {
        let index = Math.round(Math.random() * 9);
        let randomImg = data[index];
        let li = document.createElement("li");
        let p = document.createElement("p");
        let img = document.createElement("img");
        img.classList.add("bg");
        img.style.height = randomImg.height;
        img.setAttribute("true-src", randomImg.src);
        p.innerText = randomImg.title;
        li.appendChild(img);
        li.appendChild(p);
        uls = Array.from(uls);
        uls.sort((a, b) => a.scrollHeight - b.scrollHeight);
        uls[0].appendChild(li);
    }
}
// 循环操作
function forImg() {
    for (var i = 0; i < imgs.length; i++) {
        appearImg(imgs[i]);
    }
}
forImg();
//图片显示
function appearImg(img) {
    let winT = utils.win("scrollTop");
    let imgH = img.scrollHeight;
    let imgT = utils.offset(img).top;
    if (winH + winT - 100 >= imgT + imgH) {
        let newImg = new Image;
        let trueSrc = img.getAttribute("true-src");
        newImg.src = trueSrc;
        newImg.onload = function () {
            img.src = trueSrc;
            img.classList.remove("bg");
        }
    }
}

function isBottom() {
    let winT = utils.win("scrollTop");
    let bodyH = utils.win("scrollHeight");
    if (winT + winH + 100 >= bodyH) {
        getData();
    }
}
//back回到顶部
back.onclick = function () {
    let winT=utils.offset(this).top;
    let sub=winT/20;
    var time1=setInterval(function(){
        winT-=sub;
        utils.win("scrollTop",winT);
        if(winT<=0){
            clearInterval(time1);
            time1=null;
        }
    },17)
}
//back块是否出现
function backdisplay() {
    let winT = utils.win("scrollTop");
    if (winT>winH) {
        console.log((winT));
        back.style.display = "block";
    } else {
        back.style.display = "none";
    }
}
backdisplay()

window.onscroll = function () {
    isBottom();
    forImg();
    backdisplay()
}