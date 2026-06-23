//Array destructuring

let fruits = ["apple", 4, "orange","grapes"];

//extract values from array
let [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3); 

//rest destructuring 
let [f1, f2, ...rest] = fruits; //the will be stored as a array
console.log(fruit1, fruit2, rest);

console.log(Array.isArray(rest)); // verify that rest is an array
console.log(typeof f1,typeof f2); // verify that f1 and f2 data types