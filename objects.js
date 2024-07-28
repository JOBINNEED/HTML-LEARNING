//objects are unordered collection of key value pairs
//there are 5 ways to create an object
let obj={
    name:"satisfies",
    age:18,
    weight:70,
    height:163
};
let obj1=new Object();
obj1.anem="sia";
obj1.age=18;
let obj2=Object.create(obj);
obj2.anem="sia";
obj2.age=18;
//4th method is to create a function that returns an object
function createObj(){

    return {
        name:"satisfies",
        age:18,
        weight:70,
        height:163}
}
//5th method is to use constructor method where we create a function (pascal naming) and use new keyword
function CreateObj(){
        this.name="satisfies",
        this.age=18,
        this.weight=70,
        this.height=163
} 
let obj4=new CreateObj();

//to remove a key from object we use delete keyword
delete obj.name;
// to clone one object to other we have 3 methods
//1st methodis to itterate
//2nd method is to usie assign propert
let obj5=Object.assign({},obj);
//3rd method is to use spread operator
let obj6={...obj}; 
