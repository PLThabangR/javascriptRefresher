//Hoisting is a JavaScript mechanism where variables and functions are moved to the top of their scope before code execution.
//variable and function at the top of the scope

// Access a funcion before it is defined
add(5,2);

function add(a,b){
    let sum = a+b;
    console.log(sum);   
}

//try to access a variable before it is defined
console.log(a);  // this will show undefined not show an error
var a = 10;

