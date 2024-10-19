const mongoose=require('mongoose')

const projectSchema=new mongoose.Schema({
    projectName:String,
    technologiesUsed:Array,
    githubLink:String,
    publishLink:String,
    projectImagesLink:Array,
    projectDescription:String
})

const projects=new mongoose.model("projects",projectSchema)

module.exports=projects