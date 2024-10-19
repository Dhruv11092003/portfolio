const mongoose=require('mongoose')
// const bcrypt=require('bcrypt')

const adminLoginSchema=new mongoose.Schema({
    adminName:String,
    password:String,
})

const adminDetails=mongoose.model('adminDetails',adminLoginSchema);

module.exports=adminDetails