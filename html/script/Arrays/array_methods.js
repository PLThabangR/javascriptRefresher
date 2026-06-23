//More Array Method
//find
const user =[
    {name:'John', age:15},
    {name:'Jane', age:25},
    {name:'Bob', age:35}
] 

const foundUser = user.find(user => user.age === 55);

if(foundUser){
    console.log(foundUser);
}else{
    console.log("User not found");
}


//reverse
const numbers = [1,2,3,4,5,6,7,8,9,10]
// const reversed = numbers.reverse();
// console.log(reversed);

// reverse using for loop
let reversed2=[];
for(let i of numbers){
    reversed2 = reversed2 +i
}

console.log(typeof reversed2);
//fill
//splice