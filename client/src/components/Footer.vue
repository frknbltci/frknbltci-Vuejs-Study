<template>
    <!--<div class="footer" :style="{'background-image': 'url(' + require('../assets/footer_bg.jpg') + ')'}">-->
  
        <!--  <v-col cols="12">
     <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

     <v-col class="mb-3">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>-->

  <v-app class="">
    <footer class="footer" :style="{'background-image': 'url(' + require('../assets/footer_bg.jpg') + ')'}">
 
<v-card>

<div class="title">
   <div class="ust_footer">
    <b>Kategoriler</b>
<ul class="list">
  <li  > 
   <a class="href" href="https://www.afiagida.com/magazalarimiz.xhtml"> Mağazalar</a>
  </li>
  
</ul>
   </div>
   <div class="ust_footer">
  <b>İade Şartları</b>
  <ul class="list">
  <li  > 
   <a class="href" href="https://www.afiagida.com/magazalarimiz.xhtml"> İade Şartları</a>
  </li>
  
</ul>
 </div>
    <div class="ust_footer">
  <b> Neden Afia ? </b>
   <ul class="list">
  <li  > 
   <a class="href" href="https://www.afiagida.com/magazalarimiz.xhtml">Afia Hakkında Ne Nedir ?</a>
  </li>
  <li  > 
   <a class="href" href="https://www.afiagida.com/magazalarimiz.xhtml"> Reklam Filmlerimiz</a>
  </li>
</ul>
  </div>
      <div class="ust_footer">
   <b> Önemli Bilgiler </b>
     <ul class="list">
  <li  > 
   <a class="href" href="https://www.afiagida.com/magazalarimiz.xhtml">Teslimat Koşulları</a>
  </li>
  <li  > 
   <a class="href" href="https://www.afiagida.com/magazalarimiz.xhtml">Üyelik Sözleşmesi</a>
  </li>
   <li  > 
   <a class="href" href="https://www.afiagida.com/magazalarimiz.xhtml">Satış Sözleşmesi</a>
  </li>
   <li  > 
   <a class="href" href="https://www.afiagida.com/magazalarimiz.xhtml">Garanti Ve İade Koşulları</a>
  </li>
   <li  > 
   <a class="href" href="https://www.afiagida.com/magazalarimiz.xhtml">Gizlilik Ve Güvenlik</a>
  </li>
</ul>
  </div>
   <div class="ust_footer">
  <b>  Hızlı Erişim</b>
     <ul class="list">
  <li  > 
   <a class="href" href="https://www.afiagida.com/magazalarimiz.xhtml">Anasayfa</a>
  </li>
  <li  > 
   <a class="href" href="https://www.afiagida.com/magazalarimiz.xhtml">Yeni Ürünler</a>
  </li>
   <li  > 
   <a class="href" href="https://www.afiagida.com/magazalarimiz.xhtml">İndirimler</a>
  </li>
   <li  > 
   <a class="href" href="https://www.afiagida.com/magazalarimiz.xhtml">Müşteri Hizmetleri</a>
  </li>
   <li  > 
   <a class="href" href="https://www.afiagida.com/magazalarimiz.xhtml">Sepetim</a>
  </li>
</ul>
  </div>

  
</div>

<div class="mid">
 <h4> İletişim Bilgileri</h4>
  <h5> <img class="resim" src="../assets/phone_icon.png">
  0850 302 6 555</h5>
   <h5> <img class="resim" src="../assets/letter_icon.png">
  irtibat@afia.com.tr</h5>
  
 <h5> <img class="resim" src="../assets/location_icon.png">
 Ziya Gökalp Mahallesi Süleyman Demirel Bulvarı Sinpaş İş
 <p class="bosluk">Modern E-11 H-11 Blok No:11 İkitelli/Başakşehir/İstanbul</p></h5>
  </div>
<div class="mid2">
  <b class="b-bosluk">Sosyal Medya Hesaplarımız</b>
  <b class="b-bosluk2">Mobil Uygulamalarımız</b>
  <b class="">Fırsat Bülteni</b>
  <img class="footer_alt" src="../assets/footer_alt.png">
</div>

  
 </v-card>
 
    </footer>
  
 </v-app>
</template>

<style scoped>
.footer{
   height:100%;
 width:100%;
 margin-top: 6%;
}

.ust_footer{
margin-right: 6%;
font-size: 75%;
float:left;
text-decoration: none;
width: 13%;
font-weight:500;

}
.title{
  margin-left: 2%;
  height: 40%;
  width: 100%;
  
  
  }
.list
{
  list-style: none;
  display: block;
  color: black;
  margin-left: -13%;
  margin-top: 5%;
 
}
.href{
  text-decoration: none;
  color: black;
}
.mid{
  height: 15%;
  width: 100%;
 
 float: left;
  margin-left: 2%;
}
.resim{
  height: 20px;
  width: 20px;
  margin-top: 1%;
  margin-right: 2% ;
}
.bosluk{
  margin-left: 50px;
}
.mid2{
height: 20px;
 width: 100%;

 float: left;
 margin-left: 2%;
}
.b-bosluk{
margin-right:12%;
}
.b-bosluk2{
margin-right:27%;
}
.footer_alt{
  width: 98%;
  height: auto;
}
</style>



