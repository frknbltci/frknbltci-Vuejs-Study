<template>
<container>
 <Header></Header>

<v-row>
  <v-col >
   <side-bar />

   </v-col>
   <v-col >
  <products />
  </v-col>


 </v-row>
 <fo />
</container>
</template>

<script>
import Header from '@/components/Header.vue';
import sideBar from '@/components/sideBar.vue';
import footer from '@/components/Footer.vue';
import products from '@/components/Product.vue';

export default {
  name :'MainPage',
  components:{
    
    "Header":Header,
    "sideBar":sideBar,
    "fo":footer,
    "products":products
  
  
  },
  data:()=>({
    
  })

};

</script>