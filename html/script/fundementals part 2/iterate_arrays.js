let names = ["John", "Doe", "Jane", "Doe"];

for(let i=0; i<names.length; i++){
    console.log(names[i]);
}

for(let name of names){
    console.log(name);
} 

//Print indexes 
for(let name in names){
    console.log(names[name]);
}

console.log("while loop")
let i =0
while(i<names.length){
    console.log(names[i]);
    i++;
}

let newArr= []

newArr = names.map(name => name.toUpperCase());
console.log(newArr);

console.log("looping using map function")
names.map((name,i) =>{
    console.log(name,i);
})

console.log("looping using filter function")

let filteredNames = names.filter((name)=> 
   name !== "Doe"
)

console.log(filteredNames);