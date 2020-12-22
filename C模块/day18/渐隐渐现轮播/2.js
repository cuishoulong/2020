let data;
let step = 0;
let tips;
let getData = () => {
    let xhr = new XMLHttpRequest;
    xhr.open("get", "banner.json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /^2\d{2}/.test(xhr.status)) {
            data = JSON.parse(xhr.responseText)
            bindHtml(data)
            tips = document.querySelectorAll("#list li");
            changeFocus();
        }
    }
    xhr.send();
}
getData()

let bindHtml = (data) => {
    let imgs = ``, focus = ``;
    data.forEach(item => {
        imgs += `<li><img src="${item.img}" alt=""></li>`
        focus += `<li></li>`;
    });
    imgs += `<li><img src="${data[0].img}" alt=""></li>`
    wrapper.innerHTML = imgs;
    list.innerHTML = focus;
}

let autoMove = () => {
    step++;
    if (step === 5) {
        step = 0;
        wrapper.style.left = 0;
    }
    changeFocus();
    utils.animate(wrapper, { left: -800 * step }, 500);
}
let timer = setInterval(autoMove, 1000);
let changeFocus = () => {
    for (let i = 0; i < tips.length; i++) {
        if (step === i) {
            tips[i].classList.add("active");
        } else {
            tips[i].classList.remove("active");
        }
        if (step == 4) {
            tips[0].classList.add("active")
        }
    }
}
outer.onmouseover = function () {
    clearInterval(timer)
}
outer.onmouseout = function () {
    timer = setInterval(autoMove, 1000)
}
