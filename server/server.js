const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
var cors = require('cors')
const jwt = require("jsonwebtoken");
const ngrok = require('ngrok');
const mongoose = require('mongoose');

const signupSchema = require('./models/signups')
const contactsSchema = require('./models/contacts')
const magazalarSchema = require('./models/stores')
const markalarSchema = require('./models/brands')
const urunlerSchema = require('./models/products')
// ES6 use
//import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/afiaDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connection successful')
});


const app = express();
app.use(cors())

app.set("api_secret_key", require("./config").api_secret_key);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const CONTACT_DATA_FILE = path.join(__dirname, './src/datas/server-contact-data.json');
const BRANDS_DATA_FILE = path.join(__dirname, './src/datas/server-brands-data.json');
const LOGIN_DATA_FILE = path.join(__dirname, './src/datas/server-login-data.json');
const SIGNUP_DATA_FILE = path.join(__dirname, './src/datas/server-signup-data.json');
const CATEGORY_DATA_FILE = path.join(__dirname, './src/datas/server-category-data.json');
const MENU_DATA_FILE = path.join(__dirname, './src/datas/server-menu-data.json');
const POS_DATA_FILE = path.join(__dirname, './src/datas/server-pos-data.json');
const STORE_DATA_FILE = path.join(__dirname, './src/datas/server-store-data.json');
const COMMENT_DATA_FILE = path.join(__dirname, './src/datas/server-comment-data.json');
const PRODUCTS_DATA_FILE = path.join(__dirname, './src/datas/server-products-data.json');
const BGK_DATA_FILE = path.join(__dirname, './src/datas/server-productsBiskuvi-data.json');
const AFIA_DATA_FILE = path.join(__dirname, './src/datas/server-afia-data.json');

app.set('port', (8180));


app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});


app.get('/menu', (req, res) => {
  fs.readFile(MENU_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });

});

app.get('/markalar', (req, res) => {
  markalarSchema.find({}).then(a => {
    res.json(a);
  })
});


app.post('/contact', (req, res) => {

  if (!req.body || req.body.email === '' || req.body.message === '') {
    return res.status(400).send({
      message: "Note content can not be empty"
    });
  }
  contactsSchema.create(req.body)
  res.send(200)
});

app.get('/productsAfia', (req, res) => {
  urunlerSchema.find({ brand: 'Afia' }).then(a => {
    res.json(a);
  })
});

app.get('/biskuvi', (req, res) => {
  urunlerSchema.find({ name: 'Bisküvi' }).then(a => {
    res.json(a);
  })
});

app.get('/products', (req, res) => {
  urunlerSchema.find({}).then(a => {
    res.json(a);
  })
});

//Static daha kullanışlı olacaktır
app.get('/category', (req, res) => {
  fs.readFile(CATEGORY_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});



app.post('/login', (req, res, next) => {

  var email = req.body.email;
  var password = req.body.password;

  signupSchema.findOne({ email: email, password: password }, function (err, user) {
    if (err) {
      return res.status(500).send();
    }
    if (!user) {
      return res.status(404).send();
    }
    const gelenUser = {
      password: password,
      email: email
    };
    const token = jwt.sign(gelenUser, 'secretkey');
    return res.status(200).json({
      title: 'Login Başarılı',
      token: token
    });
  })

});


app.post('/signup', (req, res) => {
  signupSchema.create(req.body)
  res.status(201).send()
});



app.get('/store', (req, res) => {
  magazalarSchema.find({}).then(a => {
    res.json(a);
  })
});


app.post('/comment', (req, res, next) => {

  let validate = jwt.verify(req.body.token, 'secretkey')
  if (validate) {
    urunlerSchema.findOne({ id: req.body.id }, ((err, docs) => {
      if (err) return next(err);
      if (!docs) return res.send();

      docs.comments.push({
        id: docs.comments.length + 1,
        text: req.body.text,
        kullanici: req.body.kullanici,
        baslik: req.body.baslik
      });
      docs.save(function (err) {
        if (err) return next(err);
        return res.send();
      })

    }))
  }
});



app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

ngrok.connect(8180).then(item => {
  console.log('Sunucu dışarı url :', item)
})
