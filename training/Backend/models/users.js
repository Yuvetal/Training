const mongoose=require('mongoose')
const userschema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
module.export=mongoose.model('users',userschema);