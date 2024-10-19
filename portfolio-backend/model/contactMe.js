const mongoose=require('mongoose')
const contactMeSchema=new mongoose.Schema({
    inquiredBy:String,
    date:Date,
    email:String,
    contactNo:String,
    message:String
})

const ContactMe=mongoose.model('contacts',contactMeSchema);

module.exports=ContactMe