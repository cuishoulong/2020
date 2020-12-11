/*
let sanmao = new Dog('三毛');
sanmao.sayName();
sanmao.bark();
*/
//=>基于内置的new关键词，我们可以创建Dog的一个实例sanmao，实例可以调取原型上的属性和方法，现在的需求是：自己实现一个_new方法，也能模拟出内置new后的结果
function Dog() { };
function _new(a, b) {
    //=>完成你的代码
    var obj = {
        b: "wangwang",
        __proto__: a.prototype,
    };
    a.prototype.bark = function () {
        console.log(obj.b);
    }
    a.prototype.sayName = function () {
        console.log("my name is" + b);
    }
    return obj;
}
let sanmao = _new(Dog, '三毛');
sanmao.bark(); //=>"wangwang"
sanmao.sayName(); //=>"my name is 三毛"
console.log(sanmao instanceof Dog); //=>true