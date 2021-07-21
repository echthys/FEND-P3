// Required Modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 8000;

const server = app.listen(port, listening);

function listening() {
    console.log(`Running server on port: ${port}`);
};

// Setup empty JS object to act as endpoint for all routes
projectData = {};

//Get Requests

app.get("/retrieveData", (req, res) => {
    console.log("Getting project data");
    res.send(projectData);
})

//Post Request 

app.post('/appendData', (req, res) => {
    console.log(`Body: ${req.body}`);
    projectData = req.body;
    res.send(projectData);
});


