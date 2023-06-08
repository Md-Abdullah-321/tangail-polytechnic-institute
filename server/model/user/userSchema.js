const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true
    },
    session:{
        type: String, 
        required: true
    },
    department:{
        type: String, 
        required: true
    },
    semester:{
        type: String, 
        required: true
    },
    shift:{
        type: String, 
        required: true
    },
    roll:{
        type: Number, 
        required: true
    },
    registration:{
        type: Number, 
        required: true
    },
    email:{
        type: String, 
        required: true
    },
    password:{
        type: String, 
        required: true
    },
})


const Student = mongoose.model('STUDENT',userSchema);

module.exports = Student;