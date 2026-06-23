car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    seats: ["Driver", "Passenger"]
}


for(let i = 0 ; i < car.seats.length; i++){
    console.log(car);
}

for(let key in car){
    console.log(car[key]);
}


//Object . keys returns an array of all the keys in the object

console.log(Object.keys(car));

for(let key of Object.keys(car)){
    console.log(key,car[key]);
}

//Array of objects
let cars = [
    {
        make: "BMW",
        model: "Camry",
        year: 2022,
        seats: ["Driver", "Passenger"]
    },
    {
        make: "Toyota",
        model: "Camry",
        year: 2022,
        seats: ["Driver", "Passenger"]
    }
]


for(let car of cars){
    console.log(car.make);
}