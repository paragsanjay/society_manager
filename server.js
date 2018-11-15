var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('public'))
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "society"
});



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
console.log("Running at Port 3000");


 var name=req.body.name;
  var number=req.body.number;
  var address=req.body.address;
  var no=req.body.no;

console.log(req.body);
  console.log('You sent the name "' + name+'".\n');


  var sql = "INSERT INTO info (name, Email,City ,Pincode) VALUES ('"+name+"', '"+number+"','"+address+"','"+no+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    });
res.sendFile(__dirname + '/views/register_committee.html');
});



app.post('/society_home', function(req, res){
   res.sendFile(__dirname + '/views/society_home.html');
});

app.listen(3000);

