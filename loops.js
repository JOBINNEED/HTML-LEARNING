//thee are many types of loop 
//main use of loops is to repeat certain part of code multiple times

//For loop
for(let i=1;i<2;i++)
    {
        console.log("hello");

    }

//While loop
let i=1;
while(i<2)
    {
        console.log("hello");
        i++;
    }
//do while loop
let j=1;
do{
    console.log("hello");
}while(i<3);

//for each loop
//mostly used to itterate for an array
let arr=[1,2,4,5,6,7]
arr.forEach((index,number)=>{console.log(index,":",number)})

//for of loop
//used to itterate over any itterateble objects
for (const iterator of arr) {
    console.log(iterator);
}

//for in 
//used similar to for each
for (const key in arr) {
    console.log(arr[key]);
}
