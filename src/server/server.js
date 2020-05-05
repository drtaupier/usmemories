//Dotenv
require('dotenv').config();
const path = require('path');
//Configure Request
const Request = require('request');
//Express to run server and routes
const express = require('express');
//Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware */
app.use(bodyParser.urlencoded( {extended: false } ));
app.use(bodyParser.json());
//Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//Initialize the main project folder
app.use(express.static('./dist'));
app.use(express.static('public'));

//Get route
app.get('/', (req,res)=>{
    res.sendFile('dist/index.html')
})

app.post('/getCursos', (req,res)=>{
    readJSONFile("./src/server/precios.json", function (err, json) {
        if(err) { throw err; }
        res.send(json);
      });
});

function readJSONFile(filename, callback) {
    require("fs").readFile(filename, function (err, data) {
      if(err) {
        callback(err);
        return;
      }
      try {
        callback(null, JSON.parse(data));
      } catch(exception) {
        callback(exception);
      }
    });
  }

const port = 3000;
const server = app.listen(port, listening);

function listening(){
    console.log(`running on localhost: ${port}`);
}