// pop
Array.prototype.myPop = function () {
    if (this.length == 0) {
        return;
    }
    var item = this[this.length - 1];
    this.length--;
    return item;
}
var ary = [];
ary.myPop();

//reverse
Array.prototype.myReverse = function () {
    var newAry = [];
    for (var i = this.length - 1; i > -1; i--) {
        newAry[newAry.length] = this[i];
    }
    for (var i = 0; i < newAry.length; i++) {
        this[i] = newAry[i];
    }
    return this;
}
var ary = [1, 8, 3, 6];
ary.myReverse();
//shift
Array.prototype.myShift = function () {
    if (this.length == 0) {
        return;
    }
    var item = this[0];
    this.reverse();
    this.length--;
    this.reverse();
    return item;
}
var ary = [1, 2, 3];
ary.myShift();

// unshift
//第一种
Array.prototype.myUnshift = function (...arg) {
    this.reverse();
    arg = arg.reverse();
    for (var i = 0; i < arg.length; i++) {
        this[this.length] = arg[i];
    }
    this.reverse();
    return this.length;
}

//第二种
Array.prototype.myUnshift = function (...arg) {
    var item = [...arg, ...this];
    for (var i = 0; i < item.length; i++) {
        this[i] = item[i];
    }
    return this.length;
}
var ary = [1, 2, 3];
ary.myUnshift(2, 2, 3);

//push
Array.prototype.myPush = function (...arg) {
    for (var i = 0; i < arg.length; i++) {
        this[this.length] = arg[i];
    }
    return this.length;
}
var ary = [1, 2, 3];
ary.myPush(2, 2, 3);

// splice
//一个值就是删除从索引谁开始删除以后的
Array.prototype.mySplice = function () {
    var arL = arguments.length;
    var myDel = [];
    var newAry = [];
    var a1;
    if (arL == 0) {
        a1 = 0;
    } else if (arL == 1) {
    }
    for (var i = 0; i < a1; i++) {
        newAry[newAry.length] = this[i];
    }
    for (var i = a1; i < this.length; i++) {
        myDel.push(this[i]);
        this
    }
    return myDel;
}
var ary = [1, 2, 3];
ary.mySplice(1);


//slice
//一个值时，从索引开始复制以后的
//如果为空或者为0就全部复制  负数的时候就是复制从倒数第几个开始复制
//如果为两个值就是从第一个索引开始复制到第二个索引，但不复制第二个索引
//负数时就是从倒数第几个，复制到倒数第几个
Array.prototype.mySlice = function () {
    var newAry = [];
    var a1;
    var a2;
    if (arguments.length == 0) {
        a1 = 0;
    } else if (arguments.length == 1) {
        if (arguments[0] >= 0) {
            a1 = arguments[0];
        } else {
            a1 = this.length + arguments[0];
        }
    } else {
        if (arguments[0] >= 0 && arguments[1] >= 0) {
            [a1, a2] = [...arguments];
        } else {
            a1 = this.length + arguments[0];
            a2 = this.length + arguments[1];
        }
    }

    for (var i = a1; i < (a2 || this.length); i++) {
        newAry[newAry.length] = this[i];
    }
    // console.log(a2);
    return newAry;
}
var a = [1, 2, 3];
a.mySlice(-2);

//map
Array.prototype.myMap = function (aa) {
    var newAry = [];
    for (var i = 0; i < this.length; i++) {
        var bb = aa(this[i], i);
        newAry[newAry.length] = bb;
    }
    return newAry;
}
var str = [1, 2, 3];
var ac = str.myMap(function (item, index) { });
console.log(ac);

//concat
Array.prototype.myConcat = function (...arg) {
    var newAry = [...this];
    for (var i = 0; i < arg.length; i++) {
        if (Object.prototype.toString.call(arg[i]) == "[object Array]") {
            for (var j = 0; j < arg[i].length; j++) {
                newAry[newAry.length] = arg[i][j];
            }
        } else {
            newAry[newAry.length] = arg[i];
        }
    }
    return newAry;

}
var str = [1, 2, 3, [100]];
var ary = [6, 6];
var ary2 = [1, 9];
var ac = str.myConcat(ary, ary2, 3, { 1: 2 }, "12")
var ac = str.concat(ary, ary2, 3, { 1: 2 }, "12")
console.log(ac);


//toString
Array.prototype.myTostring = function () {
    var str = "";
    for (var i = 0; i < this.length; i++) {
        if (this[i] != undefined) {
            str += this[i];
        }
        if (this.length - i > 1) {
            str += ",";
        }
    }
    return str;
}
var ary = [6, 6];
ary.myTostring();


//join
Array.prototype.myJoin = function (sign) {
    var str = "";
    for (var i = 0; i < this.length; i++) {
        if (this[i] != undefined) {
            str += this[i];
        }
        if (this.length - i > 1) {
            str += sign;
        }
    }
    return str;
}
var ary = [, , , , , , ,];
ary.myJoin("=");


//sort
Array.prototype.mySort = function (fn) {
    var newAry = [];
    for (var i = 0; i < this.length - 1; i++) {
        var aa = fn(this[i + 1], this[i]);
        for (var j = 1; j < this.length; j++) {
            if (aa < 0) {
                if (this[i] > this[j]) {
                    var a = this[i];
                    this[i] = this[j];
                    this[j] = a;
                    j--;
                }
            }
            else if (aa > 0) {
                if (this[i] < this[j]) {
                    var a = this[i];
                    this[i] = this[j];
                    this[j] = a;
                    j--;
                }
            }
        }
    }
    return this;
}
var ary = [1, 8, 2];
ary.mySort(function (a, b) { return a - b });