//去掉最大值最小值，求平均数
function average() {
    var res = Array.from(arguments).sort(function (a, b) { return a - b });
    res.pop();
    res.shift();
    var total=0;
    for(var i=0;i<res.length;i++){
        total+=res[i];
    }
    return total/res.length;
}
average(1, 8, 5, 2, 10);

//2 求最大数，最小数，算总和减去最大最小，长度-2，相除
function average() {
    var max=Math.max(...arguments);
    var min=Math.min(...arguments);
    var total=0;
    for(var i=0;i<arguments.length;i++){
        total+=arguments[i];
    }
    return (total-max-min)/(arguments.length-2);
}
average(1, 8, 5, 2, 10);

//3
function average(...ary) {
    var ary=ary.sort(function(a,b){return a-b});
    ary.pop();
    ary.shift();
    var ac=ary.join("+");
    return eval(ary.join('+')) / ary.length;
}
average(1, 8, 5, 2, 10);


var ary=[{age:10},{age:20},{age:1}];
ary.sort(function(a,b){
    console.log(a,b);
})
var ary=[{age:10},{age:20},{age:1}];
ary.sort(function(a,b){
    console.log(a,b);
	//第一次{age:10},{age:20}
	//第二次{age:20},{age:1}
	// 我们让它根据age排序
	return a.age-b.age;
})
console.log(ary);//