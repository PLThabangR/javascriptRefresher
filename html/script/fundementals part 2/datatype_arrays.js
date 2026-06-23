//introduction of arrays
//array is a collecrtion of items
//arrays are used to store multiple values in a single variable

let myArray =[1,2,3,4,5];

console.log(myArray);

let myArray2 = ["John", "Doe", 25, true];

console.log(myArray2);

///methods on arrays

//push
myArray2.push("Hello"); //add an item to the end of the array
console.log(myArray2);
//pop
myArray2.pop(); //removes the last item from the array
console.log(myArray2);
//shift 
myArray2.shift(); //removes the first item from the array
console.log(myArray2);
//unshift
myArray2.unshift("Thabang"); //add an item to the beginning of the array
console.log(myArray2);


//**************Useful Array Methods */

let fruits =  ["Aplle", "Banana", "Orange", "Mango"];
console.log(fruits);
//Check this is Array
console.log(Array.isArray(fruits));

let len = fruits.length;
console.log(len);

let findBanana = fruits.indexOf("Banana");
console.log("Index of banana is ",findBanana);

let includesOrange = fruits.includes("Orang");
console.log("Is Orange in the array ",includesOrange);

//slice this does not modify the array
let sliceFruits = fruits.slice(1,3); //start from index 1 and remove 2 items
console.log("After slice",sliceFruits);  



//splice this modify the original array
let newFruits =    fruits.splice(1,2); //start from index 1 and remove 2 items
console.log("After splice",newFruits);


//concat you can combine two arrays without modifying the original

let arr2 = [4,5,6];
let arr3 = fruits.concat(arr2);
console.log("Concated array",arr3);

//join you can combine two arrays
let arr4 = [1,2,3];

// Create a string from an array using the join method
let strFruits = fruits.join(", ");
console.log("fruit array as string",strFruits);
console.log(typeof strFruits);

//premitiv and non premitiv data types

//primitive data types  - value cannot change
//string
let name = "John";
//number
let age = 25;
//boolean
let isStudent = true;
//null
//undefined
//objects
//functions