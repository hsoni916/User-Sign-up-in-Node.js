var express = require('express');
var router = express.Router();
var session = require('express-session');

console.log("index.js");
var app = express();
var Parse = require('body-parser');
app.use(Parse.json());
app.use(Parse.urlencoded({ extended: true }));
app.use(session({secret: ' alpha/elt#izmo15/12/18.'}))
var sess; 
/* GET home page. */
router.get('/', function(req, res, next) {
	sess = req.session;
	if(sess.Email){
		res.redirect('/home');
	}
	else{
  res.render('index', {  });
}
});
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
router.post('/loginUser', function(req,res) {
	var newuser = new user(req.body);
	sess = req.session;
	newuser.save()
	.then(item=>{  
			sess.Email = req.body.Email;
			res.redirect('/home');
		})
	.catch(err=> {
		res.status(400).send("Failure");
	})
});
module.exports = router;
