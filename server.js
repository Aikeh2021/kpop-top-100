const express = require('express');
const path = require('path');

//Creating an instance of express
const app = express();
//Port
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.urlencoded({ extended:true}));
app.use(express.json());


//Test route
app.get("/api/config", (req, res) => {
    res.json({
        success: true
    });
});

//Serving up the client index file
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

//Serving up the static files
app.use(express.static("client/build"));

//Listening in on the port
app.listen(PORT, () => {
    console.log("WE LIVE BABY!");
});