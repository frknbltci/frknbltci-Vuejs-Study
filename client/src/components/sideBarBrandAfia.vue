<template>
  
 <v-container fluid class="grey lighten-5">
  
<v-row>
  
<br/>
<div class="sideBar">
  <p class="textSide">Kategori</p>
  <hr/>
  <ul>
    <div v-for="item in 1" :key="item.id" >
  <b-link class="sideBarTitles" v-b-toggle.collapse-1 variant="primary">{{categoryList[0].title + `(${categoryList[0].subtitle[0].Biskuvi.length})`}}<b-icon class="icons" icon="arrow-right"></b-icon></b-link>
  <hr/>
      <ul href="#" class="card-text">
        <ul><a href="#">{{categoryList[0].subtitle[0].name + `(${categoryList[0].subtitle[0].Biskuvi.length})`}}</a></ul>
        <ul><a href="#">{{categoryList[0].subtitle[1].name + `(${categoryList[0].subtitle[1].Gofret.length})`}}</a></ul>
        <ul><a href="#">{{categoryList[0].subtitle[2].name + `(${categoryList[0].subtitle[2].KrakerCesitleri.length})`}}</a></ul>
        
      </ul>
   
<hr/>
    </div>
  </ul>
  </div>
   <br/>
  <v-col class="navAlti" cols="9">
  
   <div>
     
     <button class="navAltic" v-for="a in categoryList" :key="a.id" >{{a.title}}</button>

   </div>
 
  </v-col>
</v-row>
  
 
 <v-col class="rangSlide" cols="2">
 <b class="slideBaslik">Fiyat</b>
 <hr>
  <rangeSlider />
  <div >
        <v-btn style="width:100%; color:white;" color="red" >FİLTRELE</v-btn>
  </div>
   </v-col>

  </v-container>
  
</template>

<script>
import Vue from "vue";
import axios from "axios";
Vue.use(axios);

import slider from "@/components/rangeSlider.vue";

export default {
  name: "sideBar",

  data() {
    return {
      categoryList: [],
      subtitles: [],
      errors: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`${process.env.VUE_APP_URL}/category`);
      this.categoryList = res.data;
    } catch (err) {
      console.log("err", err);
    }
  },
  components: {
    rangeSlider: slider,
  },
};
</script>

<style >
@media screen and (max-width: 540px) {
  .rangSlide {
    display: none;
  }
  .sideBar {
    display: none;
  }
}
.navAlti {
  border: 0.2px solid rgb(221, 213, 213);
  height: 40%;
  width: 85%;
  margin-left: 1%;
}
.navAltic {
  background-color: grey;
  color: rgb(116, 114, 114);
  margin: 1%;
  font-family: "Courier New", Courier, monospace;
  font-size: 20.5px;
}

.navAltic:hover {
  background-color: black;
  opacity: 0.8;
  text-decoration-color: black;
  color: white;
}

.sideBar {
  background-color: white;
  width: 13%;
  margin-left: 2%;
  border: 0.2px solid rgb(221, 213, 213);
  border-top: none;
  margin-top: 0%;
  height: auto;
}
.textSide {
  color: red;
  font-size: 20px;
  text-align: center;
}

.tumGorTexts {
  color: black;
  font-weight: bold;
  text-align: center;
}
.sideBar a {
  color: grey;
  text-align: center;
  position: static;
}
.sideBarTitles {
  font-size: 15px;
  text-decoration: none;
}
.slideBaslik {
  color: red;
  font-size: 25px;
  margin-left: 15%;
}
.rangSlide {
  background-color: white;
  width: 13.2%;
  margin-left: 1.3%;
  border: 0.2px solid rgb(221, 213, 213);
  border-top: none;
  height: 200px;
}
</style>

