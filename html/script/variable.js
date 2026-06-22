//declaring variables
console.log("Hello World");

const a = 10;
let  b = 20;
var c = a + b;
console.log(c);

b=4;
 
c = a + b;
console.log(c);

// Scope and Variable
// var , let , const
const i = 150;
function me(){
     for(let i=0; i<10; i++){
         console.log("in scope",i);
     }
     //var i= 20;
    console.log("out of scope",i);
}


 
me();
console.log("out of function",i);
///

let fname;

fname  = "John";
console.log(fname);