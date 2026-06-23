 //spread operetor -> can be use to merge two arrays or objects

 //
 let arr1 = [1,2,3];
 let arr2 = [4,5,6];

 //merging two arrays
 let arr3 = [...arr1,...arr2];
 console.log(arr3);

 //copy an array
 let arr4 = [...arr3]; //shallow copy
 console.log(arr4);
 arr3.push("Hello");//this will not affect arr4

 console.log(arr3);
 console.log(arr4);


 //Spread operator with objects
 let obj1 = {a:1,b:2};
 let obj2 = {c:3,d:4};

 //merging two objects
 let obj3 = {...obj1,...obj2};
 console.log(obj3);

 //copy an object 
 let obj4 = {...obj3};
 obj3.e = "Hello";
 console.log(obj3);
 console.log(obj4);

 