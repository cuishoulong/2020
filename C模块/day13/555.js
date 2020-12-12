function Modal(element) {
    element = element || document;
    this.element = element;
}
Modal.prototype.show = function () {
    this.element.style.display = 'block';
}
Modal.prototype.hide = function () {
    this.element.style.display = 'none';
};
Modal.position = {
    x: 100,
    y: 200
};
Modal.setPosition = function (x, y) {
    this.position = {
        x: x,
        y: y
    };
};
let m = new Model(document.body);


class Model {
    constructor(element) {
        element = element || document;
        this.element = element;
    }
    show() {
        this.element.style.display = 'block';
    }
    hide() {
        this.element.style.display = 'none';
    };
    static position = { x: 100, y: 200 };
    static function(x, y) {
        this.position = {
            x: x,
            y: y
        };
    };
}
let m = new Model(document.body);


/*分析下面的changeThis方法该如何实现？*/
Function.prototype.changeThis = function changeThis(obj, ...arg) {
    //=>实现你的代码
    obj["total"] = eval(arg.join("+"));
    return obj;

};
let obj = {
    name: 'Alibaba'
};

function fn(x, y) {
    this.total = x + y;
    return this;
}
let res = fn.changeThis(obj, 100, 200); //res => {name:'Alibaba',total:300} 


/*编写unique方法，实现如下的效果：先去重后排序*/
let ary = [12, 23, 12, 13, 13, 12, 23, 14, 8];
ary.unique().sort((a, b) => a - b); //=> 最后的ary等于[8,12,13,14,23]

Array.prototype.unique = function unique() {
    for (var i = 0; i < this.length - 1; i++) {
        for (var j = 1; j < this.length; j++) {
            if (this[i] == this[j]) {
                this.splice(j, 1);
                j--;
            }
        }
    }
    return this;
}


let utils = (function () {

    function toArray(...arg) {
        return arg;
    };

    return {
        toArray
    };
})();
let ary = utils.toArray(10, 20, 30);
// ary=[10,20,30] 
ary = utils.toArray('A', 10, 20, 30);
// ary=['A',10,20,30]


let ary = [1,2,3,[4,5,6,[7,8,[9,0]]]];
    
// [1,2,3,4,5,6,7,8,9,0]
let newstr=ary.toString();
ary.splice(0);
for(var i=0;i<newstr.length;i++){
    ary[i]=Number[newstr[i]];
}
