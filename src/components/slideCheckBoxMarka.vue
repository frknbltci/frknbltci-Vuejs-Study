<template>
  <v-col >
   <div class="sideBarCombo" >    
       <p class="textSide">Markalar</p>
  <hr/>
   
   <v-checkbox style="margin-left:15%;"
      v-model="checkbox"
      :label="`Afia (${categoryList[0].subtitle[0].Biskuvi.length + categoryList[0].subtitle[2].KrakerCesitleri.length + categoryList[0].subtitle[1].Gofret.length})`"
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
  width: 15%;
  margin-left: 0.6%;
  border: 0.2px solid rgb(221, 213, 213);
  margin-top: -24px;
  margin-bottom: -11px;
}
.textSide{
  color: red;
  font-size:20px;
  text-align: center;
}




</style>



<script>

import categoryJson from '../../server/src/datas/server-category-data.json';

  export default {
    data () {
      return {
        categoryList:categoryJson,
        checkbox:""
        
      }
    },
  }
</script>