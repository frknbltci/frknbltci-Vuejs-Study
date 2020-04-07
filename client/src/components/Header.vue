<template>
  
   <v-container fluid class="grey lighten-5">
     <div @click="otherClick" id="clickbox"> 
     <v-row>
       <v-col style=" margin-top:2%; margin-left:3%;" cols="1">
         <a href="http://localhost:3030/">
                <img
                    class="logo"
                    src="//www.afiagida.com/Data/EditorFiles/afia_logo_little.png"
                    alt=""
                    width="140"
                    height="120"
                  />
                </a>
               
         </v-col>
         
        
        <v-col cols="5" style="position: absolute;
    z-index: 999;
    background: white;
    left:200px;">
          
          <v-row class="search">
               
                <v-icon  size="40" left>search</v-icon>
                <v-text-field  class="align-stretch" v-model="search"
                placeholder="Aradığınız Ürünü Girin.."> 
                
                </v-text-field>
               
                <v-btn    height="70" style="position:static; background-color:grey;">ARA</v-btn>
                
          </v-row>
          <div    v-for="product in filterProducts" :key="product.id" class="single-blog">

           <div v-if="seenSearch"   >     
                 <!-- Butondan kaldırıp event'a koymamız lazım görünürlüğü -->
                <h2> {{product.title |to-uppercase}}</h2>
              
            </div>
         
     
  
          </div>
            
        </v-col>
      
        
        <v-col  class="hesap" cols="2" > 
          
            <v-icon x-large >person</v-icon>
            <p style="margin-top:-14%;margin-left:19%; font-size:20px;"> Hesabım </p>
            
           <div v-if="currentUser.name" > <a href="" @click="cikisYap" style="margin-top:25%;margin-left:10%; text-decoration:none; color:grey;" >Çıkış Yap</a>     </div>
           <div v-else>  
       <a href="#" id="app" v-on:click="seen = !seen"  class="control" style="margin-top:5%; color:grey;text-decoration:none; margin-left:10%;"  >Giriş Yap</a> 
           
           <a href="" style="margin-top:25%;margin-left:10%; text-decoration:none; color:grey;" >Kayıt Ol</a>
        </div>


        
    </v-col>
    

<div class="registrationBtn">
 
 <div  id="wrapper">
 
  <div class="login" v-if="seen" id="hide">
    <img src="../assets/exit.png" style="margin-left:95%; margin-top:-2%; "   v-on:click="seen = !seen" class="control" >
      <h6 style="margin-bottom:4%;">Üye giriş bilgilerini giriniz.</h6> 
      <div class="t1">
         <img src="../assets/mail.png" style="height:60px; margin-bottom:4%;" >
      <b-form-input v-model="email" class="texB"  placeholder="E-Mail"></b-form-input>
      </div>
       <div class="t1">
         <img src="../assets/pass.png" style="height:60px; margin-bottom:4%;" >
      <b-form-input v-model="sifre" class="texB"  placeholder="Şifre"></b-form-input>
      </div>
      <v-btn style="margin-left:2%;"  height="70" width="94%" color="gray" @click="girisYap(email,sifre)"  class="btn"><h4>GİRİŞ YAP</h4></v-btn>
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


 <v-col cols='2'>
    
    <a style="text-decoration:none;" href="http://localhost:3030/sepet">
          
        <div class="sepet">
          
            <div class="sepeticYuvarlak">
            
             <b style="justify-content:center;">{{urunAdet}}</b>
             

           </div>
                  
                  <v-icon 
                  style="color:white;
                  margin-left:15%;
                  margin-top:4%;
                  
                  "  x-large   >shopping_cart</v-icon> 
                 
                    <b class="sepetim">Sepetim</b>
                     <div class="sepetUcret">
                  {{sepetUcret}} TL
                    
                      
                    
                      </div> 
                   
           
           

        
        </div>
    </a>
  </v-col>
      </v-row>    

<div>{{currentUser.name}}</div>
  <br /><br />
<div class="navbar">
 <div class="dropdown">
    <button class="dropbtn">KATEGORİLER </button>
    <div class="dropdown-content">
      <a  href="" v-for="title of categoryList" :key="title.id">{{title.title}}</a>
    </div>
  </div>
 
 <a  v-bind:href="title.path" v-for="title of menuList" :key="title.id">{{title.title}}</a>
  
</div>



</div>
  </v-container>
  
</template>

<script>

import { mapState } from 'vuex';
import Vue from "vue";
import axios from "axios";
Vue.use(axios);
 
 

export default {
  name: "Header",
  el:'#wrapper',
  
  
  data(){
    return{
       menuList:[],
       categoryList:[],
       markaList:[],
       urunAdet:0,
       search:'',
       seen:false,
       products:[],
       sepetUcret:0,
       seenSearch:false,
       email:"",
       sifre:""
      
    };
    
    }, 
 
    async created() {
      try {
        const res = await axios.get("http://localhost:8180/category");
        this.categoryList = res.data;
        const resMarka=await axios.get("http://localhost:8180/markalar");
        this.markaList=resMarka.data;
        const resMenu =await axios.get("http://localhost:8180/menu");
        this.menuList=resMenu.data;
        const resProduct =await axios.get("http://localhost:8180/products");
        this.products=resProduct.data;
      } catch (err) {
        console.log("err", err);
      }
    },
    computed:{
      filterProducts:function(){
        return this.products.filter((product)=>{
          if(this.search.length>0){
          this.seenSearch=true;
          }
          return product.title.match(this.search ); 
        });
      },
      ...mapState(['currentUser'])
    },
    methods:{
       otherClick:function(){
            if (this.seenSearch==true){           
              return this.seenSearch=false;  
    }
       },
       cikisYap:function(){
         this.$store.dispatch("cikisYap");
       },
       girisYap:function(email,sifre){
         return  console.log(email+sifre);
       }
    }
};

</script>

<style>


.search {
  border: 2px solid #616161;
  border-radius: 5%;
  width: 100%;
  margin-left:20%;
  margin-top:8%;
}
.sepet {
  border: 2px solid #7a7777;
  border-radius: 5%;
  background-color: #645c5c;
  height: 70%;
  margin-left: 16%;
  width: 250px;
  margin-top: 14%;



}
.sepeticYuvarlak{
  position:static;
  border-radius: 50%;
  border:3px solid white;
  background-color: #706f6f;
  width: 15%;
  height: 40%;
  color:white;
  font-size: 18px;
  margin-left: -5%;
  margin-top: -7%;
  text-align: center;
  font: bolder;
  

}
.sepetUcret{
  color:white;
  font-size:20px;
  margin-top:-9%;
  margin-left:35%;
}
.sepetim{
  color: white;
  font-size: 18px;
}
.hesap {
  border: 2px solid #9e9898; 
  position: static;
  background-color: rgb(241, 237, 237);
  border-radius: 5%;
  height: 20%;
  margin-left:52%;
  margin-top:3%;
  
  
}

.navbar {

  overflow: hidden;
  background-color: rgb(238, 13, 13);

}

.navbar a {
  float: left;
  font-weight: bolder;
  font-size: 19px;
  padding: 14px 16px;
  text-decoration: none;
  color: white;
}
.v-application a{
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

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: white;
  opacity: 0.8;
  color: black;
}


.dropdown-content {
  display:none;
  position:fixed;
  background-color: red;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
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
.sideBarTitles{
  font-size: 120%;
  margin-left: 15%;
  
}
.sideBarAltDropDown{
 
  
  border: 0.1px solid rgb(179, 176, 176);
 
}
.AltDropDownTitle{
  background-color: rgb(177, 173, 173);
  color: red;
  text-align: left;
  font-style: italic;
  font-size: 18px;
  border-radius: 10px 10px;
}
.selectMarka{
  border:1px solid;
}

.btn{
  background-color: gray;
  color: #616161;
}

.texB{
  width: 500px;
  float: right;
  height: 60px;
  margin-right: 1.1%;
}
.textBox{
  border-style:2px solid #616161;
}
.registrationBtn{
 
  
  position: absolute;


}
h6{
  font-weight: 400;
  margin-top: 3%;
}
.login{
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

.icon{
 height:20px ;
 width: 20px;
 float: left;
  
}

</style>

