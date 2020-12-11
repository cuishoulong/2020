let utils = (function () {
    function offset(ele) {
        let left = ele.offsetLeft;
        let top = ele.offsetTop;
        let parent = ele.offsetParent;
        while (parent) {
            left += (parent.offsetLeft + parent.clientLeft);
            top += (parent.offsetTop + parent.clientTop);
            parent = parent.offsetParent;
        }
        return {
            left,
            top
        }
    }
    //封装一个方法专门用来设置或者浏览器的某些属性,针对body的
    function win(attr, value) {
        if (value === undefined) {
            return document.documentElement[attr] || document.body[attr];
        }
        document.documentElement[attr] = value;
        document.body[attr] = value;
    }
    //封装设置或者获取css样式的一些方法 
    //查找值 
    function getCss(ele, attr) {
        var value = null;
        if ("getComputedStyle" in window) {
            value = getComputedStyle(ele)[attr];
        } else {
            value = ele.currentStyle[attr];
        }
        //为了方便运算我们将几个常用的改成数字，因为本来的是字符串，我们把它的单位也去掉
        var reg = /^(width|height|padding|magrin|opacity|left|top|left)$/;
        if (reg.test(attr)) {
            value = parseFloat(value);
        }
        console.log(value);
        return value;
    }

    //赋值
    function setCss(ele, attr, value) {
        /* 
        1.先确定当前的样式需不需要单位
        2.再确定当前样式,用户给有没有加单位
        */
        //    console.log(ele,attr,value)
        var reg = /^(width|height|padding|magrin|left|top|left)$/;
        if (reg.test(attr)) {
            var number = parseFloat(value); //提取数字
            ele.style[attr] = number + "px";
        }
        ele.style[attr] = value;
    }
    //多个值赋值
    function setGroupCss(ele, obj) {
        for (var key in obj) {
            if (!obj.hasOwnProperty(key)) {
                return
            }
            setCss(ele, key, obj[key])
        }
    }
    //根据值判断意图
    function css() {
        let [ele, attr, value] = arguments;
        if (arguments.length == 2) {
            if (typeof attr == "object") {
                setGroupCss(ele, attr);
            } else {
                getCss(ele, attr);
            }
        } else if (arguments.length == 3) {
            setCss(ele, attr, value);
        } else {
            return;
        }
    }
    return {
        offset, win,setCss,getCss,css,setGroupCss
    }
})()