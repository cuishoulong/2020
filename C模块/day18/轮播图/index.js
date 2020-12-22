let outer = document.getElementById("outer");
let btn = outer.getElementsByTagName("a");
let wrapper = document.getElementById("wrapper");
let list = document.getElementById("list");
let lis = list.getElementsByTagName("li");
let data;
function getData() {
  let xhr = new XMLHttpRequest;
  xhr.open("get", "banner.json", false);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
      data = JSON.parse(xhr.responseText)
    }
  }
  xhr.send();
}
getData()

function renderHTML() {
  let wrapperItems = ``;
  let listItems = ``;
  data.forEach((item, index) => {
    wrapperItems += `<li><img src="${item.img}" alt=""></li>`
    listItems += `<li></li>`
  });
  wrapperItems += `<li><img src="${data[0].img}" alt=""></li>`
  wrapper.innerHTML = wrapperItems;
  list.innerHTML = listItems;
}
renderHTML();


let step = 0;
function autoMove(index) {
  step++;
  typeof index === "undefined" ? null : step = index;
  if (step == 5) {
    wrapper.style.left = 0;
    step = 0;
  }
  changeTip()
  utils.animate(wrapper, { left: -step * 800 }, 500)
}
let timer = setInterval(autoMove, 1000)
//用户鼠标划上outer轮播停止，鼠标离开，轮播继续
outer.onmouseout = function () {
  timer = setInterval(autoMove, 1000)
}
outer.onmouseover = function () {
  clearInterval(timer);
}
//---------------------------
//焦点跟随
function changeTip() {
  //获取所有焦点，相应的添加，不相应的清除
  for (let i = 0; i < lis.length; i++) {
    if (step == i) {
      lis[i].classList.add("active");
    } else {
      lis[i].classList.remove("active");
    }
    if (step == 4) {
      lis[0].classList.add("active")
    }
  }
}
changeTip()

//-------------------------------------------
function bindClick() {

}
for (let i = 0; i < lis.length; i++) {
  lis[i].onclick = function () {
    // step=i-1;
    autoMove(i)
  }
}

//点击小耳朵实现图片切换
right.onclick = function () {
  autoMove()
}
left.onclick = function () {
  step -= 2;
  if (step == -2) {
    wrapper.style.left = -3200 + "px";
    step = 2;
  }
  autoMove()
}