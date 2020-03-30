<template>
<container>
 <Header></Header>
 <side-bar>
 </side-bar>
</container>
</template>

<script>
import Header from '@/components/Header.vue';
import sideBar from '@/components/sideBar.vue';


export default {
  name :'MainPage',
  components:{
    
    "Header":Header,
    "sideBar":sideBar
  
  
  },
  data:()=>({
    
  })

};

</script>