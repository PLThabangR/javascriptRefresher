let str ="Javascript";


let len = str.length;

console.log(len);

for(let i=0; i<len; i++){
    if ( str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
        console.log("vowel found is ",str[i]);
        break;
    }
}

//find the first and last values
const firstValue = str[0];
const lastValue = str[len-1];
const secondLast = str[len-2]
console.log("First ",firstValue);
console.log(lastValue);
console.log(secondLast);