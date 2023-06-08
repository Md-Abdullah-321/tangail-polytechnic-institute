const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');

//create application:
const jsonParser = bodyParser.json();

//Parse application/json:
app.use(jsonParser);


require('../db/connection');

// Add all of your userSchema:
const Student = require('../model/user/userSchema');


//SignIn Route:
router.get('/signin', async(req, res) => {
    try {
        // Get all student 
        const allStudent = await Student.find();
        return res.json(allStudent);
      } catch (error) {
        res.json({ message: error });
      }
})

// SignUP Route: 
router.post('/signup',jsonParser, async(req, res) => {
    const {name, session, department, semester, shift, roll, registration, email, password} = req.body;

    if(!name || !session || !department || !semester || !shift || !roll || !registration || !email || !password){
        return res.json({error: "Please, filled the Registration form"});
    }
    //check if the user already exist or not:
    const userExist = await Student.findOne({roll: roll});
    if(userExist){
        //if exist return an error:
        return res.status(422).json({error: 'Student Already Exist'});
    }

    try{
        const student = new Student({name, session, department, semester, shift, roll, registration, email, password});
    
        await student.save();
        res.status(201).json({message:"New Profile Created successfully."});
    }catch(err){
        console.log(err);
    }
})

//Profile Route:
router.get('/userProfile',jsonParser, async(req, res) => {
    const {roll} = req.body;
    try {
        const userProfile = await Student.findOne({roll, roll});
        return res.json(userProfile);
      } catch (error) {
        res.json({ message: error });
      }
})

module.exports = router;


