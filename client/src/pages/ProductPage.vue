
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.2/vue.min.js"></script>

<template>
    <v-app>
      
        
         <Header></Header>
    
        <div class="top-side-main">
            <div class="top-left"><img class="prResim" src="../assets/Aci_Cips.png"></div>
            <div class="top-right">
             <h2 class="yaziB" v-for="items in 1" :key="items.id">{{productList[0].title}}</h2>
               <h1 class="price" v-for="items in 1" :key="items.id">{{productList[0].price}}</h1>
               <hr/>
                <v-btn  height="70" width="100"  class="grey white--text"><h3>-</h3></v-btn>
                <input v-model="message" class="textBox"  placeholder="1" />
                 <v-btn  height="70" width="100"   class="grey white--text"><h3>+</h3></v-btn>
                 <v-btn style="margin-left:2%;"  height="70" width="300"   class="red white--text"><h4>SEPETE EKLE</h4></v-btn>
                 <img src="../assets/FavoriEkle.png">
                 <p style="margin-top:6%; margin-left:2%;" > NOT  : <input v-model="message" class="textBox1"  placeholder="Notunuzu Buraya Giriniz" /></p>
                 <img class="top-picture" src="../assets/ArkadasinaOner.png"><img class="top-picture"  src="../assets/YorumEkle.png"><img class="top-picture"  src="../assets/FiyatAlarmı.png">
                 <p></p>
                 <img class="bottom-picture" src="../assets/paylas.png">
                 
            </div>
        </div>

<Tabs></Tabs>
<Footer></Footer>
    </v-app>
</template>
<style scoped>
.top-side-main{
    border-style: ridge;
    width: 98%;
    height: 900px;
    align-self:center;
    margin-top: 2%;
    margin-bottom: 5%;
}
.top-left{
 border-style: ridge;
 width: 47%;
 height: 840px;
 margin-top:1.8%;
 margin-left:2%;
 float: left;

}
.top-right{
 width: 47%;
 margin-left:2%;
 
 float:right;
 margin-right: 2%;
 margin-top: 1.8%;
 height: auto;
 text-align: left;
 
 
}
.prResim{
 width: 80%;
 height: 90%;
 margin-left: 9%;
 margin-top: 4%;
   
}
.yaziB
{
 margin-top: 4%;
 font-weight:300;
}
.price{
 margin-top: 4%;
 font-weight:700;
 color: red;
 font-size: 50px;
}
.textBox{
 width: 90px;
 height: 68px;
 text-align: center;
}
.textBox1{
 width: 350 px;
 height: 80px;
 text-align: left;
 margin-left:2% ;
}
.top-picture{
 width: 20%;
 margin-left: 3%;
 height: 20%;
}
.bottom-picture{
 width: 30%;
 height: 20%;
 margin-left: 3%;
}

</style>

<script>
import Header from '@/components/Header.vue';
import Tabs from  '@/components/Tabs.vue';
import Footer from  '@/components/Footer.vue';


import Vue from "vue";
import axios from "axios";
Vue.use(axios);

export default {
  name :'MainPage',
   el: '#app',
  components:{
    
    "Header":Header,
    "Tabs":Tabs,
    "Footer":Footer,
    
    
     
  },
  data(){
    return{
       productList:[],
        
     
       
    };
    
    },
    
    async created() {
      try {
        const resProduct =await axios.get("http://localhost:8180/products");
        this.productList=resProduct.data;
      } catch (err) {
        console.log("err", err);
      }
    },
   
};

</script>