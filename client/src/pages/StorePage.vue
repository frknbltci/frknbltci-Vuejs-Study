<template>
<container>
 <Header ></Header>
 <div class="main">
<table style="width:100%">
  <tr>
    <th style="height:2px;"></th>
  </tr>
  <tr>
    <td><img class="resim" src="../assets/magaza1.png">
    <div class="dv1">
<h5 style="margin-top:1%; margin-left:1%; font-weight:500; float:left;"  v-for="items in 1" :key="items.id">{{storeList[0].Sube}} </h5>
<h6 style="float:right; margin-top:1%;  margin-right:2%; " ><b> Harita için tıklayınız »</b></h6>
    </div>
    <div class="dv2">
      <h6><b style="   margin-left:2%;">Adres </b><h6 style="float:right; width:25%; margin-top:0px; margin-right:39.5%;" v-for="items in 1" :key="items.id">{{storeList[0].Adres}}  </h6></h6>
        <h6 style="margin-top:2.5%;"><b style="  margin-left:2%;">Telefon </b><h6 style="float:right; margin-top:0px; margin-right:56%;" v-for="items in 1" :key="items.id">{{storeList[0].Telefon}}  </h6></h6>
<h6 style="margin-top:0.5%;"><b style="  margin-left:2%;">Faks </b></h6>
<h6 style="margin-top:0.5%;"><b style="  margin-left:2%;">E-posta </b></h6>
      </div></td>
  
   
  </tr>
  <tr>
    <td><img class="resim" src="../assets/magaza1.png">
    <div class="dv1">
<h5 style="margin-top:1%; margin-left:1%; font-weight:500; float:left;"  v-for="items in 1" :key="items.id">{{storeList[1].Sube}} </h5>
<h6 style="float:right; margin-top:1%;  margin-right:2%; " ><b> Harita için tıklayınız »</b></h6>
    </div>
    <div class="dv2">
      <h6><b style="   margin-left:2%;">Adres </b><h6 style="float:right; width:25%; margin-top:0px; margin-right:38.5%;" v-for="items in 1" :key="items.id">{{storeList[1].Adres}}  </h6></h6>
        <h6 style="margin-top:2.5%;"><b style="  margin-left:2%;">Telefon </b><h6 style="float:right; margin-top:0px; margin-right:56%;" v-for="items in 1" :key="items.id">{{storeList[1].Telefon}}  </h6></h6>
<h6 style="margin-top:0.5%;"><b style="  margin-left:2%;">Faks </b></h6>
<h6 style="margin-top:0.5%;"><b style="  margin-left:2%;">E-posta </b></h6>
      </div></td>
  
    
  </tr>
  <tr>
    <td><img class="resim" src="../assets/magaza1.png">
    <div class="dv1">
<h5 style="margin-top:1%; margin-left:1%; font-weight:500; float:left;"  v-for="items in 1" :key="items.id">{{storeList[2].Sube}} </h5>
<h6 style="float:right; margin-top:1%;  margin-right:2%; " ><b> Harita için tıklayınız »</b></h6>
    </div>
    <div class="dv2">
      <h6><b style="   margin-left:2%;">Adres </b><h6 style="float:right; width:35%;  margin-top:0px; margin-right:29.5%;" v-for="items in 1" :key="items.id">{{storeList[2].Adres}}  </h6></h6>
        <h6 style="margin-top:2.5%;"><b style="  margin-left:2%;">Telefon </b><h6 style="float:right; margin-top:0px; margin-right:56%;" v-for="items in 1" :key="items.id">{{storeList[2].Telefon}}  </h6></h6>
<h6 style="margin-top:0.5%;"><b style="  margin-left:2%;">Faks </b></h6>
<h6 style="margin-top:0.5%;"><b style="  margin-left:2%;">E-posta </b></h6>
      </div></td>
   
  </tr>
    <tr>
    <td><img class="resim" src="../assets/magaza1.png">
    <div class="dv1">
<h5 style="margin-top:1%; margin-left:1%; font-weight:500; float:left;"  v-for="items in 1" :key="items.id">{{storeList[3].Sube}} </h5>
<h6 style="float:right; margin-top:1%;  margin-right:2%; " ><b> Harita için tıklayınız »</b></h6>
    </div>
    <div class="dv2">
      <h6><b style="   margin-left:2%;">Adres </b><h6 style="float:right; width:35%;  margin-top:0px; margin-right:29.5%;" v-for="items in 1" :key="items.id">{{storeList[3].Adres}}  </h6></h6>
        <h6 style="margin-top:2.5%;"><b style="  margin-left:2%;">Telefon </b><h6 style="float:right; margin-top:0px; margin-right:56%;" v-for="items in 1" :key="items.id">{{storeList[3].Telefon}}  </h6></h6>
<h6 style="margin-top:0.5%;"><b style="  margin-left:2%;">Faks </b></h6>
<h6 style="margin-top:0.5%;"><b style="  margin-left:2%;">E-posta </b></h6>
      </div></td>
   
  </tr>
</table>
 </div>
 <fo />
</container>
</template>

<style>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 1%;
}
.main {
  width: 98%;
  border-style: dashed 0.1px;
  height: auto;
  align-self: center;
  border: 2px solid #ececec;

  margin-left: 1%;
}
.resim {
  width: 25%;
  height: 300px;
  float: left;
}
.dv1 {
  margin-bottom: 1%;
  background-color: #ececec;
  height: 5%;
  width: 74%;
  float: right;
}
</style>
<script>
import Header from "@/components/Header.vue";
import footer from "@/components/Footer.vue";
import axios from "axios";
import Vue from "vue";
Vue.use(axios);

export default {
  name: "StorePage",
  components: {
    Header: Header,
    fo: footer,
  },
  data() {
    return {
      storeList: [],
    };
  },
  async created() {
    try {
      const resStore = await axios.get(`${process.env.VUE_APP_URL}/store`);
      this.storeList = resStore.data;
    } catch (err) {
      console.log("err", err);
    }
  },
};
</script>