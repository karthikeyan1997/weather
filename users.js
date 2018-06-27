var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/weather");

var Schema = mongoose.Schema;
console.log("Connecting...")
mongoose.connection.once("open", function () {
    console.log("database connected")
})
var nameSchema = new Schema({
  email: String,
   password : String
}); 

var User = mongoose.model("users", nameSchema,'users');
module.exports=User;
