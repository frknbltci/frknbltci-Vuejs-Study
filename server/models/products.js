const mongoose = require('mongoose')


const productsSchema = new mongoose.Schema({

    brand: { type: String, require: true },
    title: { type: String, require: true },
    price: { type: Number, require: true },
    comments: [{
        id: { type: Number },
        text: { type: String },
        kullanici: { type: String },
        baslik: { type: String }
    }]

})



module.exports = mongoose.model('products', productsSchema)