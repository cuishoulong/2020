let data;
let lis;
function getData() {
    let xhr = new XMLHttpRequest;
    xhr.open("get", "banner.json");
    xhr.onreadystatechange = function () {
        if(xhr.readyState==4&&/^2\d{2}/.test(xhr.status)){
            data = JSON.parse(xhr.responseText)
            bindLi(data);
            aa()
            horn();
        }
    }
    xhr.send();
}
getData();
function bindLi(data) {
    let wrapperItems = ``;
    let listItems = ``;
    data.forEach((item, index) => {
        wrapperItems += `<li><img src="${item.img}" alt=""></li> `
        listItems += `<li></li>`
    })
    lis = list.getElementsByTagName("li");
    wrapperItems += `<li><img src="${data[0].img}" alt=""></li> `
    wrapper.innerHTML = wrapperItems;
    list.innerHTML = listItems;
}
let self = 0;
function move() {
    self++;
    if (self == 5) {
        self = 0;
        wrapper.style.left = 0 + "px";
    }
    horn();
    utils.animate(wrapper, {
        left: -self * 800
    }, 500)
}
let timer = setInterval(move, 1000)
function horn() {
    for (var i = 0; i < lis.length; i++) {
        if (self === i) {
            lis[i].classList.add("active");
        } else {
            lis[i].classList.remove("active");
        }
        if (self == 4) {
            lis[0].classList.add("active");
        }
    }
}
outer.onmouseover = function () {
    clearInterval(timer);
}
outer.onmouseout = function () {
    timer = setInterval(move, 1000)
}
function aa() {
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            self = i - 1;
            move()
        }
    }
}

right.onclick = function () {
    move()
}
left.onclick = function () {
    self -= 2;
    if (self == -2) {
        self = data.length - 2;
        wrapper.style.left = (data.length - 2) * -800 + "px"
    }
    move()
}