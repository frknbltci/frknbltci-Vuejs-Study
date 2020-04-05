
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.2/vue.min.js"></script>

<template>
    <v-app>
      
        
         <Header></Header>
        <div class="top-side-main">
            <div class="top-left"><img class="prResim" src="../assets/images/AfiaMarka.jpg"></div>
            <div class="top-right">
             <h2 class="yaziB">{{productName}}</h2>
               <h1 class="price"  >{{productPrice}}</h1>
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

          <div class="tabs">
    <div>
      
      <button v-for="(tab, index) in tabs" :key="tab.index"
              :class="{active : currentTab === index }"
              @click="currentTab = index">{{tab}}</button>
    </div>
    <div class="tab-content">
      <div v-show="currentTab === 0"><h1>{{productName}}</h1></div>
      <div v-show="currentTab === 1">
        <table style="width:100%;">
           <tr>
    <th><b>Kredi Kartı Tek Ödeme : </b></th>
    <th>{{productPrice}} </th> 
    <th><b>Havale : </b></th>
    <th>{{productPrice}} </th> 
  </tr>
    <tr>
    <th><b>Kapıda Ödeme : </b></th>
    <th>{{productPrice}}</th> 
  </tr>
        </table>
      </div>
      <div v-show="currentTab === 2"><h6 v-for="comment in comments" :key="comment.id">Anonim :{{ comment.text}} </h6></div>
    </div>
  </div>
        

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
 width:70%;
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

.tabs{
    margin-left: 5%;
    
}
.active{
   border: 1px solid white;
}
button{
  padding: 10px;
  background-color:#d5d5d5; 
  text-align: left;
  width: 30%;
  
}
button.active{
  background-color: white;
  color:#ee1c24;
  
}
.tab-content div{
  padding: 30px;
  border: 1px solid white;
  width: 90%;
  margin: 0 auto;
  float: left;
  background-color: white;
  margin-top: -0.1%;
}
table, th, td {
  border: 0.1px solid black;
  border-collapse: collapse;
  font-weight: 400;
}
th{
  width: 30%;
  padding: 5px;
}
</style>

<script>
import Header from '@/components/Header.vue';

import Footer from  '@/components/Footer.vue';


import Vue from "vue";
import axios from "axios";
Vue.use(axios);

export default {
  name :'MainPage',
   el: '#app',
  components:{
    
    "Header":Header,
    "Footer":Footer
    
    
     
  },
  data(){
    return{
       productList:[],
      id:"",
      productName:"",
      comments:[],
      productPrice:"",
      currentTab: 0,
      tabs: ['Ürün Özellikleri', 'Ödeme Seçenekleri', 'Yorumlar']
       
    };
    
    },
    
    async created() {
      try {
        const resProduct =await axios.get("http://localhost:8180/products");
        this.productList=resProduct.data;
      } catch (err) {
        console.log("err", err);
      } 
        this.id = this.$route.params.id;
        this.productPrice = this.$route.params.price;
        this.productName = this.$route.params.name;
        this.comments=this.$route.params.comments;
    },
   
};

</script>