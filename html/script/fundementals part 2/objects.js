//introduction to objects

const person = {
    name: "John",
    age: 25,
    isStudent: true,
    hobbies: ["reading","coding"],
    address: {
        city: "Cape Town",
        province: "Western Cape"
    }
}
//new method of displaying
console.log(person["name"]);

console.log(person);
console.log(person.name);
console.log(person.hobbies[0]);
console.log(person.address.province);

person.address.city = "Durban";
for(let personO in person ){
    console.log(person[personO]);
    
}