<template>
<v-app>
 <Header></Header>
<sepet />

	<div v-for="urun in sepetUrunleri" :key="urun.id"   :urunler="urun" >
			 
			<h4>{{urun.title}}</h4>

		</div>


</v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import sepet from "@/components/sepet.vue";


export default {
  name: "sepetPage",
  components: {
    Header: Header,
    sepet: sepet,
  },
  data: () => ({
   
  }),
  computed:{
    sepetUrunleri(){
				 return this.$store.getters.getSepetUrunler
       },
       
       	
  },
  methods: {
    
  }
};
</script>