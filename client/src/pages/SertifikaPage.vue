<template>
<container>
 <Header ></Header>

<v-row>
  <v-col >
   <side-bar />

   </v-col>
   
   <v-col>
     <div class="main" cols=12 md=3 xs=1>
     <div style=" background-color: #ececec;  height: 10%;width: 100%;"><h4 style="margin-left:1%;"> Sertifikamız</h4></div>
    
      <img  style="margin-left:1%; width:98%;" src="../assets/s1.png">
      <img  style="margin-left:1%; width:98%;" src="../assets/s2.png">
      <img  style="margin-left:1%; width:98%;" src="../assets/s2.png">
      <img  style="margin-left:1%; width:98%;" src="../assets/s2.png">
      <img  style="margin-left:1%; width:98%;" src="../assets/s2.png">
     
  </div>

  </v-col>


 </v-row>
 <fo />
</container>
</template>

<style>
@media screen and (max-width: 540px) {
  .main {
    width: 100% !important;
    height: auto !important;
    margin-left: 3% !important;
  }
}

.main {
  border-style: groove;
  height: auto;
  width: 155%;
  height: auto;
  margin-left: -65%;
  margin-top: 1%;
}
</style>
<script>
import Header from "@/components/Header.vue";
import sideBar from "@/components/sideBar.vue";
import footer from "@/components/Footer.vue";

export default {
  name: "MainPage",
  components: {
    Header: Header,
    sideBar: sideBar,
    fo: footer,
  },
  data: () => ({}),
};
</script>