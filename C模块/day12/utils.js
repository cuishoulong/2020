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
    function win(attr,value){
        if(value===undefined){
            return document.documentElement[attr]||document.body[attr];
        }
        document.documentElement[attr]=value;
        document.body[attr]=value;
    }
    return {
        offset,win
    }
})()