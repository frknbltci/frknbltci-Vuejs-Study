<template>
<container>
 <Header></Header>

<v-row>
  <v-col >
   <side-bar />

   </v-col>
   <v-col >
     <div class="kapaliyiz">
      <img  style="margin-left:-10%; width:100%;" src="../assets/alert.png">
  </div>
  <products />
  </v-col>


 </v-row>
 <fo />
</container>
</template>

<style>
.kapaliyiz{
  margin-left:-50%;
}


</style>
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