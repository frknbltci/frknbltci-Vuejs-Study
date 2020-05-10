const mongoose = require('mongoose')


const markalarSchema = new mongoose.Schema({

    title: { type: String, require: true }

})



module.exports = mongoose.model('brands', markalarSchema)