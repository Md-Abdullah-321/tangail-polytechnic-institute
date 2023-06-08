const dotenv = require('dotenv');
// const mongoose = require('mongoose');
const express =  require('express');
const app = express();

dotenv.config({path: './config.env'});
require('./db/connection');
// const User = require('./model/userSchema');


// Cookie Parser: 
const cookieParser = require("cookie-parser");
app.use(cookieParser())

//Middlewares:(Connecting with Router Files)
app.use(require('./router/userRoute'));
app.use(express.json()); 
// Routing End:


const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Server is running at Port no ${PORT}`);
})