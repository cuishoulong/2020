let step = 0;
let timer;
let data;

let send = () => {
    $.ajax({
        url: './banner.json',
        async: true,
        type: 'get',
        success: (res) => {
            // 会自动把请求后来的参数转化为对象
            data = res;
            console.log(res);
            bindHtml(res);
            timer = setInterval(autoMove, 2000);
            changeTip();
            bindHover();
        }
    })
};


let bindHtml = (data) => {
    let imgs = '';
    let lis = '';
    $.each(data, (index, item) => {
        imgs += `<img src="${item.img}" alt="">`;
        lis += `<li></li>`
    });
    $('#wrapper').html(imgs);
    $('#list').html(lis);
};


//自动切换

let autoMove = function () {
    step++;
    step === 5 ? step = 0 : null;
    $('img').eq(step).fadeIn().siblings().fadeOut();
    changeTip();
}
send();
// bindHtml(data);
// timer = setInterval(autoMove, 2000);

// 实现焦点跟随
let changeTip = () => {
    $('#list li').eq(step).addClass('select').siblings().removeClass('select')
}


// 鼠标划上停止
$('#outer').hover(() => {
    clearInterval(timer)
}, () => {
    timer = setInterval(autoMove, 2000)
})

// 鼠标划上，显示对应的图片
let bindHover = ()=>{
    $('#list li').hover(function () {
        step = $(this).index() - 1;
        autoMove()
    })
}


// 点击箭头
$('#right').click(() => {
    autoMove()
});
$('#left').click(() => {
    step -= 2;
    step === -2 ? step = 3 : null;
    autoMove()
})

