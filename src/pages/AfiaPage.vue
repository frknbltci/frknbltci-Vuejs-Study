<template>
    <v-app>
        <Header></Header>
        <side></side>
        
    </v-app>
</template>


<script>
import Header from '@/components/Header.vue';
 import side  from '@/components/sideBarBrandAfia.vue';


export default {
  name :'MainPage',
  components:{
    
    "Header":Header,
    "side":side
    
  },
  data:()=>({
    
  })

};

</script>