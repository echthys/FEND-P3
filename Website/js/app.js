// Personal API Key for OpenWeatherMap API

/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// Personal API Key for OpenWeatherMap API
const apiKey = '&APPID=825652fc273e8a4db2cdff7cc439ec24';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', getWeatherValues);


/* Function called by event listener */

async function getWeatherValues() {
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    getApiData(baseURL, zip, apiKey)
        .then((data) => {
            postReq("/appendData", { date: newDate, temp: data.main.temp, feeling: feelings });
        })
        .then(insertData)
}


/* Function to GET Web API Data*/

async function getApiData(baseURL, zip, apiKey) {
    const apiRes = await fetch(baseURL + zip + apiKey);
    try {
        const data = await apiRes.json();
        return data;
        // handle error
    } catch (error) {
        console.log('error', error);
    }
}

/* Function to POST data */
const postReq = async (url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const updatedData = await res.json();
        return updatedData;
    } catch (error) {
        console.log('error', error);
    };
}

/* Function to GET Project Data */

const getReq = async (url = '') => {
    const request = await fetch(url);
    try {
        const projData = await request.json();
        return projData;
    }
    catch (error) {
        console.log('error', error);
    }
};

async function insertData() {
    const data = await getReq("/retrieveData")
        .then(function (projData) {
            console.log(projData.temp);
            document.getElementById('date').innerHTML = projData.date;
            document.getElementById('temp').innerHTML = projData.temp;
            document.getElementById('content').innerHTML = projData.feeling;
        })
}