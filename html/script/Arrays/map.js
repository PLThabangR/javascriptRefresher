//Map
//Square number
const numbers = [1,2,3,4,5,6,7,8,9,10]
const squared = numbers.map(num => num * num);
console.log(squared);

// make first letter Uppercases
const names = ["John", "Doe", "Jane", "Doe"];
const upperNames = names.map((name,i) => name.charAt(0).toUpperCase()+name.slice(1));
console.log(upperNames);

//Extract property
const User = [
    {name:'John', age:15},
    {name:'Jane', age:25},
    {name:'Bob', age:35}
]

const userNames = User.map(user => user.name);
console.log(userNames);