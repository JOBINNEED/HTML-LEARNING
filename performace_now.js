//in Js we can use performace.now()to get the exact time of excecution of the code at that point
//comercially it is used to check the amount of time a particular section of code takes 
let startTime=performance.now();
function add(a,b){
    return a+b;
}
let sum=add(5,2);
console.log(sum);
let stoptime=performance.now();
console.log(stoptime-startTime);