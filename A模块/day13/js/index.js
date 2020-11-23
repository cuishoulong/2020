<script>
(function () {
    function computed() {
        // 获取屏幕的宽度
        var win = document.documentElement.clientWidth || document.body.clientWidth;
        // 设计稿的尺寸
        var des = 640;
        // 如果屏幕的宽度>=设计稿的尺寸，我们
        if (win >= des) {
            document.documentElement.style.fontSize ="100px";
            return;
        }
        //设置根元素的字体大小
        document.documentElement.style.fontSize = win / des * 100 + "px";
    }
    computed();
    window.onresize=function(){
      computed();
    }

})();
</script>