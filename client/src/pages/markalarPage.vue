<template>
<v-app>
    

 <Header></Header>
 
  <div class="markalarDis">
    <v-row style="margin-top:1%;">
        <v-col style="color:grey; font-size:25px; margin-left:25%; " cols=4>MARKA LİSTESİ</v-col>
        <v-spacer></v-spacer>
    <v-col cols=5>
  <input  v-model="search" style="text-content-left:%1; margin-left:10%;
   height:55px; width:60%; border: 0.2px solid rgb(221, 213, 213); " 
   type="text" 
   class="pl-3"
   placeholder="Markalar >> Ada göre arama " 
   /> 
    &emsp;
   <v-btn  color="success"  x-large >ARA</v-btn>
 
   </v-col>
    </v-row>
   <hr style="margin:1%;">

  <v-row style="padding:10px;">
  
  <v-btn style="margin:0.5%; " @click="harfAl(harf)" small="true" v-for="harf in alfabe" :key="harf.id" >{{harf}}</v-btn>
</v-row>

<v-row>
  
  <v-card  class="Cards"
    width="370"
      href="http://localhost:3030/Afia"    
      v-for="marka in filterMarkalar"
      :key="marka.id" >
      
    <v-img
      class="white--text align-end"
      height="370px"
      src="@/assets/images/AfiaMarka.jpg"
    >
</v-img>
  <v-card-subtitle style="font:bolder; font-size:22px; color:black; background-color:rgb(212, 211, 211); " > {{marka.title}}</v-card-subtitle>
      

</v-card>
  
</v-row>
 
  

  </div>
 <fo />

</v-app>
</template>

<style>
.markalarDis {
  border: 0.2px solid rgb(221, 213, 213);
  margin-left: 5%;
  margin-right: 5%;
}
.markalarDis v-btn {
  width: 25%;
}
.Cards {
  text-align: center;

  margin: 1%;
}
</style>

<script>
import Header from "@/components/Header.vue";

import footer from "@/components/Footer.vue";
import Vue from "vue";
import axios from "axios";
Vue.use(axios);

export default {
  name: "markalarPage",
  components: {
    Header: Header,
    fo: footer,
  },
  async created() {
    try {
      const resMarka = await axios.get(`${process.env.VUE_APP_URL}/markalar`);
      this.markalar = resMarka.data;
    } catch (err) {
      console.log("err", err);
    }
  },

  data: () => ({
    markalar: [],
    alfabe: [
      "Tümü",
      "A",
      "B",
      "C",
      "Ç",
      "D",
      "E",
      "F",
      "G",
      "I",
      "İ",
      "J",
      "K,",
      "L",
      "M",
      "N",
      "O",
      "Ö",
      "P",
      "R",
      "S",
      "Ş",
      "T",
      "U",
      "Ü",
      "V",
      "Y",
      "Z",
      "0-9",
    ],
    search: "",
  }),
  computed: {
    filterMarkalar: function() {
      return this.markalar.filter(marka => {
        return marka.title.match(this.search);
      });
    },
  },
  methods: {
    harfAl(harf) {
      this.markalar = this.markalar.filter(marka => {
        return marka.title.match(harf);
      });
    },
  },
};
</script>