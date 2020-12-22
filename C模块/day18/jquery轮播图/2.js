//获取数据
let timer;
let step=0;
let getData=()=>{
$.ajax({
    url:"banner.json",
    methods:"get",
    // async:true,
    success:(data)=>{
        bindHtml(data)
        changeFocus();
        $("#outer").hover(()=>{clearInterval(timer)},()=>{
            timer=setInterval(autoMove,1000) 
        })
        $("#right").click(()=>{
            autoMove();
        })
        $("#left").click(()=>{
            step-=2;
            if(step==-2){
                step=data.length-2;
            }
            autoMove();
        })
        $("#list li").hover(function(){
            step=$(this).index()-1;
            autoMove();
        })
    }
})
}
getData();

let bindHtml=(data)=>{
let imgs=``,lis=``;
$.each(data,function(index,item){
    imgs+=`<img src="${item.img}" alt="">`;
    lis+=`<li></li>`
})
$("#wrapper").html(imgs);
$("#list").html(lis);
}
let autoMove=()=>{
    step++;
    if(step==5){
        step=0;
    }
    changeFocus();
    $("img").eq(step).fadeIn().siblings().fadeOut();
}
timer=setInterval(autoMove,1000);

let changeFocus=()=>{
    $("#list li").eq(step).addClass("select").siblings().removeClass("select")
}