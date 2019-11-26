var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('public/Webb'));
app.use(express.static('public/Webb/html'));

app.get('/' , function(req, res){
    res.sendfile('public/Webb/html/index.html');
    
})

var server = app.listen(process.env.PORT, function(){
    console.log('Server is up and running at port: ' + server.address().port);
})