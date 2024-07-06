const mongoose =require("mongoose")
const {Schema}=mongoose

const sportsschema=new Schema({
    name:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        
    }
})

const Sports=mongoose.model("Sports",sportsschema)
module.exports=Sports