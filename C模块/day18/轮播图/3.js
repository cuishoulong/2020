let data;
let wrpLis;
let listLis;
/* 请求数据 */
function getData() {
    let xhr = new XMLHttpRequest;
    xhr.open("get", "banner.json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
            data = JSON.parse(xhr.responseText);
            bindHTML(data)
            dd()
            // listClick()
        }
    }
    xhr.send();
}
getData()
//渲染数据
function bindHTML(data) {
    let wrapperItems = ``;
    let listItems = ``;
    data.forEach(item => {
        wrapperItems += `<li><img src="${item.img}" alt=""></li>`;
        listItems += `<li></li>`;
    })
    wrapperItems += `<li><img src="${data[0].img}" alt=""></li>`
    wrapper.innerHTML = wrapperItems;
    list.innerHTML = listItems;
    wrpLis = wrapper.getElementsByTagName("li");
    listLis = list.getElementsByTagName("li");
}
/* 轮播 */
/* 画面动 */
let self = 0;
function move() {
    self += 1;
    if (self === 5) {
        self = 0;
        wrapper.style.left = 0 + "px";
    }
    dd()
    utils.animate(wrapper, { left: -self * 800 }, 500)
}
let timer = setInterval(move, 1000);
/* 焦点跟随，需要先执行一下 */
function dd() {
    for (let i = 0; i < listLis.length; i++) {
        if (i === self) {
            listLis[i].classList.add("active");
        } else {
            listLis[i].classList.remove("active");
        }
        if (self == 4) {
            listLis[0].classList.add("active");
        }
    }
}

/* 鼠标悬浮的时候，清除定时器，离开的时候装上定时器 */
outer.addEventListener("mouseover", function () {
    clearInterval(timer);
})
outer.addEventListener("mouseout", function () {
    timer = setInterval(move, 1000);
})

/* 点击焦点的时候，实现切换 */
// function listClick(){
//     for(let i=0;i<listLis.length;i++){
//         listLis[i].onclick=function(){
//             self=i-1;
//             move();
//         }
//     }
// }

/* 左边耳朵 */
left.onclick=function(){
    self-=2;
    if(self===-2){
        self=wrpLis.length-3;
        wrapper.style.left=-self*800+"px";
    }
    move();
};
/* 右边耳朵 */
right.onclick=function(){
    move();
}

/* 冒泡 */

function fn(e) {
    if(e.target.id=="list"){
        return
    }
    for (var i = 0; i < listLis.length; i++) {
        listLis[i].index = i;
    }
    let index=e.target.index;
    self =index - 1;
    move();
}
list.addEventListener("click", fn)