// Personal API Key for OpenWeatherMap API

/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// Personal API Key for OpenWeatherMap API
const apiKey = '&APPID=825652fc273e8a4db2cdff7cc439ec24';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// Event listener to add function to existing HTML DOM element

// document.getElementById('generate').addEventListener('click', generateWeather);

/* Function called by event listener */



/* Function to GET Web API Data*/

async function GetApiData(baseURL, zip, apiKey) {
    console.log(baseURL + zip + apiKey);
    const apiRes = await fetch(baseURL + zip + apiKey);
    try {
        const weatherData = await apiRes.json();
        console.log(weatherData);
        return weatherData;
        // handle error
    } catch (error) {
        console.log('error', error);
    }
}

/* Function to POST data */


/* Function to GET Project Data */