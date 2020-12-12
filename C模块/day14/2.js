let winH = utils.win("clientHeight");
let uls = document.getElementsByTagName("ul");
let imgs=document.getElementsByClassName("bg");
function getData() {
    let data;
    let xhr = new XMLHttpRequest();
    xhr.open("get", "data.txt", false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
            data = JSON.parse(xhr.responseText);
            bindHTML(data);
        }
    }
    xhr.send();
}
getData();
function bindHTML(data) {
    for (var i = 0; i < 20; i++) {
        let index = Math.round(Math.random() * 9);
        let randomIndex = data[index];
        let img = document.createElement("img");
        let li = document.createElement("li");
        let p = document.createElement("p");
        p.innerText = randomIndex.title;
        img.classList.add("bg");
        img.setAttribute("true-src", randomIndex.src);
        img.style.height = randomIndex.height;
        li.appendChild(img);
        li.appendChild(p);
        uls = Array.from(uls);
        uls.sort((a, b) => a.scrollHeight - b.scrollHeight);
        uls[0].appendChild(li);
    }
}


function apperImg(img){
    let winT = utils.win("scrollTop");
    let imgH=img.scrollHeight;
    let imgT=utils.offset(img).top;
    let trueSrc=img.getAttribute("true-src");
    if(winT+winH>=imgH+imgT){
        let newImg=new Image;
        newImg.src=trueSrc;
        newImg.onload=function(){
            img.src=trueSrc;
            img.classList.remove("bg");
        }
    }
}

function forimg(){
    for(var i=0;i<imgs.length;i++){
        apperImg(imgs[i]);
    }
}
forimg();

function isBottom(){
    let bodyH=utils.win("scrollHeight");
    let winT=utils.win("scrollTop");
    if(winT+winH>=bodyH){
        getData();
    }
}
window.onscroll=function(){
    isBottom();
    forimg();
}