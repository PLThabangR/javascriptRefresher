//Function is a reusable block of code that performs a specific task

function me(){
    console.log("Hello World");
}
me();
//functions support the DRY approuch (Don't Repeat Yourself)

function add(a,b){
    return a+b
}
let result = add(10,20);

console.log(result);

//traditional function
function add1(a,b){
    return a+b
}

console.log(add1(70,20));
///arrow function  
const add2 = (a,b) => a+b

console.log(add2(10,30));

//function expression
const add3 = function(a,b){
    return a+b
}
console.log(add3(50,20));