<template>
    <v-app>
        <Header></Header>
        <side></side>
        <fo></fo>
    </v-app>
</template>


<script>
import Header from '@/components/Header.vue';
import side  from '@/components/sideBarBrandAfia.vue';
import footer from '@/components/Footer.vue';

export default {
  name :'MainPage',
  components:{
    
    "Header":Header,
    "side":side,
    "fo":footer
    
  },
  data:()=>({
    
  })

};

</script>