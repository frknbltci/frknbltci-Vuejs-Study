<template>
<v-app class="app">

<!--   
<v-row  class="boyut" >
     <v-col class="" cols="2" >
    <img class="prResim" src="../assets/Aci_Cips.png" > 
    <b><a class="yaziB" href="#"  v-for="items in 1" :key="items.id"><p>{{productList[0].brand}}</p></a></b>
    <a class="yaziB" href="#"  v-for="items in 1" :key="items.id"><p>{{productList[0].title}}</p></a>
    <p class="bosluk" > <img class="buton" src="../assets/Sepet.png" > <img class="buton" src="../assets/favori.png" > 
    <b class="fiyat" href="#"  v-for="items in 1" :key="items.id">{{productList[0].price}}</b></p>
     </v-col>
</v-row>
-->

<v-row>
  
  <v-card style="margin:1%;" class="Cards"
    width="280" 
    height="450px"   
      v-for="product in productsList"
      :key="product.id" >
      <router-link :to="{  name: 'ProductPage', params: { id: product.id,name:product.title,price:product.price,comments:product.comments }  }"> 
       
    <v-img
      class="white--text align-end"
      height="270px"
      src="@/assets/images/AfiaMarka.jpg" >
    </v-img>
   </router-link>
  
  <v-card-subtitle style="font:bolder; font-size:22px; color:black; background-color:white; margin-top:-5%; " > {{product.brand}}</v-card-subtitle>
   <div style="font-size:17px; color:black; background-color:white; margin-top:-5%; " > {{product.title}} 
       <v-row>
       <div class="sepetIcon">
        <a style="text-decoration:none;"  >   <v-icon color="black" style="margin-left:10%;margin-top:10%;" large  >shopping_cart</v-icon> </a>
    </div>      
     <div  class="favIcon">
       <a style="text-decoration:none;"  > <v-icon  color="black" style="margin-left:13%;margin-top:10%;" large  >favorite_border</v-icon></a>
     </div>
     <div class="CardPrice">
         {{product.price}}
     </div> 
       </v-row>
        </div>
   
</v-card>
</v-row>
</v-app>
</template>

<style scoped>
.app{
    margin-left: -63%;
    
}
.CardPrice{
font-family: 'Courier New', Courier, monospace;
margin-left:55%;  
margin-top:20%; 
font-size:25px; 
font-weight: bold;
color:red;
}

.sepetIcon{
  position:absolute;
  border-radius: 50%;
  border:1px solid rgb(184, 182, 182);
  background-color: white;
  width: 50px;
  height: 50px;
  color:white;
  margin-top: 20%; 
  margin-left: 4%;

}
.favIcon{

 position:absolute;
  border-radius: 50%;
  border:1px solid rgb(184, 182, 182);
  background-color: white;
  width: 50px;
  height: 50px;
  color:white;
  margin-top: 20%; 
  margin-left: 25%;
  font: bolder;
}

.favIcon:hover ,.sepetIcon:hover{
    background-color: rgb(235, 13, 13);
    color:black;
}


</style>
<script>

import Vue from "vue";
import axios from "axios";
Vue.use(axios);


export default {
    name: "Product",
  
  data(){
    return{
       productsList:[]
       
    };
    
    },
    methods:{
     
    },
  
    async created() {
      try {
        const res = await axios.get("http://localhost:8180/products");
        this.productsList = res.data;

      } catch (err) {
        console.log("err", err);
      }
    },

};
</script>