//there are three methods of creatung an asynchronous code
//1st method is using 
setTimeout(()=>{
    console.log("Hello");
},2000);//we dont call the function in the setTimeout same goes for events
//the time is written in milliseconds and this code will be excecuted after 2 sec and in the mean time other part of the codes will be excecuted
//return type of settimeout is a TimeId which is useed to cleartimeout
const timeoutId = setTimeout(() => {
    console.log("This message won't be displayed");
}, 500);

clearTimeout(timeoutId); // Cancel the scheduled timeout
let text=prompt("Type your name");
//callback functions are functions that are an argument for another function
function getdata(dataid,getanother)
{
    console.log("data", dataid);
    getanother();
}
getdata(52,()=>{
    getdata(53);
})

function fetchData(callback) {
    // Simulated asynchronous operation
    setTimeout(() => {
        const data = "Data fetched successfully";
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log(`Processing data: ${data}`);
}

fetchData(processData);
//callback hell is when we pass one function to another function and so on forming 
//in server client system of operatiotions everything works based on request and response system
//the uses of promisses is more when we fetch datat through third part services 
//as fetching data might take time we use promises which instead of waiting till the data is being returned gives the client a promise stating two argument on when the requested service is succesful and other for when it is not being fulfilled
let xyz=new Promise((resolve,reject)=>{
    let x=1;
    if(x==1)
        resolve("HI there");
    else
     reject("Hi my G");

})
myPromise
    .then((result) => {
        console.log(result); // Operation completed successfully
        return anotherPromise();
    })
    .then((anotherResult) => {
        console.log(anotherResult); // Another operation completed successfully
    })
    .catch((error) => {
        console.error(error); // Handle errors
    });

//The Promise.all() method allows us to wait for multiple Promises to complete simultaneously. It returns a single Promise that resolves when all of the input Promises have resolved, or rejects if any of the input Promises reject.
    const promise1 = fetch('https://api.example.com/data1');
const promise2 = fetch('https://api.example.com/data2');

Promise.all([promise1, promise2])
    .then((responses) => {
        // Handle responses
    })
    .catch((error) => {
        console.error(error); // Handle errors
    });

//the async/await syntax provides a more concise and readable way to work with Promises, making asynchronous code appear synchronous.
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error); // Handle errors
    }
}

fetchData();
