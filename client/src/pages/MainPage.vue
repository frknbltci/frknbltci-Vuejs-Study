<template>
<container>
 <Header></Header>

<v-row>
  <v-col >
   <side-bar />

   </v-col>
   <v-col >
     <div class="kapaliyiz">
      <img  src="../assets/alert.png">
  </div>
    <v-col class="proCol" cols="10"   >
        <products />

    </v-col>
  </v-col>


 </v-row>
 <fo />
</container>
</template>

<style>
@media screen and (max-width: 540px) {
  .kapaliyiz {
    height: 50px;
    width: 320px;
    position: absolute;
    display: none;
  }
  .proCol {
    margin-left: 65% !important;
  }
}
.proCol {
  margin-left: 10%;
}
.kapaliyiz {
  position: relative;
  margin-top: 1%;
  margin-left: -30%;
  width: 100%;
}
</style>
<script>
import Header from "@/components/Header.vue";
import sideBar from "@/components/sideBar.vue";
import footer from "@/components/Footer.vue";
import products from "@/components/Product.vue";

export default {
  name: "MainPage",
  components: {
    Header: Header,
    sideBar: sideBar,
    fo: footer,
    products: products,
  },
  data: () => ({}),
};
</script>