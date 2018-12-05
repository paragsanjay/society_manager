var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('public'))
app.set("view engine","jade")
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
/*
app.get('/login', function(req, res){
con.query("SELECT * FROM info", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.sendFile(__dirname + '/views/login.html');
});
  });*/

app.get('/login',function(req,res){

con.query('select * from info', function (err, recordset) {
            console.log(recordset);
            if (err)
                console.log(err)
            else
                res.render('login', { login: recordset });

        });
});


  app.get('/hello', function (req, res) {
  res.render('hello', { title: 'Hello', message: 'Hello there!' })
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
  var reg_no=req.body.reg_no;
  var address=req.body.address;
  var phno=req.body.phno;

console.log(req.body);
  console.log('You sent the name "' + name+'".\n');


  var sql = "INSERT INTO info (name,reg_no,address,phno) VALUES ('"+name+"', '"+reg_no+"','"+address+"','"+phno+"')";
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

