let uls = document.getElementsByTagName('ul');
let winT = utils.win("scrollTop");
let winH = utils.win("clientHeight");
getData();
function getData() {
    let data;
    let xhr = new XMLHttpRequest;
    xhr.open("get", "data.txt", false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
            data = JSON.parse(xhr.responseText)
            bindHTML(data);
        }

    }
    xhr.send();
}
function bindHTML(data) {
    for (var i = 0; i < 20; i++) {
        uls = Array.from(uls);//改变为数组会失去映射关系，不会自动更新，但是不影响往页面里添加东西
        let index = Math.round(Math.random() * 9);
        let curImg = data[index];
        let li = document.createElement("li");
        let img = document.createElement("img");
        let p = document.createElement("p");
        p.innerText = curImg.title;
        img.setAttribute("true-src", curImg.src);
        img.style.height = curImg.height;
        img.className = "bg";
        li.appendChild(img);
        li.appendChild(p);
        uls.sort(function (a, b) {
            return a.scrollHeight - b.scrollHeight;
        })
        uls[0].appendChild(li);
    }
}
//循环执行appearImg
let imgs = document.getElementsByClassName("bg");
function delay() {
    for (var i = 0; i < imgs.length; i++) {
        appearImg(imgs[i]);
    }
}
delay();
//图片懒加载
function appearImg(img) {
    let winT = utils.win("scrollTop");
    let winH = utils.win("clientHeight");
    let imgT = utils.offset(img).top;
    let imgH = img.offsetHeight;
    if (winT + winH >= imgH + imgT) {
        let trueSrc = img.getAttribute("true-src");
        let newImg = new Image;
        newImg.src = trueSrc;
        newImg.onload = function () {
            img.src = trueSrc;
        }
    }
}
//检测是否到达底部
function testbot() {
    let winH = utils.win("clientHeight");
    let winT = utils.win("scrollTop");
    let bodyH = utils.win("scrollHeight");
    if (winH + winT >= bodyH) {
        getData();
    }
}
window.onscroll = function () {
    delay();
    testbot();
}
back.onclick = function () {
    let winT = utils.win("scrollTop");
    let wh = winT / 20;
    if (winT != 0) {
        var time1 = setInterval(function () {
            winT -= wh;
            utils.win("scrollTop", winT);
            console.log(winT)
            if(winT<=0){
                clearInterval(time1);
                time=null;
            }
        }, 17);
    }
}
