//assignment operator
let a=5;
let b=6;


// arthimetic operator
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(a*b);
console.log(x++);
console.log(++x);
console.log(y--);
console.log(--y);


//comparision operator
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);
console.log('5'==5);//will be true
console.log('5'===5);//checks the value along with the data type

//logical operator
let alert1=true;
let alert2=false;
console.log(alert1&&alert2);//used for logical and
console.log(alert1||alert2);//logical or
console.log(!alert2);//logical not

//Bitwise Operators

let x=5;//101
let y=7;//111

console.log(x&y);//bitwise and(each individual bit is multiplied with respective position bit)
console.log(x||y);//bitwise or(each individual bit is added with respective position bit)
console.log(~x);//bitwise not (inverts each bit)
console.log(x^y);//bitwise xor
console.log(x<<3);//left shift
console.log(x>>3);//right shift

//ternary operator
let l=true;
let m=false;
(l==m)?console.log("true"):console.log("false");

