function linear(t, d, c, b) {
    /* 
    t:time已经运动的时间
    d:duration:总时间
    c:change总距离
    b:begin起始的位置
    */
    return t / d * c + b
    // 返回值就是当前元素的需要到达的位置
  }