var pblModule = (function () {
    let $uls = $("#main ul");
    let getData = function () {
        $.ajax({
            url: "data.txt",
            method: "get",
            success: function (data) {
                data = JSON.parse(data);
                console.log(data);
                render(data);
            }
        })
    }
    let render = function (data) {
        let str = ``;
        data.forEach(item => {
            let str = `        <li>
            <img src="" alt="">
            <p></p>
        </li>`
        })
    }
    //return
    return {
        init() {
            getData()
        }
    }
})()
pblModule.init();