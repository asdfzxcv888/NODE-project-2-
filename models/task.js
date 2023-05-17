const mongoose =require('mongoose')


const taskschema =new mongoose.Schema({
    name:{
        type: String,
        required:[true,'name cannot be empty'],
        trim:true,
        maxlength:[20,'cant exceed 20']
    },
    completed:{
    type:Boolean,
    default:false
}
})

module.exports =mongoose.model('task',taskschema)