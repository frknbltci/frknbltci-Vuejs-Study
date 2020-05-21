<template>
  <v-app class="">
    <footer class="footer" :style="{'background-image': 'url(' + require('../assets/footer_bg.jpg') + ')'}">
 
<v-card>

<div class="title">
   <div class="ust_footer">
    <b>Kategoriler</b>
<ul class="list">
  <li  > 
   <a class="href" @click="()=>{this.$router.push('/magazalar')}"> Mağazalar</a>
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

<section id="app" class="section">
    
    <article class="message" :class="accordionClasses">
      <div class="message-header"  @click="toggleAccordion" >
        Kategoriler  <v-icon class="icon">add_circle_outline</v-icon>     
      </div>
      <div  class="message-body">
        <hr class="cizgi"/>
        <div class="message-content">
        <a style="color:black;" @click="()=>{this.$router.push('/magazalar')}"> Mağazalar  </a>
        </div>
        <hr class="cizgi"/>
      </div>
          </article>

        <article class="message" :class="accordionClasses1">  
 <div class="message-header"  @click="toggleAccordion1" >
        İade Şartları  <v-icon class="icon">add_circle_outline</v-icon>     
      </div>
      <div  class="message-body">
        <hr class="cizgi"/>
        <div class="message-content">
          İade Şartları  
        </div>
        <hr class="cizgi"/>
      </div>
        </article>    
        
        <article class="message" :class="accordionClasses2">  
 <div class="message-header"  @click="toggleAccordion2" >
        Neden Afia?  <v-icon class="icon">add_circle_outline</v-icon>     
      </div>
      <div  class="message-body">
        <hr class="cizgi"/>
        <div class="message-content">
          Afia Hakkında Ne Nedir ?  
        </div>
        <hr class="cizgi"/> 
        <div class="message-content">
          Reklam Filmlerimiz
        </div>
        <hr class="cizgi"/>
      </div>
        </article>    
        
        <article class="message" :class="accordionClasses3">  
 <div class="message-header"  @click="toggleAccordion3" >
       Önemli Bilgiler  <v-icon class="icon">add_circle_outline</v-icon>     
      </div>
      <div  class="message-body">
        <hr class="cizgi"/>
        <div class="message-content">
          Teslimat Koşulları  
        </div>
        <hr class="cizgi"/>
        <div class="message-content">
         Üyelik Sözleşmesi
        </div>
        <hr class="cizgi"/>
         <div class="message-content">
        Satış Sözleşmesi
        </div>
        <hr class="cizgi"/>
         <div class="message-content">
         Garanti Ve İade Koşulları
        </div>
        <hr class="cizgi"/>
         <div class="message-content">
         Gizlilik Ve Güvenlik
        </div>
        <hr class="cizgi"/>
      </div>
        </article>   
        
        <article class="message" :class="accordionClasses4">  
 <div class="message-header"  @click="toggleAccordion4" >
      Hızlı Erişim  <v-icon class="icon">add_circle_outline</v-icon>     
      </div>
      <div  class="message-body">
        <hr class="cizgi"/>
        <div class="message-content">
          Anasayfa 
        </div>
        <hr class="cizgi"/>
        <div class="message-content">
          Yeni Ürünler
        </div>
        <hr class="cizgi"/>
      </div>
        </article>     
  </section>

<div class="mid">
 <h4 > İletişim Bilgileri</h4>
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
.footer {
  height: 100%;
  width: 100%;
  margin-top: 6%;
}

.ust_footer {
  margin-right: 6%;
  font-size: 75%;
  float: left;
  text-decoration: none;
  width: 13%;
  font-weight: 500;
}
.title {
  margin-left: 2%;
  height: 40%;
  width: 100%;
}
.list {
  list-style: none;
  display: block;
  color: black;
  margin-left: -13%;
  margin-top: 5%;
}
.href {
  text-decoration: none;
  color: black;
}
.mid {
  height: 15%;
  width: 100%;

  float: left;
  margin-left: 2%;
}
.resim {
  height: 20px;
  width: 20px;
  margin-top: 1%;
  margin-right: 2%;
}
.bosluk {
  margin-left: 50px;
}
.mid2 {
  height: 20px;
  width: 100%;

  float: left;
  margin-left: 2%;
}
.b-bosluk {
  margin-right: 12%;
}
.b-bosluk2 {
  margin-right: 27%;
}
.footer_alt {
  width: 98%;
  height: auto;
}
.message {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;
  background-color: #6c6c6c;
}
.message-header {
  cursor: pointer;
  margin-left: 7px;
  font-weight: 500;
  color: white;
  background-color: #6c6c6c;
  padding-bottom: 5px;
}
.message-body {
  padding: 0;
  max-height: auto;
  overflow: hidden;
  transition: 0.3s ease all;
  background-color: #dadada;
}
.is-closed .message-body {
  max-height: 0;
  margin: auto;
}

.message-content {
  margin-left: 7px;
  font-size: 15px;
  text-decoration: none;
}
.cizgi {
  background: white;
}
.icon {
  float: right;
  padding-right: 10px;
}
@media screen and (min-width: 750px) {
  .section {
    width: 0px;
    height: 0px;
    margin: auto;
    
  }
  .message-header {
    font-size: 0px;
  }
  .icon {
    visibility: hidden;
  }
}
@media screen and (max-width: 750px) {
  .title {
    display: none;
  }
  .icon {
    visibility: visible;
  }
  h4 {
    margin-top: 30px;
    font-size: 15px;
  }
  h5 {
    font-size: 12px;
  }
  .b-bosluk {
    display: none;
  }
  .b-bosluk2 {
    display: none;
  }
  .footer_alt {
    height: 130px;
    margin-bottom: -180px;
  }
  .footer {
    margin: auto;
    margin-top: 95px;
  }
}
</style>




<script>
export default {
  name: "Footer",

  data() {
    return {
      isOpen: false,
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
    };
  },
  computed: {
    accordionClasses: function() {
      return {
        "is-closed": !this.isOpen,
      };
    },
    accordionClasses1: function() {
      return {
        "is-closed": !this.isOpen1,
      };
    },
    accordionClasses2: function() {
      return {
        "is-closed": !this.isOpen2,
      };
    },
    accordionClasses3: function() {
      return {
        "is-closed": !this.isOpen3,
      };
    },
    accordionClasses4: function() {
      return {
        "is-closed": !this.isOpen4,
      };
    },
  },
  methods: {
    toggleAccordion: function() {
      this.isOpen = !this.isOpen;
    },
    toggleAccordion1: function() {
      this.isOpen1 = !this.isOpen1;
    },
    toggleAccordion2: function() {
      this.isOpen2 = !this.isOpen2;
    },
    toggleAccordion3: function() {
      this.isOpen3 = !this.isOpen3;
    },
    toggleAccordion4: function() {
      this.isOpen4 = !this.isOpen4;
    },
  },
};
</script>