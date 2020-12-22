let step = 0;
$.ajax({
    url: "banner.json",
    success: (data) => {
        bindHtml(data)
        changeFocus();
        $("#list li").click(function () {
            step = $(this).index()-1;
            autoMove();
        })
        $("#right").click(function(){
            autoMove();
        })
        $("#left").click(function(){
            step-=2;
            if(step===-2){
                wrapper.style.left=data.length-2+"px";
                step=data.length-2;
            }
            autoMove();
        })
    }
})

let bindHtml = (data) => {
    let imgs = ``, focus = ``;
    $(data).each((index, item) => {
        imgs += `<li><img src="${item.img}" alt=""></li>`
        focus += `<li></li>`;
    })
    imgs += `<li><img src="${data[0].img}" alt=""></li>`
    $("#wrapper").html(imgs);
    $("#list").html(focus);
}

let autoMove = () => {
    step++;
    if (step === 5) {
        step = 0;
        $("#wrapper").css("left", 0)
    }
    changeFocus();
    $("#wrapper").animate({ left: -800 * step }, 500);
}
let timer = setInterval(autoMove, 1000);
let changeFocus = () => {
    $("#list li").eq(step).addClass("active").siblings().removeClass("active");
    step == 4 ? $("#list li").eq(0).addClass("active").siblings().removeClass("active") : null;
}
$("#outer").hover(() => { clearInterval(timer) }, () => { timer = setInterval(autoMove, 1000) })

