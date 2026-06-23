
for(let i=0; i<5; i++){
    if(i==3){
        continue; //this will make the loop start from the next iteration
    }
    console.log(i);
}

for(let i=0; i<5; i++){
    if(i==3){
        break; //this will stop the loop 
    }
    console.log(i);
}