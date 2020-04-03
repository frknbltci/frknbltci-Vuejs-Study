<template>
  
   <v-container fluid class="grey lighten-5">
     <v-row>
       <v-col cols="1">
         <a href="http://localhost:3030/">
                <img
                    class="logo"
                    src="//www.afiagida.com/Data/EditorFiles/afia_logo_little.png"
                    alt=""
                    width="124"
                    height="89"
                  />
                </a>
               
         </v-col>
         <v-spacer></v-spacer>
        
        <v-col cols="6">
          <v-row class="search">
               
                <v-icon size="40" left>search</v-icon>
                <v-text-field class="align-stretch"
                placeholder="Aradığınız Ürünü Girin.."> 
                
                </v-text-field>
               
                <v-btn  height="70"  class="grey white--text">ARA</v-btn>
                
          </v-row>
            
        </v-col>
        <v-spacer></v-spacer>
        
        <v-col class="hesap" cols="2"> 
          
            <v-icon x-large >person</v-icon>
            Hesabım
            <v-row>
              <v-col cols=6>
           <a href="#" class="grey--text" >Giriş Yap</a>
              </v-col>
  
            <v-col cols=6>
           <a href="#" class="grey--text" >Kayıt Ol</a>
              </v-col>
           </v-row>
          
          </v-col>
        <v-spacer></v-spacer>
        <v-col class="sepet"  cols="2">
          <v-icon large>shopping</v-icon>
         <b style="font-size: 20px; --white">Sepetim 0.0TL</b>
        </v-col>
      </v-row>    


  <br /><br />
<div class="navbar">
 <div class="dropdown">
    <button class="dropbtn">KATEGORİLER </button>
    <div class="dropdown-content">
      <a  href="#" v-for="title of categoryList" :key="title.id">{{title.title}}</a>
    </div>
  </div>
 
 <a  v-bind:href="title.path" v-for="title of menuList" :key="title.id">{{title.title}}</a>
  
</div>

<!--
<v-col cols="1">
<div class="sideBarAltDropDown">
  <div class="AltDropDownTitle">MARKALAR</div>    
    <select class="selectMarka"> Tüm Markalar
    <a href="www.google.com.tr">Tüm Markalar</a>
    <option value="#">2</option>
    <option value="#">3</option>


</select>
  </div></v-col>
-->


  </v-container>
  
</template>

<script>


//import menujson from 'C:/Users/fbalt/Desktop/Vuejs-Study-master/server/src/datas/server-menu-data.json'; 
import categoryJson from '../../server/src/datas/server-category-data.json';
import markaJson from '../../server/src/datas/server-brands-data.json';
import menujson from '../../server/src/datas/server-menu-data.json';


export default {
  name: "Header",
  
  data(){
    return{
       menuList:menujson,
       categoryList:categoryJson,
       markaList:markaJson
    };
    
    },
    created() {
      
 },
 methods:{

     }
   
 


};
</script>

<style>


.search {
  border: 2px solid #616161;
  border-radius: 5%;
}
.sepet {
  border: 2px solid #616161;
  border-radius: 5%;
  background-color: #616161;
  height: 90px;
}
.hesap {
  border: 2px solid #616161;
  border-radius: 5%;
  height: 90px;
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
</style>

