const mongoose=require('mongoose')

const certificateSchema=mongoose.Schema({
        title:String,
        technologiesCovered:Array,
        description:String,
        imageUrl:String,
        verificationLink:String
})

const certificates=mongoose.model('certificates',certificateSchema)

module.exports=certificates