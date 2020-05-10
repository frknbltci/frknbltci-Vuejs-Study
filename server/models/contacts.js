const mongoose = require('mongoose')


const contactsSchema = new mongoose.Schema({

    name: { type: String, require: true },
    surname: { type: String, require: true },
    email: { type: String, require: true },
    phoneNumber: { type: Number, require: true },
    message: { type: String, require: true }

});



module.exports = mongoose.model('contacts', contactsSchema)