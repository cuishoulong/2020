Array.prototype.myForeach=function(fn){
    let self=this;
    for(var i=0;i<self.length;i++){
        fn(self[i],i)
    }
};
let a=[1,2,3];
a.myForeach((item,index)=>{
    console.log(item,index);
})
// a.forEach((item,inedx)=>{
//     return item;
// })