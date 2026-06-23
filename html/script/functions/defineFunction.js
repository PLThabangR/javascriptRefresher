//better way to define functions
//1. Check number is odd or even
function evenOdd(num){
    if(num%2===0){
        console.log("Number is even");
    }
    else{
        console.log("Number is odd");
    }
}
//function call
evenOdd(10);
evenOdd(11);


// better way to define a function

const  multiply = (arr1) => 
{  
     for (let i=0; i<arr1.length; i++){
    arr1[i] = arr1[i]*2
}
    return arr1;
}
let arr = [1,2,3,4,5];
let multipliedArr = multiply(arr);

console.log(multipliedArr);