<template>
    <v-app>
        <Header></Header>
        <br/>
<div class="sideBar">
  <p class="textSide">Kategori</p>
  <hr>
  <ul>
    <div v-for="item in 1" :key="item.id" >
  <hr style="margin-top:-16px;"><b-link class="sideBarTitles" v-b-toggle.collapse-1 variant="primary">{{categoryList[0].title + `(${categoryList[0].subtitle[0].Biskuvi.length + categoryList[0].subtitle[2].KrakerCesitleri.length + categoryList[0].subtitle[1].Gofret.length})`}}<b-icon class="icons" icon="arrow-right"></b-icon></b-link>
  <hr>
      <ul href="#" class="card-text">
        <ul><a href="#">{{categoryList[0].subtitle[0].name + `(${categoryList[0].subtitle[0].Biskuvi.length})`}}</a></ul>
        <ul><a href="#">{{categoryList[0].subtitle[1].name + `(${categoryList[0].subtitle[1].Gofret.length})`}}</a></ul>
        <ul><a href="#">{{categoryList[0].subtitle[2].name + `(${categoryList[0].subtitle[2].KrakerCesitleri.length})`}}</a></ul>
        
      </ul>
   
<hr/>
    </div>
  </ul>
  </div>
  <v-col>
    <slideCheck/>
     <div class="rangSlide" >
 <b class="slideBaslik">Fiyat</b>
 <hr/>
  <rangeSlider />
 
        <v-btn style="width:100%; color:white;" color="red" >FİLTRELE</v-btn>
        
        
   </div>
    <a href="https://wa.me/+90-(850)3026555" target="_blank" rel="noopener noreferrer">
     <img style="margin-left:1%;" src="@/assets/images/kargoBedava.jpg" alt="112d6.jpg (1.06 MB)" width="200" height="300" caption="false"></a>
    </v-col>
        

      <fo />  
    </v-app>
</template>

<style>
.sideBar{
  background-color: white;
  width: 14.6%;
  margin-left: 2%;
  border: 0.2px solid rgb(221, 213, 213);
  border-top: none;
  

}
.textSide{
 color: red;
  font-size:20px;
  text-align: left;
  font-size: 30px;
  margin-left: 8%;
}

.tumGorTexts{
  color: black;
   font-weight: bold;
   text-align: center;
}
.sideBar a{
  color: grey;
  text-align: center;
  position: static;
}
.sideBarTitles{
  font-size: 15px;
  text-decoration: none;
  
}
.slideBaslik{
  color:red;
   font-size:25px; 
   margin-left:15%;
   
}
.fiyatText{
    margin-left: 15%;
    font-size: 13px;
  
}
.rangSlide{
   background-color: white;
  width: 15%;
  margin-left: 20px;
  border: 0.2px solid rgb(221, 213, 213);
  margin-top: 0%;
  
}

    
   
   

 
</style>

<script>


import categoryJson from '../../server/src/datas/server-category-data.json';

import Header from '@/components/Header.vue';
import slideCheck   from '@/components/slideCheckBoxMarka.vue';
import slider from '@/components/rangeSlider.vue';
import footer from '@/components/Footer.vue';

export default {
  name :'MainPage',
  components:{
    
    "Header":Header,
    "slideCheck":slideCheck,
    rangeSlider:slider,
    "fo":footer
    
    
    
  },
  data:()=>({
    categoryList:categoryJson
  })

};

</script>