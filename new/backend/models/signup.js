var mongoose = require('mongoose');

var singup = mongoose.Schema(
    {
        username:String,      
        password:String,
        privatekey:String       
       }
     );
     
     var singup= mongoose.model('Usersignup',singup);
     
     module.exports = singup;

