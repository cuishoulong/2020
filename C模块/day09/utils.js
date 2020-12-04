var utils=(function(){
    function toArray(likeArray) {
        var ary = [];
        for (var i = 0; i < likeArray.length; i++) {
            ary[i] = likeArray[i];
        }
        return ary;
    }
    return {
        toArray:toArray
    }
})()