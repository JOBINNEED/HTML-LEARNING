// var age=25;

// if(true)
//     {
//         console.log(age);
//     }

// function solve()
// {
//     var age=25;
//     console.log(age);
// }

// solve();
// var x=10;
// var x=20;
// console.log(x);
// let a=20;
// console.log(a);
// let a =20;
// const a=20;
 
// console.log(a);
// let x=20;
// x="sai";
// x=true;
// let x=null;


// for(let i=5;i>0;i--)
//     {
//         console.log(i);
//     }
// let i=1;
// while(i<=5)
//     {
//         console.log(i);
//         i++
//     }
// let i=1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=5);
// let firstname="sai";
// let lastname="yanduri";
// let name= firstname+lastname;
// console.log(name);
// let name=`Sri sai 
// Madhava Teja
// Yanduri`;
// console.log(name);
// let firstname="sai";
// let lastname="yanduri";
// let Name=`${firstname} ${lastname}`;
// console.log(Name);
// let Name= new String("Sai Madhava Teja");
// console.log(Name);
// let firstname="sai";

// console.log(firstname.toUpperCase());
// function printf()
// {
//     console.log("Sai Madhava Teja");
// }
// printf();
// function add(num1,num2)
// {
    
//     console.log(num1+num2);
// }
// function add(num1,num2)
// {
    
//    return num1+num2;
// }
// let sum=add(2,3);
// console.log(sum);
// let ans= function power(x,y)
// {
//     return x**y;
// }
// console.log(ans(2,10));

// function power(x,y)
// {
//     return x**y;
// }

// let e=power(2,10);
// console.log(e);

// let ans=(x,y)=>
// {
//     return x**y;
// }
// console.log(ans(2,10));


// let obj={
// name: "sai",
// age:18,
// weight:70,
// greet: function(){
//     console.log("hello world");
// }
// };
// console.log(obj);
// obj.greet();
// console.log(typeof(obj));
// let obj1=obj;


// let arr=[1,2,3,4,5,6];
// let arr2=[1,"sai",true];
// console.log(arr);
// console.log(arr2);

// let brr= new Array("sai",1,true);
// console.log(brr);

// let arr=[10,50,30,20];
// arr.push("madhava");
// arr.pop();
// arr.shift();
// arr.unshift(1);
// console.log(arr.slice(1,4));
// arr.splice(1,0,"sai madhav");
// let ansarr=arr.map((number)=>{return number**2});
// let ans=arr.filter((number)=>{
//     if(number%2==0)
//         return true;
//     else
//        return false;
// });
// console.log(ans);
// let ans=arr.reduce((acc,crr)=>{
// return acc+crr;
// },0);
// console.log(ans);

// arr.sort();
// console.log(arr.indexOf(10));
// console.log(arr);

// arr.forEach(element => {
//    console.log(element) 
// });


// let obj={
// name: "sai",
// age:18,
// weight:70,
// greet: function(){
//     console.log("hello world");
// }
// };
// for (const key in obj) {
//     console.log(key ,"",obj[key]);
// }

// Name("sai");
// function Name(sia)
// {
// console.log(sia);
// }
// console.log(x);
// var x;
// x=25;
// sayhello
// let sayhello=function(){
//     console.log("Hello");
// }
// const obj1= new Human()
// class Human{

// }

// let greet=function(){
//     console.log("Wagwan my G");
// }
// greet();

//global scope
// var age=25;

// class Human{
//     age=20;
//     #wt=80;
//     ht=180;

//     walking(){
//         console.log("i am walking");
//         console.log(this.#wt);
//     }
//     running(){
//         console.log("running");
//     }
//     get fetchweight(){
//         return this.#wt;
//     }
//     set modifyweight(val)
//     {
//         this.#wt=val;
//     }
// }

// let obj= new Human();

// console.log(obj.age);
// obj.walking();
// obj.running();

// class Human{
//     age;
//     #wt=80;
//     ht;
//     constructor(newage,newheight)
//     {
//         this.age=newage;
//         this.ht=newheight;
//     }
// }

// let obj=new Human(21,163);
// console.log(obj);

// function sayname(name="sai madhava teja")
// {
//     console.log("my name is :", name);
// }
// sayname();

// console.log("Sai");
// console.log(Math.PI);
// console.log(Math.max(1,2,3,4,5,6,7));
// console.log(Math.floor(1.9));
// console.log(Math.round(1.9));
// console.log(Math.ceil(1.4));
// console.log(Math.abs(-20));
// console.log(Math.random());

// let curr=new Date();
// let date=new Date("septemebr 21 2005 10:00");
// let newdate= new Date(2005,8,21,22);
// console.log(newdate.getFullYear());
// newdate.getFullYear();

// let obj={
// age:12,
// weight:60,
// ht:180
// };

// // console.log(obj);
// // obj.color="white";
// // console.log(obj); 
// // let obj2={...obj};
// // console.log(obj2);
// // obj2.first="sup";
// // console.log(obj2);
// // console.log(obj); 
// let obj1=Object.assign({},obj);
// console.log(obj1);

// try{
//     console.log("try blocks start here");
//     // console.log(x);
//     console.log("end of try block");
// }
// catch(e){
//     console.log("catch block starts here");
//     console.log("Your error: ",e);
// }
// finally{
//     console.log("This is finally block");
// }

// try{
//     console.log(x);

// }
// catch(err){
//     throw new Error("First declare the variable and then use the variable");
// }

// let errorcode=100;
// if(errorcode==100)
//     {
//         throw new Error("Invalid Json");
//     }

// document.getElementById('fpara');
// document.getElementsByClassName('text');
// document.getElementsByTagName('p');

document.querySelector('#fpara');
document.querySelector('.text');
document.querySelector('h1');