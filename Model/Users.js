const mongoose= require('mongoose');

const userSchema= new mongoose.Schema({
  name : {type : String },
  status:{type: String, default: 'ACTIVATE'},
  email:{type: String},
  password:{type: String},
  token : {type: String}
   
});

const Users =mongoose.model('users', userSchema)

module.exports = Users