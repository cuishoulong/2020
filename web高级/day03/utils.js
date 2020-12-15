let utils = (function () {
    //需求:一个超级复杂的业务函数，而且会被执行N次，后续不想让他再判断，就基于惰性思想，函数重构一下，实现性能优化
    function getCss(ele, attr) {
        if (window.getComputedStyle) {
            getCss = function (ele, attr) {
                return window.getComputedStyle(ele)[attr]
            }
        } else {
            getCss = function (ele, attr) {
                return ele.currentStyle[attr]
            }
        }
        return getCss(ele,attr);
    }

    return {
        getCss
    }
})()