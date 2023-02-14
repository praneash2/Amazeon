const mongoose = require('mongoose');

const prod = new mongoose.Schema({
    name:{type:'String', trim:true},
    price:{type:'Number', trim:true},
}, {timestamps:true})

const Product = mongoose.model('Product', prod)

module.exports = Product