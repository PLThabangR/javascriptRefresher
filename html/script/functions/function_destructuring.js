
const person ={
    name:"John",
    age:30,
    isStudent:true
}


const userDetails = ({name,age}) => {
    console.log(name,age);
}

userDetails(person);