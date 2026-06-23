// rest parameter in functions

///We use rest paramete becuase we do not know how many arguments will be passed
const add = (num1,...args) => {
    let sum = 0;
    for (let num of args){ 
        sum += num;
    }
    return sum+num1;
};


console.log(add(100,1, 2, 3, 4, 5))

//use rest to concatenate arrays
let arr1 = [1,2,3];
let arr2 = [4,5,6];

const concatArr = (seperator, ...strings) => {
    return strings.join(seperator);
};

const findMax = (...nums) => {
    return Math.max(...nums);
}

console.log(concatArr(" - ","a","b","c"));
console.log(concatArr(" = ",...arr1));

console.log(findMax(1,2,3,4,5,6));
