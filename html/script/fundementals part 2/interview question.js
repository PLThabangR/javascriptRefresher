//iterate objects inside arrays

const products =[
{
    id:1,
    name:"Product 1",
    price:100
},
{
    id:2,
    name:"Product 2",
    price:200
},
{
    id:3,
    name:"Product 3",
      price:300}
]

for(let product of products){
    console.log(product);
}
console.log("for in loop")
for(let product in products){
    console.log(products[product]);
}
//Loop using map
console.log("Using Map")
products.map(product => console.log(product));

//Use forEach product >100
console.log("Using forEach")
products.forEach(product => product.price>100 && console.log(product));

//Use the reduce to calculate the total
const totalPrice = products.reduce((total,product) => total + product.price,0);
console.log(totalPrice);

//desture nested object in arrays
//this is the way to destructure a  objects inside an array
const [{id,name,price},,{price:price3,name:name3,id:id3}] = products


console.log(id,name,price);
console.log(id3,name3,price3);