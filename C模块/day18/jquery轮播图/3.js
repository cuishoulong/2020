function attr(name, value) {
    let all = document.getElementsByTagName('*');
    all = Array.from(all);
    let ary = [];
    all.forEach((item, index) => {
        let a = item.getAttribute(name);
        if (a !== null) {
            a = a.split(' ');
            console.log(a);
            a.forEach((item2, index) => {
                if (item2 == value) {
                    return ary.push(item);
                }
            })
        }
    })
    return ary
}
var res = attr('class', 'box3')
console.log(res);