(function (global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function (w) {
            if (!w.document) {
                throw new Errow("myQuery requires a window with a document");
            }
            return factory(w);
        }
    } else {
        /*         因为是浏览器环境，所以上面的判断不走，于是执行factory(global) */
        factory(global)
    }
}(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
    /*     三元是global的实参
        这个函数是第一行的factory的实参
        三元是判断是否支持window环境
        函数存放的是一些方法 */

    /* 
    我们可以理解成(function(a,b){}){a,b}
    不过在这里我们用的是(function(a,b){}(a,b))
    意思是一样的
    */


    /* 新建个数组，然后存储一下几个方法*/
    var deletedIds = [];
    var slice = deletedIds.slice;
    var concat = deletedIds.concat;
    var push = deletedIds.push;
    var indexOf = deletedIds.indexOf;
    /* 新建个对象，然后存储一下几个方法*/
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;

    var version = "1.0.0";//版本号
    myQuery = function (selector, context) {
        return new myQuery.fn.init(selector, context);
    }
    fcamelCase = function( all, letter ) {/* 将第二个形参小写转大写,第一个形参暂时没发现作用 */
		return letter.toUpperCase();
	};
    myQuery.fn = myQuery.prototype = {
        myQuery: version,//版本号
        constructor: myQuery,//补全constructor
        selector: "",//暂时没发现用处
        length: 0,//是函数的形参个数
        toArray: function () {//转数组,不改变原数组
            return slice.call(this);
        },
        get: function (num) {//根据索引获取对应项，支持正负数，如果不传参的话就是转数组,不改变原数组
            return num != null ? (num < 0 ? this[num + this.length] : this[num]) : slice.call(this);
        },
        pushStack: function (elems) {
            //搞不懂
            var ret = myQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            ret.context = this.context;
            return ret;
        },
        /* merge是传进来a,b两个值，并且把b的值依次加入到a内,然后返回a,可以理解为push,但是与push不同的是merge返回值是a*/
        merge:function(first,second){
            var len=+second.length,
            j=0,
            i=first.length;
            while(j<len){
                first[i++]=second[j++];
            }
            if(len!==len){//如果second传值没有length那len就是NaN，NaN不等于NaN

                /* 如果second没有length，但他可以便历，那我们就依次便利他，并添加到first后面，相当于push了多个项 */
                while(second[j]!==undefined){
                    first[i++]=second[j++];
                }
            }
            first.length=i;
            return first;//输出first
        },
        each:function(callback,args){
            return myQuery.each(this,callback,args);
        }
    }



    init.prototypr = myQuery.fn;//让init的原型等于myQuery的原型

    var _myQuery = window.myQuery,
        _$ = window.$;
    /* 先存储一下全局的的myQuery(如果没有设置的话默认为undefined)，一会儿可能需要做对比 */

    /* noConflict是转让占用名字的，
    将window.$替换为全局的$,
    如果deep为true的话将window.myQuery也换成全局的_myQuery,
    此时我们以经无法使用常规方法调取myQuery了，如果还要用的话就找一个值接收一下myQuery.noConflict的返回值(myQuery),这样就可以调用了
    */
    myQuery.noConflict = function (deep) {
        window.$ === myQuery ? window.$ = _$ : null;
        deep && window.myQuery === myQuery ? window.myQuery = _myQuery : null;
        return myQuery;
    }

    typeof noGlobal === "undefined" ? window.myQuery = window.$ = myQuery : null;
    /*         
    判断是否是window，在window下typeof noGlobal为"undefined" 
    如果是window的话就给window加一个属性myQuery和$值都为myQuery
    */

    return myQuery;
}))