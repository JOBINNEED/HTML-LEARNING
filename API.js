//an API serves as an intermediary that facilitates the exchange of data and functionality between different software components, enabling seamless integration and interoperability.
// Fetching Data from a REST API
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));
//Integrating with a Weather API
const apiKey = 'YOUR_API_KEY';
const city = 'New York';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching weather data:', error));

//The async keyword is used to define a function as asynchronous. When a function is declared with the async keyword, it always returns a Promise. Inside an async function, we can use the await keyword to pause the execution of the function until a promise is settled (resolved or rejected).
async function myAsyncFunction() {
    try {
        const result = await asyncOperation();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
//Making a GET Request
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
//Making a POST Request
const postData = {
    username: 'example',
    password: 'password123'
};

fetch('https://api.example.com/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

