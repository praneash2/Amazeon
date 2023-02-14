const jwt = require('jsonwebtoken');
require("dotenv").config()

const generateToken = (email)=>{
    return jwt.sign({email}, process.env.SECRET_KEY)
}

module.exports = generateToken;