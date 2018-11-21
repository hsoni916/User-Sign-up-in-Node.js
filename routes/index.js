var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('/LoginPage1.html');
  res.render('index', {  });
});

var express = require("express");
var app = express();
var Parse = require('body-parser');
app.use(Parse.json());
app.use(Parse.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ListOfUsers");
var userschema = new mongoose.Schema({
 ID:  String,
 Email: String,
 GST: String,
 Passkey: String
});

var User = mongoose.model("User", userschema);
app.get("/", (req,res) => {	
  res.sendFile(__dirname + "/LoginPage1.html");
});
const userroute = express.Router();
userroute.route('/loginUser').post(function(req, res){
  var newuser = new User(req.body);
  newuser.save()
	.then(item => {
		res.send("Data Saved");
	})
	.catch(err => {
		res.status(400).send("Unable to save");
	});
});

module.exports = router;
