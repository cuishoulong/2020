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
    fcamelCase = function (all, letter) {/* 将第二个形参小写转大写,第一个形参暂时没发现作用 */
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
        get: function (num) {//根据索引获取对应项，支持正负数，如果不传参的话就是转数组,不改变原数组,获取后就是DOM对象
            return num != null ? (num < 0 ? this[num + this.length] : this[num]) : slice.call(this);
        },
        pushStack: function (elems) {
            /* this.constructor()=myQuery执行 */
            console.dir(this.constructor())
            var ret = myQuery.merge(this.constructor(), elems);
            /*prevObject 是直接回到跟级，就是链式写法中的，第一个
            如$("#box").addClass("active").prevObject 就是直接回到$("#box")
            */
            ret.prevObject = this;
            ret.context = this.context;
            return ret;
        },
        /* merge是传进来a,b两个值，并且把b的值依次加入到a内,然后返回a,可以理解为push,但是与push不同的是merge返回值是a*/
        merge: function (first, second) {/* 主要用来合并数组或类数组,好处是不破坏原来的结构,如果原来是类数组，合并后还是类数组 */
            var len = +second.length,
                j = 0,
                i = first.length;
            while (j < len) {
                first[i++] = second[j++];
            }
            if (len !== len) {//如果second传值没有length那len就是NaN，NaN不等于NaN

                /* 如果second没有length，但他可以便历，那我们就依次便利他，并添加到first后面，相当于push了多个项 */
                while (second[j] !== undefined) {
                    first[i++] = second[j++];
                }
            }
            /* 数组会自动累加长度，但类数组不会，所以手动给他添加 */
            first.length = i;
            return first;//输出first
        },
        each: function (callback, args) {
            return myQuery.each(this, callback, args);
        }
    }

    var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    /* 
    ^ 开头:  
    ?:只匹配不捕获 
    \s* 0到多次的空白符
    (<[\w\W]+>) 分组匹配捕获 <与>没有别的意思
    [\w\W]+ 匹配数字字符下划线和非数字字母下划线 1到多次

    [^>]*除了>以外的任意字符 0到多次

    |或

    #就是单纯的一个#
    ([\w-]+) 匹配捕获任意数字字母下划线与符号-  1到多次
    $结尾

    合起来就是
    只匹配不捕获，以0到多次的空白符+<1到多次的数字字符下划线和非数字字母下划线>+除>0到多次的除>以外的任意字符  或 #+1到多次的任意数字字母下划线与符号-开头
    或
    以0到多次的空白符+<1到多次的数字字符下划线和非数字字母下划线>+除>0到多次的除>以外的任意字符  或 #+1到多次的任意数字字母下划线与符号- 结尾

    注意：
    <1到多次的数字字符下划线和非数字字母下划线>+除>0到多次的除>
    与
    1到多次的任意数字字母下划线与符号-
    是二选一捕获的
    */
    var init = myQuery.fn.init = function (selector, context) {
        var match, elem;
        if (!selector) return this;/* 如果selector为空就return 空实例 */

        if (typeof selector === "string") {
            /* 判断selector是不是一个字符串,以<开头以>结尾长度大于3的字符串 
            */
            if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
                match = [null, selector, null];
                console.log(match);

            } else {
                /*
                如果selector不是<任意>，长度>=3的话，来到这里
                match=正则捕获到的东西，如果捕获到，数组的正常项就是捕获的内容，如果捕获不到就是null
                */
                match = rquickExpr.exec(selector);
            }
            /* -------------------------------------------------------------------- */
            if (match && (match[1] || !context)) {
                /* 
                如果match存在且(match的第一项存在 或 context为空)
                */
                if (match[1]) {
                    /* 如果match[1]不为空 */

                    /*  
                    context=context是否属于myQuery?context[0]:context;
                    输出context
                    */
                    context = context instanceof myQuery ? context[0] : context;
                    console.log(context);
                    myQuery.merge(this, myQuery.parseHTML(
                        match[1],
                        context && context.nodeType ? context.ownerDocument || context : document,
                        true
                    ));

                    // HANDLE: $(html, props)
                    if (rsingleTag.test(match[1]) && myQuery.isPlainObject(context)) {
                        for (match in context) {
                            // Properties of context are called as methods if possible
                            if (myQuery.isFunction(this[match])) {
                                this[match](context[match]);

                                // ...and otherwise set as attributes
                            } else {
                                this.attr(match, context[match]);
                            }
                        }
                    }

                    return this;

                    // HANDLE: $(#id)
                } else {
                    elem = document.getElementById(match[2]);

                    // Check parentNode to catch when Blackberry 4.6 returns
                    // nodes that are no longer in the document #6963
                    if (elem && elem.parentNode) {
                        // Handle the case where IE and Opera return items
                        // by name instead of ID
                        if (elem.id !== match[2]) {
                            return rootmyQuery.find(selector);
                        }

                        // Otherwise, we inject the element directly into the myQuery object
                        this.length = 1;
                        this[0] = elem;
                    }

                    this.context = document;
                    this.selector = selector;
                    return this;
                }

                // HANDLE: $(expr, $(...))
            } else if (!context || context.myquery) {
                return (context || rootmyQuery).find(selector);

                // HANDLE: $(expr, context)
                // (which is just equivalent to: $(context).find(expr)
            } else {
                return this.constructor(context).find(selector);
            }

            // HANDLE: $(DOMElement)
        } else if (selector.nodeType) {
            /* 把原生DOM对象，转换为JQ对象 */
            this.context = this[0] = selector;
            this.length = 1;
            return this;

            // HANDLE: $(function)
            // Shortcut for document ready
        } else if (myQuery.isFunction(selector)) {
            /* 函数类型,$(函数)=$(document).ready(函数) 
            在页面中的DOM加载完以后执行函数内的东西
            */
            return typeof rootmyQuery.ready !== "undefined" ?
                rootmyQuery.ready(selector) :
                // Execute immediately if ready is not present
                selector(myQuery);
        }

        if (selector.selector !== undefined) {
            this.selector = selector.selector;
            this.context = selector.context;
        }

        return myQuery.makeArray(selector, this);
    };
    init.prototype = myQuery.fn;//让init的原型等于myQuery的原型

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