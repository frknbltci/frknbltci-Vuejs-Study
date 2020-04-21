<template >
    <v-app style="background-color:#deb887;" >
        
      <div class="main">
        <div class="top">
<h2>Satış Noktası Olmasını İstediğiniz Bölgeyi</h2>
<h2>Eksiksiz Olarak Girmeniz Halinde Bölge</h2>
<h2>Temsilcilerimiz Çalışma Yapacaktır.</h2>
<h2>İlginiz İçin Teşekkür Ederiz.</h2>
        </div>
<div class="form">
  <div class="left"> 
<table style="width:350px; ">
  <tr>
    <td class="td-left">ADINIZ: </td>
    <td class="td-right"> <b-form-input size="sm"   v-model="text" ></b-form-input> </td>
    </tr>
    <tr>
     <td class="td-left">CEP TEL: </td>
    <td class="td-right"> <b-form-input size="sm"   v-model="text" ></b-form-input> </td>
    </tr>
    <tr>
     <td class="td-left">İL : </td>
    <td class="td-right" style=""> <select name="dersler" style="background-color:white; width:208px;">
<option value="İstanbul">İstanbul</option>
<option value="Bursa">Bursa</option>
<option value="Ankara">Ankara</option>
<option value="İzmir">İzmir</option>
</select> </td>
    </tr>
    <tr>
     <td class="td-left">SEMT: </td>
    <td class="td-right"> <b-form-input size="sm"   v-model="text" ></b-form-input> </td>
    </tr>
    <tr>
     <td class="td-left">CADDE: </td>
    <td class="td-right"> <b-form-input size="sm"   v-model="text" ></b-form-input> </td>
    </tr>
</table>
  </div>
  <div class="right">
    <table style="width:350px; ">
  <tr>
    <td class="td-left">SOYADINIZ:	 </td>
    <td class="td-right"> <b-form-input size="sm"   v-model="text" ></b-form-input> </td>
    </tr>
    <tr>
     <td class="td-left">E-POSTA:</td>
    <td class="td-right"> <b-form-input size="sm"   v-model="text" ></b-form-input> </td>
    </tr>
    <tr>
     <td class="td-left">İLÇE : </td>
    <td class="td-right" style=""> <select name="dersler" style="background-color:white; width:208px;">
<option value="İstanbul">Kadıköy</option>
<option value="Bursa">Bağcılar</option>
<option value="Ankara">Büyükçekmeçe</option>
<option value="İzmir">Avcılar</option>
</select> </td>
    </tr>
    <tr>
     <td class="td-left">MAHALLE: </td>
    <td class="td-right"> <b-form-input size="sm"   v-model="text" ></b-form-input> </td>
    </tr>
    <tr>
     <td class="td-left">SOKAK: </td>
    <td class="td-right"> <b-form-input size="sm"   v-model="text" ></b-form-input> </td>
    </tr>
</table>
  </div>
  <div class="alt" >
    
   <h6 style="color:white; font-weight: 300; margin-left:4%">NOTUNUZ:</h6>
   <div class="text">
   <textarea v-model="message" cols="55" rows="3" max-rows="6" ></textarea>
   </div>
  
  </div>
   <v-btn style=" margin-left:240px; margin-top:405px; position:absolute; z-index:9999;"  height="25" width="94" color="gray"  class="btn"><h6>GÖNDER</h6></v-btn>
</div>


      </div>
    </v-app>
</template>





<style scoped>

.td-left{
  width: 120px;
  color: white;
  font-weight: 300;
  text-align: center;
  height: 40px;
}
.td-right{
  
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  
}
.main
{ 
    align-self: center;
   border: 3px double black;
   width: 1050px;
   height: 800px;
   margin-top: 2%;
}
.top
{
  text-align: left;
  width: 850px;
  height: 200px;
  margin: auto;
  margin-top: 3%;
  color: white;
  padding-left:40px;
  
  
  
}
h2{
font-weight:400 ;

}
.form
{
  
   margin: auto;
  width: 702px;
  height: 400px;
}
.left{
float: left; 
  width: 350px;
  height: 213px;
}

.right{

  width: 350px;
  height: 213px;
  float: right;
}
.alt{
  width: 700px;
  height: 210px;
  float: left;
}
.text{
  background-color: white;
  width: 455px;
  max-height: 155px;
  margin-left: 18%;
}
</style>
