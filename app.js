const express = require('express');     
const app = express();
const bodyParser = require("body-parser");
const blockRoutes = require('./api/routers/block');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());   //used for for ease to parse body in JSON 

//this part to Handl CORS on the browsers  
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

//Midleware for /block route
app.use('/block', blockRoutes);
//error handling and return JSON response 
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
module.exports = app;