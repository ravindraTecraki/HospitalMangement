const mongoose = require('mongoose');


const Schema = mongoose.Schema;

 const  userSchema = new Schema({
  firstName: {type:String},
  lastName :{type:String},
  address:{type:String}, 
  city:{type:String},
  state:{type:String},
  zip:{type:Number},
email: {type:String,unique:true, required:true},
password: {type:String, required:true},
create_at:{type:Date, default:Date.now().valueOf()},
update_at:{type:Date, default:Date.now().valueOf()},
 
 })

 module. exports=mongoose.model('admin', userSchema);