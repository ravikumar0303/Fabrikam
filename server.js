var express = require('express');
var path=require('path');
var app = express();

//server configuration
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/index.html'));
 });
 
 app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/script/app.js'));
 });


app.get('/hello', function (req, res) {
    var person={firstName:'Ravi',lastName:'kumar',age:22};
    res.send(person);
});

var server = app.listen(0303, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://localhost:0303", host, port)
});

  
