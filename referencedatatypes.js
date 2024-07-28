//objects
let sai={
    name:"sai madhav",
    age:18,
    weight:72,
    height:163,
    grade:()=>{
        console.log("All Good",this.name);
    }
}
//two ways to access the lements of an object
console.log(sai.name);
console.log(sai['name']);
//to delete element of an object
delete sai.age;
//array
let arr=[1,2,3,4,5,6,7];//data can be of multiple types
console.log(arr[2]);

//functions
//3 methods to create function
function nameis(name){
    console.log("the name is ",name);
}
let naemis=function(name){
    console.log("the nam is ",name);

}

//arrow function is the third method
let getname=(name)=>{
    console.log("the name is ",name );
}