var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  forename: String,
  surname: String,
  email: String
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');
