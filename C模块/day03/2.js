var utils = (function () {
    var num = 0;
    function fn1() {
        console.log(1)
    }
    return {
        fn1: fn1
    }
}
)()
console.log(utils.fn1);