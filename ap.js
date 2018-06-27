var express = require("express");
var app = express();
var port = 5000;
app.use(express.static(__dirname))

var User=require('./users.js');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 
app.listen(port, () => {
  console.log("Server listening on port " + port);
});

app.post("/validate", (req, res) => {
  
  console.log("here i am");
  var data = {
        email: req.body.email,
        password: req.body.password
    };
  console.log(data);
  
  User.find({'email':req.body.email},function(err,data){
	 //console.log(data);

	  res.json({data});
  });
  /*myData.save()
    .then(item => {
      res.send("bike saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });*/
});
console.log(__dirname);
app.use("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});