<template>
  <v-col >
   <div class="sideBarCombo" >    
       <p class="textSide">Markalar</p>
  <hr/>
   
   <v-checkbox style="margin-left:15%;"
      v-model="checkbox"
      :label="`Afia(20)`"
    ></v-checkbox>
       
   </div>

  </v-col>
</template>

<style>

.fiyatText{
  margin-left: 15%;
  font-size: 13px;
  
}
  .sideBarCombo{
  background-color: white;
  width: 13%;
  margin-left: 0.8%;
  border: 0.2px solid rgb(221, 213, 213);
}
.textSide{
  color: red;
  font-size:20px;
  text-align: center;
}




</style>
<script>
  export default {
    data () {
      return {
        
        checkbox:""
        
      }
    },
  }
</script>