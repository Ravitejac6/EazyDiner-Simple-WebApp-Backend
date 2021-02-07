const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName:{
        type: String,
        required : true
    },
    middleName:{
        type:String,
        required:true
    },
    lastName:{
        type : String,
        required:true
    },
    phonenum:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:String
    }
    
})


const User = module.exports = mongoose.model('User',UserSchema);