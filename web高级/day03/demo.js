function Fn(n, m) {
    n = n || 0;
    m = m || 0;
    this.x = n;
    this.y = m;
    this.getX = function () {
        console.log(this.x);
    }
    return n + m;
}
Fn.prototype.sum = function () {
    console.log(this.x + this.y);
}
Fn.prototype = {
    getX: function () {
        this.x += 1;
        console.log(this.x);
    },
    getY: function () {
        this.y -= 1;
        console.log(this.y)
    }
}
let f1 = new Fn(10, 20);
let f2 = new Fn;
console.log(f1.getX === f2.getX);
console.log(f1.getY === f2.getY);
console.log(f1.__proto__.getY === Fn.prototype.getY);
console.log(Fn.prototype.getXX === f2.getX);
console.log(f1.constructor);
f1.getX()
Fn.prototype.getX()
f2.getY()
Fn.prototype.getY()
f1.sum()
/////
////
var name = 'window'
function A() {
    console.log(1, this.name);
    name = this.name;
}
function B() {
    name = this.name;
        console.log(2, this.name)
}
A.call(B, 10)//1 
A.call.call.call(B);
Function.prototype.call(B);
Function.prototype.call.call.call(B)



var name = 'window'
function A() {
    console.log(1, this.name);
    name = this.name;
}
function B() {
    name = this.name;
        console.log(2, this.name)
}

Function.prototype.call(B);//
////

var print = function () {
    alert(1);
}
function Fn() {
    print = function () {
        alert(2)
    };
    return this
};
function print() {
    alert(3)
};
Fn.prototype.print = function () {
    alert(4)
};
Fn.print = function () {
    alert(5)
}
print();//
Fn.print();//
Fn().print();//
new Fn.print()//
new Fn().print();//



var name = 'window';
function fn() {
    console.log(this.name)
}
var obj = {
    name: 'obj',
    fn: () => {
        console.log(this.name)
    }
}
fn();//"window"   
obj.fn();//"window"
fn.call(obj);//"obj"
window.onload = function a () {
    fn();//window
    obj.fn();//windw
    alert(1);
};
fn.bind(obj)//无

var b=[4, 4, 5, 6, 7, 6];
var a = new Set(b)
a = [ ...a ]
console.log(a,b)