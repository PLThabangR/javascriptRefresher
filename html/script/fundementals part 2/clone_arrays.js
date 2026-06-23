//premitiv and non premitiv data types

//primitive data types  - value cannot change
//string
let name = "John";
//number
let age = 25;
age++;

//boolean
let isStudent = true;
//null
//undefined
//objects
//functions

//non primitive data types - value can change
//array reference data type
let fruits = ["apple", "banana", "orange"];
let myArray2 = fruits;

console.log(fruits);
console.log(myArray2);
//if fruits is changed then myArray2 will also change becuase is referencing the same array 
fruits.push("refernce");
console.log(fruits);
console.log(myArray2);


//We can use a slice method to clone a array
console.log("slice method")
let myArray3 = fruits.slice();
console.log(myArray3);
fruits.push("slice");
console.log(fruits);
console.log(myArray3);


// We came use the spread operator to clone an array
console.log("spread operator")
let myArray4 = [...fruits];
console.log(myArray4);
fruits.push("spread");
console.log(fruits);
console.log(myArray4);


//Using array from
console.log("array from")
let myArray5 = Array.from(fruits);
fruits.push("from");
console.log(fruits);
console.log(myArray5);


//conctat
console.log("concat")
let newArr = [];
console.log(newArr);
 let newArr2 = newArr.concat(fruits);
 console.log(newArr2);
 fruits.push("concat");
 console.log(fruits);
 console.log(newArr2);