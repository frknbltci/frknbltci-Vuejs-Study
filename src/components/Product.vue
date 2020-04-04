<template>
<v-app class="app">
    <img class="alert" src="../assets/alert.png">
<v-row  class="boyut" >
     <v-col class="" cols="2" >
    <img class="prResim" src="../assets/Aci_Cips.png" > 
    <b><a class="yaziB" href="#"  v-for="items in 1" :key="items.id"><p>{{productList[0].brand}}</p></a></b>
    <a class="yaziB" href="#"  v-for="items in 1" :key="items.id"><p>{{productList[0].title}}</p></a>
    <p class="bosluk" > <img class="buton" src="../assets/Sepet.png" > <img class="buton" src="../assets/favori.png" > 
    <b class="fiyat" href="#"  v-for="items in 1" :key="items.id">{{productList[0].price}}</b></p>
     </v-col>
    
     <v-col class="" cols="2" >
    <img class="prResim" src="../assets/Peynirli_Cips.png" > 
    <b><a class="yaziB" href="#"  v-for="items in 1" :key="items.id"><p>{{productList[1].brand}}</p></a></b>
    <a class="yaziB" href="#"  v-for="items in 1" :key="items.id"><p>{{productList[1].title}}</p></a>
    <p class="bosluk" > <img class="buton" src="../assets/Sepet.png" > <img class="buton" src="../assets/favori.png" > 
    <b class="fiyat" href="#"  v-for="items in 1" :key="items.id">{{productList[1].price}}</b></p>
     </v-col>
 
      <v-col class="" cols="2" >
    <img class="prResim" src="../assets/Starbis.png" > 
    <b><a class="yaziB" href="#"  v-for="items in 1" :key="items.id"><p>{{productList[2].brand}}</p></a></b>
    <a class="yaziB" href="#"  v-for="items in 1" :key="items.id"><p>{{productList[2].title}}</p></a>
    <p class="bosluk" > <img class="buton" src="../assets/Sepet.png" > <img class="buton" src="../assets/favori.png" > 
    <b class="fiyat" href="#"  v-for="items in 1" :key="items.id">{{productList[2].price}}</b></p>
     </v-col>
      <v-col class="" cols="2" >
    <img class="prResim" src="../assets/K_helva.png" > 
    <b><a class="yaziB" href="#"  v-for="items in 1" :key="items.id"><p>{{productList[3].brand}}</p></a></b>
    <a class="yaziB" href="#"  v-for="items in 1" :key="items.id"><p>{{productList[3].title}}</p></a>
    <p > <img class="buton" src="../assets/Sepet.png" > <img class="buton" src="../assets/favori.png" > 
    <b class="fiyat" href="#"  v-for="items in 1" :key="items.id">{{productList[3].price}}</b></p>
    </v-col>
</v-row>



<v-row class="boyut1">
     <v-col class="" cols="2" >
    <img class="prResim" src="../assets/Misirli_Cips.png" > 
    <b><a class="yaziB" href="#"  v-for="items in 1" :key="items.id"><p>{{productList[4].brand}}</p></a></b>
    <a class="yaziB" href="#"  v-for="items in 1" :key="items.id"><p>{{productList[4].title}}</p></a>
    <p class="bosluk" > <img class="buton" src="../assets/Sepet.png" > <img class="buton" src="../assets/favori.png" > 
    <b class="fiyat" href="#"  v-for="items in 1" :key="items.id">{{productList[4].price}}</b></p>
    </v-col>
      <v-col class="" cols="2" >
    <img class="prResim" src="../assets/Cikolata.png" > 
    <b><a class="yaziB" href="#"  v-for="items in 1" :key="items.id"><p>{{productList[5].brand}}</p></a></b>
    <a class="yaziB" href="#"  v-for="items in 1" :key="items.id"><p>{{productList[5].title}}</p></a>
    <p class="bosluk" > <img class="buton" src="../assets/Sepet.png" > <img class="buton" src="../assets/favori.png" > 
    <b class="fiyat" href="#"  v-for="items in 1" :key="items.id">{{productList[5].price}}</b></p>
    </v-col>
      <v-col class="" cols="2" >
    <img class="prResim" src="../assets/Wipe.png" > 
    <b><a class="yaziB" href="#"  v-for="items in 1" :key="items.id"><p>{{productList[6].brand}}</p></a></b>
    <a class="yaziB" href="#"  v-for="items in 1" :key="items.id"><p>{{productList[6].title}}</p></a>
    <p class="bosluk" > <img class="buton" src="../assets/Sepet.png" > <img class="buton" src="../assets/favori.png" > 
    <b class="fiyat" href="#"  v-for="items in 1" :key="items.id">{{productList[6].price}}</b></p>
    </v-col>
      <v-col class="" cols="2" >
    <img class="prResim" src="../assets/Acili.png" > 
    <b><a class="yaziB" href="#"  v-for="items in 1" :key="items.id"><p>{{productList[7].brand}}</p></a></b>
    <a class="yaziB" href="#"  v-for="items in 1" :key="items.id"><p>{{productList[7].title}}</p></a>
    <p class="bosluk1" > <img class="buton" src="../assets/Sepet.png" > <img class="buton" src="../assets/favori.png" > 
    <b class="fiyat" href="#"  v-for="items in 1" :key="items.id">{{productList[7].price}}</b></p>
    </v-col>
</v-row>
</v-app>
</template>

<style scoped>
.app{
    margin-left: -63%;
    
}
.boyut{
    height: 420px;
    width: 125%;
    margin-top: 2%;
    
}
.boyut1{
    height: 420px;
    width: 125%;
    margin-top: 4%;
}
.prResim{
    height:65%;
    width: 95%;
}
.yaziB{
    font-size: 14px;
    text-decoration: none;
    color: black;
    margin-top: 10px;
}
.fiyat{
    font-size: 20px;
    color:red;
    float: right;
}
.buton
{
    width: 15%;
    height: 10%;
}
.alert
{
    width: 90%;
    margin:-2% ;
  
}
.bosluk{
    margin-top: 19%;
}
.bosluk1{
    margin-top: 29%;
}
</style>
<script>
import productjson from '../../server/src/datas/server-mproduct-data.json'; 

export default {
    name: "Product",
  
  data(){
    return{
       productList:productjson
       
    };
    
    }

};
</script>