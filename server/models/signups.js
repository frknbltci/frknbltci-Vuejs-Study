const mongoose = require('mongoose')


const signupSchema = new mongoose.Schema({

    name: { type: String, require: true },
    surname: { type: String, require: true },
    email: { type: String, require: true },
    phoneNumber: { type: String, require: true },
    company: { type: String, require: true },
    taxAdmin: { type: String, require: true },
    taxNumber: { type: Number, require: true },
    ıdNumber: { type: Number, require: true },
    password: { type: Number, require: true },
    password2: { type: Number, require: true }

})



module.exports = mongoose.model('signups', signupSchema)