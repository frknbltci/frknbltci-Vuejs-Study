<template>
<container>
 <Header></Header>
<sepet />
</container>
</template>

<script>
import Header from '@/components/Header.vue';
import sepet from '@/components/sepet.vue';


export default {
  name :'sepetPage',
  components:{
    "Header":Header,  
   "sepet":sepet
  
  
  },
  data:()=>({
    
  })

};

</script>