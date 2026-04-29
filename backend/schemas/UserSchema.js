const mongooese = require('mongoose');


const userSchema = new mongooese.Schema({
    name:{
        type:String,
        required:true
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


module.exports = {userSchema}