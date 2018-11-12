var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('public'))

app.get('/home', function(req, res){
   res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', function(req, res){
   res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', function(req, res){
   res.sendFile(__dirname + '/views/register.html');
});

app.post('/register_members', function(req, res){
   res.sendFile(__dirname + '/views/register_members.html');
});


app.post('/balance_sheet_payable', function(req, res){
   res.sendFile(__dirname + '/views/balance_sheet_payable.html');
});


app.post('/balance_sheet_receivable', function(req, res){
   res.sendFile(__dirname + '/views/balance_sheet_receivable.html');
});

app.post('/review_registration', function(req, res){
   res.sendFile(__dirname + '/views/review_registration.html');
});

app.post('/register_committee', function(req, res){
   res.sendFile(__dirname + '/views/register_committee.html');
});


app.post('/society_home', function(req, res){
   res.sendFile(__dirname + '/views/society_home.html');
});



app.listen(3000);