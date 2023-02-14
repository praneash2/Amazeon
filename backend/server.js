const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer')
const cors = require('cors');
require("dotenv").config()
const bcrypt = require('bcrypt');
const sharp = require('sharp');
const Mailgen = require('mailgen');
const fs = require('fs');
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const User = require('./userModel')
const generateToken = require('./tokenGenerate');

// console.log(process.env.PORT)

const storage = multer.memoryStorage()  // we use memoryStorage here instead of DiskStorage as we will resize the images and so we need to keep it temporarily in memory beofre storing it.
const uploads = multer({storage})   // this uploads can be used as a middleware for storing the data and images

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static('Images/user'))

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

async function matchPassword(password, Password){
    return await bcrypt.compare(password, Password)
}

async function authorize(token){
    const user = jwt.verify(token, process.env.SECRET_KEY)
    return user
}

async function sendTempMail(user){
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_PASS
        }
    });
    let mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'Mailgen',
            link: 'https://mailgen.js/',
            logo: 'https://memasik.app/img/memasik-logo.png'
        }
    });
    let response = {
        body:{
            name: `${user.name}`,
            intro: `Welcome to Amaze-on. We're thrilled to have one more who sues us for fraudulent`,
            action:{
                instruction:`To really know about us or confirm your doubts please click here`,
                button:{
                    color:'#372173',
                    text:'ClickBait',
                    link:'https://i.kym-cdn.com/photos/images/original/000/041/494/1241026091_youve_been_rickrolled.gif'
                }
            },
            outro:'Still Need help? Just cry yourselves'
        }
    }


    let mail = mailGenerator.generate(response)
    let message = {
        from: '"Amaze-On" <amaze-on@gmail.com>',
        to: `${user.email}`,
        subject: "Order Confirmation",
        html: mail
    }
    await transporter.sendMail(message).then(()=>{
        return true
    }).catch(err=>{
        console.log(err.message)
        return false
    })
}

mongoose.set('strictQuery', true)

try{
    mongoose.connect(process.env.MONGO_URL, connectionParams)
    .then(()=>{
        console.log("Connected to MongoDB")
    })
}catch(err){
    console.error(err.message)
}

app.get('/', (req, res)=>{
    res.send("<h1>Hello world!</h1>")
})

app.post('/signup', uploads.single('image'), async (req, res)=>{    // we give uploads.single() because we want to handle only single files
    //  here we gave "image" inside because it denotes the name of the input tag where we get the image input

    if(!req.body.name || !req.body.password || !req.body.email){
        res.status(403).send("Please Enter all credentials")
        return
    }
    const userExist = await User.findOne({email:req.body.email})
    if(userExist){
        res.status(400).send("User already exists")
        return
    }

    console.log(req.body)

    let imgUrl

    try{
        await sharp(req.file.buffer)
        .resize({width:600, height:600})
        .jpeg({ mozjpeg: true })
        .toFile(`./Images/user/${req.body.email}.jpeg`, (err, val)=>{
            if(err){console.log(err)}
        })
        imgUrl = `http://localhost:7000/${req.body.email}.jpeg`
    }
    catch(err){
        console.log(err)
    }

    var user = new User()
    user.name = req.body.name
    user.email = req.body.email
    user.password = await bcrypt.hash(req.body.password, 10);
    user.authToken = generateToken(user.email)
    user.picture = imgUrl
    user.save((err, data)=>{
        if(err){
            res.status(400).json({data:"Error while creating user"})
            console.error(err.message)}
        else{
            res.status(201).json({name:req.body.name, email:req.body.email, picture:imgUrl, token:user.authToken})
        }
    })
})   

app.post('/login', async (req, res)=>{

    const {email, password} = req.body
    if(!req.body.password || !req.body.email){
        res.status(403).send("Please Enter all credentials")
    }

    const user = await User.findOne({email})

    if(!user){
        res.status(404).json({data: "User not found"})
        return
    }

    if (await matchPassword(password, user.password)){
        res.status(201).json(user)
        //  remember to save the user in the local storage when the data is returned
    }
    else{
        res.status(200).json({data: "Wrong Password"})
    }
})

app.post('/orderplaced', async (req, res)=>{
    const user = req.body
    await sendTempMail(user)
    res.status(200).json({data:"Mail sent successfully"})
})

app.listen(process.env.PORT, ()=>{
    console.log("Started Server on port " + process.env.PORT)
})