<template>
    <v-app>
        <Header></Header>
        <v-col>
        <side></side>  
        </v-col>
         <v-col cols=6 style=" margin-left:50%; margin-top:-14%;" >
      <proA></proA>
         </v-col>
        <fo></fo>
    </v-app>
</template>

 
<script>
import Header from "@/components/Header.vue";
import side from "@/components/sideBarBrandAfia.vue";
import footer from "@/components/Footer.vue";
import productAfia from "@/components/productAfia.vue";

export default {
  name: "MainPage",
  components: {
    Header: Header,
    side: side,
    fo: footer,
    proA: productAfia,
  },
  data: () => ({}),
};
</script>