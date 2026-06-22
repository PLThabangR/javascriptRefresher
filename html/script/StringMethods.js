let str ="        Javascript        "

let len = str.length;

console.log(len);

//trim method
let trimmedStr = str.trim();
console.log(trimmedStr.length);

//toUppder
let strUpper = trimmedStr.toUpperCase();
console.log(strUpper);
//tolowercase
let strLower = trimmedStr.toLowerCase();
console.log(strLower);

//slice(startIndex, endIndex)
//J a v a s c r i p t
//0 1 2 3 4 5 6 7 8 9 10  
let strSlice = trimmedStr.slice(0,4);
console.log(strSlice);