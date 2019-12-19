const express = require('express');
const mysql = require('mysql'); 
const bodyParser = require('body-parser'); 

const app = express();

const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  database : process.env.MYSQL_DATABASE,
  password : process.env.MYSQL_ROOT_PASSWORD
});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
  var q = 'SELECT COUNT(*) as count FROM users';
  connection.query(q, function (error, results) {
    if (error) throw error;
    var count = results[0].count;
    res.render("home", {count});
  });
});

app.post('/register', function(req,res){
 var person = {email: req.body.email};
 connection.query('INSERT INTO users SET ?', person, function(err, result) {
 console.log(err);
 console.log(result);
 res.redirect("/");
 });
});

app.listen(8080, function () {
 console.log('App listening on port 8080!');
});
