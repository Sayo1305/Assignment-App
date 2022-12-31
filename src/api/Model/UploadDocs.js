const mongoose = require('mongoose');
const userdata = require('./User');

const UploadDocs = mongoose.Schema({
      src : {type : String ,required : true , unique: true},
      heading : {type : String , required : true },
      type : {type : String , required : true },
      description  : {type : String , required : true },
      userid_upload : { type : mongoose.Schema.Types.ObjectId, ref : userdata},
      timestamp: {
            type: String,
            default: Date.now(),
      },
});

const model = mongoose.model('uploaddocs' , UploadDocs);

module.exports = model;