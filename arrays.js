//arrays in javascript can store multiple data types so it is no more homogenous 
//2 ways to create array, one is declaring and other is using new keyword
let arr=[1,2,3,4,5,6,7];
let arr1= new Array(1,2,3,4,5,6,7,8);
// to acces array element it is same as c/c++
console.log(arr[0] ,arr1[0]);//arrays are from 0 index
//insertion of elements in array can be from bth directions as js is dynamic typing language
arr.push(5);//insertion of elements at end
arr1.unshift(0);//to insert element at the start
//array.splice(startIndex, deleteCount, item1, item2, ...); //is used to add remove and modify content in a an array

//filter property is used to split or filter out an array based on a certain property
let evennumbers=arr1.filter((number)=> {return number%2==0});

//reduce function is used to reduce the enitre content of arry into a single variable
//there are two concepts one is accumilator and the other is curr, if initialized then acc and curr start at same point if not than curr is at index 1 and acc is at 0
let sum=arr.reduce((acc,curr)=>{return acc+curr},0);

//map function is used to manipulate each and every data present in an array
let arr2=arr.map((number)=>{return number+2});