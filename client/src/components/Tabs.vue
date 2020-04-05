<template>
    
        
            <div class="tabs">
    <div>
      <button v-for="(tab, index) in tabs" :key="tab.index"
              :class="{active : currentTab === index }"
              @click="currentTab = index">{{tab}}</button>
    </div>
    <div class="tab-content">
      <div v-show="currentTab === 0"><h1>Tab1 content</h1></div>
      <div v-show="currentTab === 1">
        <table style="width:100%;">
           <tr>
    <th><b>Kredi Kartı Tek Ödeme : </b></th>
    <th>Fiyat </th> 
    <th><b>Havale : </b></th>
    <th>Fiyat </th> 
  </tr>
    <tr>
    <th><b>Kapıda Ödeme : </b></th>
    <th>Fiyat</th> 
  </tr>
        </table>
      </div>
      <div v-show="currentTab === 2"><h6>Ürün için henüz yorum eklenmemiştir. İlk yorumu eklemek için 
        <b>lütfen buraya tıklayınız...</b></h6></div>
    </div>
  </div>
        

</template>
<style scoped>

.tabs{
    margin-left: 5%;
    
}
.active{
   border: 1px solid white;
}
button{
  padding: 10px;
  background-color:#d5d5d5; 
  text-align: left;
  width: 30%;
  
}
button.active{
  background-color: white;
  color:#ee1c24;
  
}
.tab-content div{
  padding: 30px;
  border: 1px solid white;
  width: 90%;
  margin: 0 auto;
  float: left;
  background-color: white;
  margin-top: -0.1%;
}
table, th, td {
  border: 0.1px solid black;
  border-collapse: collapse;
  font-weight: 400;
}
th{
  width: 30%;
  padding: 5px;
}
</style>
<script>
export default {
  name: 'tabs',
  data () {
    return {
      currentTab: 0,
      tabs: ['Ürün Özellikleri', 'Ödeme Seçenekleri', 'Yorumlar(0)*****']
    }
  }
}
</script>