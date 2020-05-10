const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
var cors = require('cors')
const jwt = require("jsonwebtoken");

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


//DATABASE E YÜKLEMİYOR
app.post('/contact', (req, res) => {

  console.log(req.body.name === '');


  if (!req.body || req.body.email === '' || req.body.message === '') {
    return res.status(400).send({
      message: "Note content can not be empty"
    });
  }

  const contact = new contactsSchema({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    message: req.body.message
  })

  contact.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Note."
      });
    });

});

app.get('/productsAfia', (req, res) => {
  fs.readFile(AFIA_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });

});

app.get('/products/biskuvi', (req, res) => {
  fs.readFile(BGK_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });

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


app.post('/comment', (req, res) => {
  console.log('Burada');
  let validate = jwt.verify(req.body.token, 'secretkey')
  if (validate) {
    fs.readFile(PRODUCTS_DATA_FILE, (err, data) => {
      let comments = JSON.parse(data);
      for (var i = 0; i < comments.length; i++) { if (comments[i].id == req.body.id) { k = i; } }
      let commentType = req.body.deger == 1 ? "Anonim" : req.body.kullanici
      var newComment = {
        id: comments[k].comments.length + 1,
        text: req.body.yorum,
        kullanici: commentType,
        baslik: req.body.yorumBasligi,

      };
      comments[k].comments.push(newComment);
      console.log('newComment', newComment)
      fs.writeFile(PRODUCTS_DATA_FILE, JSON.stringify(comments, null, 4), () => {
        console.log("Yorum Eklendi.");
      });
    });
  }
});


app.get('/comment', (req, res) => {
  fs.readFile(COMMENT_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});




app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
