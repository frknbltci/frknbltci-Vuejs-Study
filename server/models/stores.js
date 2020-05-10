const mongoose = require('mongoose')


const magazalarSchema = new mongoose.Schema({

    Sube: { type: String, require: true },
    Adres: { type: String, require: true },
    Telefon: { type: String, require: true },
    Faks: { type: String, require: true },
    Eposta: { type: String, require: true }

})



module.exports = mongoose.model('stores', magazalarSchema)