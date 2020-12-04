var fn=function(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

var fn=a=>b=>c=>a+b+c;


var fn=a=>{name:1};
fn();//undefined
var fn=a=>({name:1});
fn();//{name:1}