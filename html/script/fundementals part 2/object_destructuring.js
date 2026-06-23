

let person={
    name:"John",
    age:undefined,
    isStudent:true
}

///Destructuring a object
//If undefined is not provided then the value will be zero by default 
const {name:firstName,age=0,isStudent:student} = person;
console.log(firstName,age,student);


let car ={
    make:"Toyota",
    model:"Camry",
    year:2022,
    seats:["Driver","Passenger"],
    lights:{
        front:true,
        back:true
    }
}
//Destructuring a object
const {make, model, year} = car
console.log(make,model,year);

//this is the way to destructure nested objects and arrays inside objects
const {make, model, year, lights, seats,lights:{front,back}} = car

console.log(make,model,year,seats,front,back);