// charAt 获取指定索引的字符   区别在于索引超出时，charAt为"",直接用索引为undefined
var str = "abc";
console.log(str.charAt(0));//"a"
console.log(str[0]);//"a"
console.log(str.charAt(100));//""
console.log(str[100]);//undefined

//charCodeAt(索引) 获取字符串中指定索引的ASCII码值(十进制)
var str = "abc";
console.log(str.charCodeAt(1));//"98"
//substring与slice一个效果但是它不能用负数
var str = "abc";
console.log(str.substring(-2, -1));//没效果

//substr(n,m)  从索引n开始，截取m个
var str = "abc";
console.log(str.substr(0, 2));//"ab"
console.log(str);//"abc"

//replace(n,m) 替换 n为被替换的字符 m时替换的字符
var str = "abc";
console.log(str.replace("a", "b"));//"bbc"
console.log(str);//"abc"

//split("分隔符")  把字符串按照指定的分隔符分割成数组
var str = "1:2:3"
console.log(str.split(":"));//["1","2","3"]

// 【时间字符串处理】把下面的字符串变成 "2019年08月18日 12时32分18秒"
var str = "2019-8-18 12:32:18";
var res = str.split(" ");
console.log(res);
var leftAry = res[0].split("-");
console.log(leftAry);
var rightAry = res[1].split(":");
console.log(rightAry);

function zero(num) {
    if (num < 10) {
        return "0" + num
    }
    return num;

}
console.log(zero(leftAry[0])+"年"+zero(leftAry[1])+"月"+zero(leftAry[2])+"日"+""+zero(rightAry[0])+"时"+zero(rightAry[1])+"分"+zero(rightAry[2])+"秒")


 /* 
        var  str ="https://www.baidu.com?name=zhufeng&age=10&id=14";
        {
            name:"zhufeng",
            age:10,
            id:14
        }
       */

      var  str ="https://www.baidu.com?name=zhufeng&age=10&id=14";
      var res=str.split("?")[1].split("&").join("=").split("=");
      console.log(res);
      var obj={};
      for(var i=0;i<res.length;i++){
        if(i%2==0){
            obj[res[i]]=res[i+1];
        }
      }
     console.log(obj);

