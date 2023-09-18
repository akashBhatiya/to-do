const express = require("express");
const app = express();
const port = 8000 || process.env.PORT;

//middlewares
app.use(express.static('assets'));

//viewengine setups for express with ejs
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded());

//router connection
app.use('/',require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log("Error occured in server listening");
    }
    console.log("Server is running successfully");
})
