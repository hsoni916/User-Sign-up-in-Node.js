var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {  });
});
console.log("index.js");
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
var user = mongoose.model("User", userschema);
router.post('/loginUser', function(req,res, next) {
	var newuser = new user(req.body);
	newuser.save()
	.then(item=>{
		var json = req.params;
       res.send(json);
	})
	.catch(err=> {
		res.status(400).send("Failure");
	})
});
module.exports = router;
