let btnjia = document.getElementsByClassName('jia');
let btnjian = document.getElementsByClassName('jian');
let numb = document.getElementsByClassName('numb')
let price = document.getElementsByClassName('price')
let pri = document.getElementsByClassName('pri');
let price1 = document.getElementById('price1')
let ary = [1, 6.5, 1.5, 2.5, 3.5];
for (let i = 0; i < btnjia.length; i++) {
    price[i].n = ary[i];
    btnjia[i].onclick = function jia() {
        let res = numb[i].innerText;
        res++;
        numb[i].innerText = res;
        pri[i].innerText = res * price[i].n
        allNum.innerText = 0;
        allMon.innerText = 0;
        let arr = [0];
        for (let j = 0; j < btnjia.length; j++) {
            allNum.innerText = Number(allNum.innerText) + Number(numb[j].innerText);
            allMon.innerText = Number(allMon.innerText) + Number(pri[j].innerText);
            if (Number(numb[j].innerText) > 0) {
                arr.push(ary[j])
            }
        }
        price1.innerText = arr.sort(function (a, b) {
            return b - a
        })[0];
        btnjian[i].onclick = function jian() {
            let res = numb[i].innerText;
            if (res > 0) { res--; }
            numb[i].innerText = res;
            pri[i].innerText = res * price[i].n
            allNum.innerText = 0;
            allMon.innerText = 0;
            // let arry = [0];
            let arry = 0;
            for (let j = 0; j < btnjia.length; j++) {
                allMon.innerText = Number(allMon.innerText) + Number(pri[j].innerText);
                allNum.innerText = Number(allNum.innerText) + Number(numb[j].innerText);
                // if (Number(numb[j].innerText) > 0) {
                //     arry.push(ary[j])
                // }
                if (Number(numb[j].innerText) > arr) {
                    arry = Number(numb[j].innerText)
                }
            }
                
            
            // price1.innerText = arr.sort(function (a, b) {
            //     return b - a
            // })[0];
            price1.innerText = arry;
        }
    }
}