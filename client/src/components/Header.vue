<template>
  
   <v-container fluid class="grey lighten-5">
     <div @click="otherClick" id="clickbox"> 
     <v-row>

        
  <div id="mySidenav" class="sidenav" style="width:0px;">
    <a  class="closebtn" @click="closeNav()"><v-icon>mdi-chevron-left</v-icon>  
         MENÜYÜ KAPAT</a>
    
      <div class="sideSearch">
          <v-icon style="position:relative; " size="30" left>search</v-icon>
          <input style="margin-left:2%; padding:2%;" type="text" placeholder="Aradığınız Ürünü Girinüz.." />
        <input  style="margin-left:20px; width:50px; height:40px; border-radius:2%; background-color:grey; position:relative; " type="button" value="Ara" >
  </div>
 <br>
   

   <sideBar2 />
<br>

  <div class="sideMenuAlt">

    <ul>Dil Seçimi: Türkçe</ul>
    <ul>  <v-icon 
         style="color:grey;" x-large 
         >shopping_cart</v-icon> 
          Sepet({{sepetCount}}): {{sepetToplami}} TL </ul>
    <ul v-if="currentUser">Hesap</ul>
    <ul v-if="currentUser">Fav</ul>
    <ul v-if="currentUser" @click="cikisYap()" > Çıkış Yap </ul>
    <ul v-if="!currentUser"> <a style="text-decoration:none;" @click="()=>{this.$router.push('/registration')}">  Kayıt Ol </a> </ul>
    <ul v-if="!currentUser" @click="()=>{this.seen=true; closeNav();}" >Giriş Yap</ul>
  </div>

  </div>


  <span class="iconspan" @click="openNav()">&#9776; </span>

       <v-col class="logo2"  xs='1' sm='2'>
         <a   @click="()=>{this.$router.push('/')}">
                <img
                    class="logo"
                    src="//www.afiagida.com/Data/EditorFiles/afia_logo_little.png"
                    alt=""  
                    
                  />  
                </a>
               
         </v-col>
        <v-col class="sadeSepet" cols="3">
           <a @click="gitSepet()">
           <v-icon 
                  style="color:red;" x-large >shopping_cart</v-icon> 
          
           </a>
          </v-col>
      
        <v-col style="margin-left:auto;" cols="12" sm="4" xs='2'>
          
          <div class="search">
               
                <v-icon style="position:absolute; margin-top:12px; " size="40" left>search</v-icon>
                <v-text-field style="position:relative; border:2px solid grey; border-radius:5%; padding-left:10%;" class="align-stretch" v-model="search"
                placeholder="Aradığınız Ürünü Girin.."> 
                
                </v-text-field>
               
                <v-btn height="70" style="margin-top:-100px; margin-left:95%; position:sticky; background-color:grey;">ARA</v-btn>
                
          </div>
          <div class="filtre"
          >
          <div    v-for="product in filterProducts" :key="product.id"  >

           <div   v-if="seenSearch"   >     
              <router-link style="text-decoration:none; color:black;" :to="{  name: 'ProductPage', params: { id: product.id,name:product.title,price:product.price,comments:product.comments }  }"> 
               <v-img
                  
                  height="100px"
                  src="@/assets/images/AfiaMarka.jpg" >
                   </v-img>
                <h3> {{product.title |to-uppercase}}</h3>
              </router-link>
            </div>
         
     
  
          </div>
          </div>
            
        </v-col>
      
        
        <v-col  class="hesap"  sm5> 
          
            <v-icon large >person</v-icon>
            <p style="position:absolute; font-size:80%;"> Hesabım </p>
            
           <div style="position:relative; margin-top:-15%;" v-if="currentUser" >
             <v-row>
               <div style=" position:relative; font-size:80%; margin-left:30%; margin-top:0%; text-decoration:none; color:grey;">{{currentUser}}</div>
              <a href="" @click="cikisYap" style="position:relative; margin-bottom:2%; margin-top:5%; margin-left:48%; text-decoration:none; font-size:80%; color:grey;" >Çıkış Yap</a>  
              
             
             </v-row>
              </div>
              
         
           <div class="hesapIc" v-else>  
             <v-row>
                  <a href="#" id="app" v-on:click="seen = !seen"  class="control" style="  color:grey;text-decoration:none;"  >Giriş Yap</a> 
           
                  <a href="http://localhost:3030/registration" style="margin-left:5%; text-decoration:none; color:grey;" >Kayıt Ol</a>
             </v-row> 
           </div>


        
    </v-col>
    

<div class="registrationBtn">
 
 <div  id="wrapper">
 
  <div class="login" v-if="seen" id="hide">
    <img src="../assets/exit.png" style="margin-left:95%; margin-top:-2%; "   v-on:click="seen = !seen" class="control" >
      <h6 style="margin-bottom:4%;">Üye giriş bilgilerini giriniz.</h6> <h6 style="color:red;" v-if="errorseen">{{error}}</h6>
      <div class="t1">
         <img src="../assets/mail.png" style="height:50px; margin-bottom:4%;" >
      <b-form-input v-model="email" class="texB"  placeholder="E-Mail"></b-form-input>
      </div>

<b-form-input v-model="email"  placeholder="E-Mail"></b-form-input>
<b-form-input v-model="sifre"   placeholder="Şifre"></b-form-input>
       <div class="t1">
         <img src="../assets/pass.png" style="height:50px; margin-bottom:4%;" >
      <b-form-input v-model="sifre" class="texB"  placeholder="Şifre"></b-form-input>
      </div>
      <v-btn style="margin-left:2%;"  height="70" width="94%" color="gray" @click="login()"  class="btn"><h4>GİRİŞ YAP</h4></v-btn>
      <p></p>
      <input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox" style="margin-left:10px;"> <h6>Beni Hatırla</h6></label>
<img src="../assets/isaret.png" style="margin-left:45%; margin-top:17px; width:25px;" >
<h5 style="float:right; margin-right:4%; margin-top:15px;">Şifremi Unuttum</h5>
<h5 style="float:right; margin-left:60%; margin-right:5%; margin-top:15px;">Üye Ol</h5>
<p></p>
<img src="../assets/face.png" style="margin-top:-4%; margin-left:-4%;" >
  </div>
</div>
  
</div>


 <v-col xs5>
    
    <a style="text-decoration:none;" @click="gitSepet()" >
          
        <div  class="sepet">
          
            <div class="sepeticYuvarlak">
            
             <b style="justify-content:center;">{{sepetCount}}</b>
             

           </div>
                  
                  <v-icon 
                  style="color:white;
                  margin-left:15%;
                  margin-top:4%;
                  
                  "  x-large   >shopping_cart</v-icon> 
                 
                    <b class="sepetim">Sepetim</b>
                     <div class="sepetUcret">
                 <b> {{sepetToplami}} TL </b>
                    
                      
                    
                      </div> 
                   
           
           

        
        </div>
    </a>
  </v-col>
      </v-row>    

<div class="scrollmenu"> 
<div class="dropdown">
  </div>
 
 <a  v-bind:href="title.path" v-for="title of menuList" :key="title.id">{{title.title}}</a>
  


</div>
  
<div class="navbar">
 <div class="dropdown">
    <button class="dropbtn">KATEGORİLER </button>
    <div class="dropdown-content">

      <a  @click="()=>{this.$router.push(title.path)}" v-for="title of categoryList" :key="title.id">{{title.title}}</a>
    </div>
  </div>
 
 <a  @click="()=>{this.$router.push(title.path)}"  v-for="title of menuList" :key="title.id">{{title.title}}</a>
  
</div>



</div>
  </v-container>
  
</template>

<script>
import Vue from "vue";
import axios from "axios";
import sideBar from "@/components/sideBarForSideMenu.vue";
Vue.use(axios);

export default {
  name: "Header",
  el: "#wrapper",
  components: {
    sideBar2: sideBar,
  },

  data() {
    return {
      menuList: [],
      categoryList: [],
      markaList: [],
      urunAdet: 0,
      search: "",
      seen: false,
      products: [],
      sepetUcret: 0,
      seenSearch: false,
      email: "",
      sifre: "",
      error: "",
      errorseen: false,
      currentUser: "",
      sepetUrunleri: [],
      sepetToplami: 0,
      sepetCount: 0,
    };
  },

  async created() {
    try {
      const res = await axios.get(`${process.env.VUE_APP_URL}/category`);
      this.categoryList = res.data;
      const resMarka = await axios.get(`${process.env.VUE_APP_URL}/markalar`);
      this.markaList = resMarka.data;
      const resMenu = await axios.get(`${process.env.VUE_APP_URL}/menu`);
      this.menuList = resMenu.data;
      const resProduct = await axios.get(`${process.env.VUE_APP_URL}/products`);
      this.products = resProduct.data;
      this.sepetUrunleri = localStorage.getItem("sepetUrunleri");
      if (localStorage.getItem("currentUser")) {
        this.currentUser = localStorage.getItem("currentUser");
      }
      if (localStorage.getItem("sepetToplami")) {
        this.sepetToplami = localStorage.getItem("sepetToplami");
      }
      if (localStorage.getItem("sepetCount")) {
        this.sepetCount = localStorage.getItem("sepetCount");
      }
    } catch (err) {
      this.markaList = [];
    }
  },
  computed: {
    filterProducts: function() {
      var self = this;
      return this.products.filter(product => {
        if (this.search.length > 0) {
          self.seenSearch = true;
        }
        return product.title.match(this.search);
      });
    },
  },
  methods: {
     gitSepet() {
      this.$router.push({ path: `sepet` });
    },
    otherClick: function() {
      if (this.seenSearch == true) {
        return (this.seenSearch = false);
      }
    },
    openNav: function() {
      document.getElementById("mySidenav").style.width = "400px";
    },

    closeNav: function() {
      document.getElementById("mySidenav").style.width = "0";
    },
    cikisYap: function() {
      localStorage.clear("currentUser");
      localStorage.clear("token");
      this.closeNav();
      location.reload();
    },
    login: function() {
      let gelenUser = {
        email: this.email,
        password: this.sifre,
      };
      axios
        .post(`${process.env.VUE_APP_URL}/login`, gelenUser)
        .then(res => {
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("currentUser", this.email);
            this.seen = false;

            location.reload();

            // this.$router.push('/');
          }
        })
        .then(
          res => {
            if (res.status === 500) {
              this.error = "Hatalı Giriş";
              this.errorseen = true;
            }
          },
          err => {
            this.error = err.response.data.error;
          }
        );
    },
  },
};
</script>

<style>
/* CSS */

.sadeSepet {
  display: none;
}
.logo2 {
  margin-top: 2%;
  margin-left: 5%;
  position: relative;
}
.logo {
  width: 70%;
  height: 60%;
}

.search {
  width: 100%;
  margin-left: 20%;
  margin-top: 8%;
}

.sepet {
  border: 2px solid #7a7777;
  border-radius: 5%;
  background-color: #645c5c;
  height: 56%;
  margin-left: 7%;
  width: 200px;
  margin-top: 18%;
}
.sepeticYuvarlak {
  position: static;
  border-radius: 50%;
  border: 3px solid white;
  background-color: #706f6f;
  width: 15%;
  height: 40%;
  color: white;
  font-size: 18px;
  margin-left: -5%;
  margin-top: -7%;
  text-align: center;
  font: bolder;
}
.sepetUcret {
  color: white;
  font-size: 20px;
  margin-top: -9%;
  margin-left: 35%;
}
.sepetim {
  color: white;
  font-size: 18px;
}
.hesap {
  border: 2px solid #9e9898;
  position: relative;
  background-color: rgb(241, 237, 237);
  border-radius: 5%;
  height: 100px;
  margin-left: 15%;
  margin-top: 3%;
}
.hesapIc {
  position: relative;
  font-size: 100%;
  margin-left: 25%;
}

.navbar {
  overflow: hidden;
  background-color: rgb(238, 13, 13);
}
.scrollmenu {
  overflow: hidden;
  background-color: rgb(238, 13, 13);
  display: none;
}

.navbar a {
  float: left;
  font-weight: bolder;
  font-size: 19px;
  padding: 14px 16px;
  text-decoration: none;
  color: white;
}

.v-application a {
  color: white;
}
.dropdown {
  font-weight: bolder;
  float: left;
  overflow: hidden;
  border: solid 1px white;
}

.dropdown .dropbtn {
  font-size: 19px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover,
.dropdown:hover .dropbtn {
  background-color: white;
  opacity: 0.8;
  color: black;
}

.dropdown-content {
  display: none;
  position: fixed;
  background-color: red;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 25%;
}
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.AltDropDownTitle {
  background-color: rgb(177, 173, 173);
  color: red;
  text-align: left;
  font-style: italic;
  font-size: 18px;
  border-radius: 10px 10px;
}
.selectMarka {
  border: 1px solid;
}

.btn {
  background-color: gray;
  color: #616161;
}

.texB {
  width: 500px;
  float: right;
  height: 60px;
  margin-right: 1.1%;
}
.textBox {
  border-style: 2px solid #616161;
}
.registrationBtn {
  position: absolute;
}
h6 {
  font-weight: 400;
  margin-top: 3%;
}
.login {
  background-color: white;
  position: fixed;
  border-radius: 1%;
  width: 600px;
  height: 500px;
  margin-left: 30%;
  margin-top: 15%;
  z-index: 9999;
  text-align: left;
  padding-left: 2%;
}

.icon {
  height: 20px;
  width: 20px;
  float: left;
}
.filtre {
  position: absolute;
  background-color: white;
  z-index: 999;
  left: 120px;
  width: 100%;
}
.sidenav {
  height: 100%;
  width: 350px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  display: none;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  font-size: 17px;
  margin-left: 0px;
}

.iconspan {
  font-size: 30px;
  cursor: pointer;
  display: none;
}

/* Phone*/
@media screen and (max-width: 540px) {
  .texB {
    width: 200px;
    height: 40px;
    margin-left: 0% !important;
  
  }
  .login {
    background-color: white;
    position: fixed;
    border-radius: 1%;
    width: 80%;
    height: 420px;
    margin-left: 0;
    margin-top: 5%;
    z-index: 9999;
  }

  .sideMenuAlt {
    margin-left: 3%;
    background-color: #e7e5e5;
  }
  .sideMenuAlt ul {
    border-bottom: solid 1px grey;
    font-size: 18px;
    text-align: center;
  }

  .sideSearch {
    border: solid grey 2px;
    width: 90%;
    margin-left: 1%;
  }
  .logo2 {
    margin-left: 40%;
    position: relative;
  }
  .logo {
    width: 90%;
    height: 90%;
  }
  .hesap {
    display: none;
  }
  .navbar {
    display: none;
  }
  .scrollmenu {
    margin-top: -11%;
    margin-left: 1%;
    overflow: hidden;
    background-color: rgb(238, 13, 13);
    display: block;
    overflow: auto;
    white-space: nowrap;
  }
  .scrollmenu a {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 12px;
    text-decoration: none;
  }
  .scrollmenu a:hover {
    background-color: white;
    opacity: 0.8;
    color: black;
  }

  .search {
    width: 100%;
    margin-left: auto;
    margin-top: 8%;
    display: none;
  }

  .sepet {
    display: none;
  }

  .sadeSepet {
    display: flex;
  }
  .sadeSepet a {
    text-decoration: none;
  }
  .sidenav {
    height: 100%;
    width: 350px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: white;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 15px;
    display: block;
  }
  .sidenav a {
    font-size: 18px;
  }
  .iconspan {
    font-size: 30px;
    cursor: pointer;
    display: block;
    margin-left: 1%;
  }
}
/*
@media screen and (max-width: 600px) {
  .logo {
    margin-left: 40%;
    width: 10px;
    height: 40px;
  }
  .hesapIc {
    position: relative;
    font-size: 80%;
    margin-left: 45%;
  }
  .hesap {
    border: 2px solid #9e9898;
    position: static;
    background-color: rgb(241, 237, 237);
    border-radius: 5%;
    height: 80px;
    max-width: 100%;
    margin-left: 2%;
    margin-top: 0%;
  }
  .search {
    width: 80%;
    margin-left: 0;
    margin-top: 0;
  }
  .sepet {
    border: 2px solid #7a7777;
    border-radius: 5%;
    background-color: #645c5c;
    height: 90%;
    margin-left: 7%;
    width: 250px;
    margin-top: -1%;
  }
}*/
</style>

