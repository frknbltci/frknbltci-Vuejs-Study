<template>
  <v-col style >
 <div class="rangeslider"> 
 <h6 class="fiyatText">{{ `1 TL -`+ value + ` TL`}}</h6>
<input v-model="value" type="range"  min="1" max="300"  
				class="myslider" id="sliderRange"> 
</div> 

  </v-col>
</template>

<style>

      .fiyatText{
    margin-left: 15%;
    font-size: 13px;
  
    }
    .rangeslider{
    width: 100%;
    }
    .myslider {
    -webkit-appearance: none;
    background: red  ;
    width: 90%;
    height: 3px;
    opacity: 2;
    
   }
   .myslider:hover {
    opacity: 1;
   }

  .myslider::-webkit-slider-thumb {
    -webkit-appearance: none;
    cursor: pointer;
    background: red  ;
    width: 5%;
    height: 15px;
      
    border-radius: 80%;
   }


</style>
<script>
  export default {
    data () {
      return {
        value:"",
        
      }
    },
  }
</script>