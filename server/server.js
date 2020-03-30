const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

const CONTACT_DATA_FILE = path.join(__dirname, './src/datas/server-contact-data.json');
const BRANDS_DATA_FILE = path.join(__dirname, './src/datas/server-brands-data.json');
const LOGIN_DATA_FILE = path.join(__dirname, './src/datas/server-login-data.json');
const SIGNUP_DATA_FILE = path.join(__dirname, './src/datas/server-signup-data.json');
const CATEGORY_DATA_FILE = path.join(__dirname, './src/datas/server-category-data.json');
const MENU_DATA_FILE = path.join(__dirname, './src/datas/server-menu-data.json');
const POS_DATA_FILE = path.join(__dirname, './src/datas/server-pos-data.json');
const STORE_DATA_FILE = path.join(__dirname, './src/datas/server-store-data.json');
const COMMENT_DATA_FILE = path.join(__dirname, './src/datas/server-comment-data.json');

app.set('port',(8180));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
    fs.readFile(BRANDS_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.post('/contact', (req, res) => {
  fs.readFile(CONTACT_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    const contactDatas = JSON.parse(data);
    const newContact = {
      id: req.body.id,
      department:req.body.department,
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      message: req.body.message
    };

    contactDatas.push(newContact);
    fs.writeFile(CONTACT_DATA_FILE, JSON.stringify(contactDatas, null, 4), () => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(contactDatas);
      console.log("Mesajınız Alındı.")
    });

  });

});


app.get('/category', (req, res) => {
  fs.readFile(CATEGORY_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data)); 
  });
});

app.post('/signup', (req, res) => {
  fs.readFile(SIGNUP_DATA_FILE, (err, data) => {
    const users = JSON.parse(data);
    const newUser = {
      id: req.body.id,
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      company: req.body.company,
      taxAdmin: req.body.taxAdmin,
      taxNumber: req.body.taxNumber,
      ıdNumber: req.body.ıdNumber,
      password: req.body.password,
      password2: req.body.password2
    };
  
    let userExist = false;
    users.map((users) => {
      if (users.id === newUser.id) {
        userExist = true;
      }
    });
    if (!userExist) users.push(newUser);
    fs.writeFile(SIGNUP_DATA_FILE, JSON.stringify(users, null, 4), () => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(users);
      console.log("Kayıt Tamamlandı.")
    });
  });
  fs.readFile(LOGIN_DATA_FILE, (err, dataLogin) => {
    const loginUsers = JSON.parse(dataLogin);
    const forLoginNewUser = {
      id: req.body.id,
      email: req.body.email,
      password: req.body.password
    };
    loginUsers.push(forLoginNewUser);
    fs.writeFile(LOGIN_DATA_FILE, JSON.stringify(loginUsers, null, 4), () => {
      res.setHeader('Cache-Control', 'no-cache');
    });
  });
});


app.post('/pos', (req, res) => {
  fs.readFile(POS_DATA_FILE, (err, data) => {
    let anketDatas = JSON.parse(data);
    let newAnketData = {
      id: req.body.id,
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      surname: req.body.surname,
      email: req.body.email,
      message: req.body.message
    };
    anketDatas.push(newAnketData);
    fs.writeFile(POS_DATA_FILE, JSON.stringify(anketDatas, null, 4), () => {
      res.setHeader('Cache-Control', 'no-cache');
      console.log("İlginiz için teşekkürler.");
    });   
  });
});


app.get('/store', (req, res) => {
  fs.readFile(STORE_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});


app.post('/store', (req, res) => {
    fs.readFile(STORE_DATA_FILE, (err, data) => {
      let storeDatas = JSON.parse(data);
      let newStoreData = {
        id: req.body.id,
        Sube: req.body.Sube,
        Adres: req.body.Adres,
        Telefon: req.body.Telefon,
        Faks: req.body.Faks,
        eposta: req.body.eposta  
      };
      storeDatas.push(newStoreData);
      fs.writeFile(STORE_DATA_FILE, JSON.stringify(storeDatas, null, 4), () => {
        res.setHeader('Cache-Control', 'no-cache');
        console.log("Mağaza Eklendi.");
      });
    });
  });

app.post('/store/delete', (req, res) => {
  fs.readFile(STORE_DATA_FILE, (err, data) => {
    let storeDatas = JSON.parse(data);
    storeDatas.map((newData) => {
      if (newData.id === req.body.id) {
        const IndexToRemove = storeDatas.findIndex(newData => newData.id === req.body.id);
        storeDatas.splice(IndexToRemove, 1);
      }
    });
    fs.writeFile(STORE_DATA_FILE, JSON.stringify(storeDatas, null, 4), () => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(storeDatas);
    });
  });
});

app.post('/comment', (req, res) => {
  fs.readFile(COMMENT_DATA_FILE, (err, data) => {
    let Comments = JSON.parse(data);
    let newComment = {
      productId: req.body.productId,
      productVote: req.body.productVote,
      commentId: req.body.commentId,
      comment: req.body.comment,
      isFavor: req.body.isFavor,
    };
    Comments.push(newComment);
    fs.writeFile(COMMENT_DATA_FILE, JSON.stringify(Comments, null, 4), () => {
      res.setHeader('Cache-Control', 'no-cache');
      console.log("Yorum Eklendi.");
    });
  });
});

app.get('/comment', (req, res) => {
  fs.readFile(COMMENT_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});


app.post('/comment/delete', (req, res) => {
  fs.readFile(COMMENT_DATA_FILE, (err, data) => {
    let comments = JSON.parse(data);
    comments.map((comment) => {
      if (comment.commentId === req.body.commentId) {
        const commentToRemove = comments.findIndex(comment => comment.commentId === req.body.commentId);
        comments.splice(commentToRemove, 1);
      }
      else {
       console.log("Ürün bulunamadı")
      }
    });
    fs.writeFile(COMMENT_DATA_FILE, JSON.stringify(comments, null, 4), () => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(comments);
    });
  });
});






app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
