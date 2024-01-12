const mongoose = require('mongoose');


const Schema = mongoose.Schema;

 const  PatientsSchema = new Schema({
  firstName: {type:String},
  lastName :{type:String},
  age:{type:Number},
  gender:{type:String}, 
  phone:{type:Number},
  address:{type:String}, 
  city:{type:String},
  state:{type:String},
  zip:{type:Number},
email: {type:String,unique:true, required:true},
create_at:{type:Date, default:Date.now().valueOf()},
update_at:{type:Date, default:Date.now().valueOf()},
 
 })

 module. exports=mongoose.model('patient', PatientsSchema);