const mongoose =require("mongoose")
const {Schema}=mongoose

const teamschema=new Schema({
    Tname:{
        type:String,
        required:true,
    },
    CaptainName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    },
    Numofplayers:{
        type:Number,
        required:true
    },
    division:{
        type:String,
        required:true
    },
    paymentmethod:{
        type:String,
        required:true
    },
})

const Registration=mongoose.model("registration",teamschema)
module.exports=Registration