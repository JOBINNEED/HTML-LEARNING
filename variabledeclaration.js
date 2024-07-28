//3 ways to declare a variable 
var x=20;
//var is a function scoped and any variable declared using var can be revalued and reassigned
let y=20;
//let is a block scoped, reassignment is possible but not redefination
const z=20;
//const declaration doesn't allow reassignment and revalue. All variables initialized by constmust be declared with a value. Exception for arrays and objects
console.log(x,y,z);