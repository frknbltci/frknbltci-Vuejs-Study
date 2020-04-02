<template>
<v-app>
    

 <Header></Header>
 
  <div class="markalarDis">
    <v-row style="margin-top:1%;">
        <v-col style="color:grey; font-size:25px; margin-left:25%; " cols=4>MARKA LİSTESİ</v-col>
        <v-spacer></v-spacer>
    <v-col cols=5>
  <input  style="text-content-left:%1; margin-left:10%;
   height:55px; width:60%; border: 0.2px solid rgb(221, 213, 213); " 
   type="text" 
   class="pl-3"
   placeholder="Markalar >> Ada göre arama " 
   /> 
    &emsp;
   <v-btn  color="success"  x-large >ARA</v-btn>
 
   </v-col>
    </v-row>

  </div>
 
</v-app>
</template>

<style>
.markalarDis{
    border: 0.2px solid rgb(221, 213, 213);
    margin-left: 5%;
    margin-right: 5%;
}
.v-btn{
    width: 25%;
}
</style>

<script>
import Header from '@/components/Header.vue';



export default {
  name :'MainPage',
  components:{
    "Header":Header

  
  },
  data:()=>({
    
  })

};

</script>