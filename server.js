//require express
var express = require("express");


var app = express();


var path = require("path");

//body parser for req.body / req.response
var bodyParser = require("body-parser");

//require mongoose for mongo

//use bodyparser
app.use(bodyParser.urlencoded());


//tell app that our static files are in client/static folder
app.use(express.static(path.join(__dirname, "./client/static")));

//tell app that our views are in client/views
// app.set('views',path.join(__dirname,"./client/views"));

//use ejs for our view engine for now
// app.set('view engine', 'ejs');

//require our mongoose configuration 


require('./server/config/routes.js')(app);


app.listen(8017, function() {
    console.log("listening on port 8017");
})