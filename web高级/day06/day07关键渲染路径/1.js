/* CRP关键渲染路径 
围绕渲染的机制和步骤，去详细的进行每一步的优化，依次来提高页面的渲染速度和运行性能 
*/

/* 
script

defer 和link是类似的机制，不会阻塞GUI渲染，当GUI渲染完成，才会把请求回来的js去渲染
    defer注意：因为defer是先异步请求，等待GUI加载完执行，所以会按照编写时候的依赖顺序执行

async 是变成异步请求，在请求时GUI执行，请求回来后，阻断GUI，执行js，然后GUI执行
    注意：如果多个script添加了async那谁先请求回来，就先执行谁
*/


/* 
批量给dom设置样式
box.style.cssText="width:100px;height:50px;"
*/