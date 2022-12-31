const mongoose = require('mongoose');


const user = mongoose.Schema({
      email : {type : String ,required : true , unique: true },
      username : {type : String , required : true , unique: true},
      password : {type : String , required : true },
      isLogin : {type: Boolean },
});

const model = mongoose.model('user' , user);

module.exports = model;