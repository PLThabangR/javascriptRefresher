//create object
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    seats: ["Driver", "Passenger"]
}

console.log(car["model"]);

//Access object properties will not work with variable with spaces
console.log(car.seats[1]);
console.log(car.make);
console.log(car.model);
console.log(car.year);

//Add and remove objects
const person = {
    
} 

person.name = "John";
person.age = 25;
person.isStudent = true;

console.log(person);

//Delete object property
delete person.isStudent;
console.log("Deleted isStudent",person);

//Convert an array to String and back 
const fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits);   
let results = JSON.stringify(fruits); // '["Apple","Banana","Orange"]'

console.log(typeof results);
// Parse the JSON back into an array
let parsedFruits = JSON.parse(results);
 console.log(typeof parsedFruits);