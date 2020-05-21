
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.2/vue.min.js"></script>

<template>
    <v-app>
      
        
         <Header></Header>
  <div class="gosterGenel"> 
  <v-col class="mobilMain">
    <div class="top-left"><img class="prResim" src="../assets/images/AfiaMarka.jpg"></div>
  
  </v-col>
  <div  class="productNameMobil">
    <v-col style="font-size:15px;" > {{productName}} </v-col>
   
    <v-col> <b style="font-size:15px; color:red;"> {{productPrice}} TL </b>  </v-col>
   
  </div>
  
   <v-row style="margin:5%;"> 
     
     
     <v-btn  color="grey" large>-</v-btn>
    <v-input class="adetGosterim" readonly> <p style="margin-left:50px; padding:5px;" >1</p>   </v-input>
   <v-btn color="grey"  large>+</v-btn>
   
   </v-row>


  <v-btn color="red"  class="sepeteEkleBtn" @click="sepeteEkle(id)" large> SEPETE EKLE </v-btn>
 <p 
    style="margin-top:6%; margin-left:2%;" >
    NOT  :
    <input  class="not"
    placeholder="Notunuzu Buraya Giriniz" />
      
 </p>

</div>
 


        <div class="top-side-main">
            <div class="top-left"><img class="prResim" src="../assets/images/AfiaMarka.jpg"></div>
            <div class="top-right">
             <h2 class="yaziB">{{productName}}</h2>
               <h1 class="price"  >{{productPrice}} TL</h1>
               <hr/>
                <v-btn  height="70" width="100"  class="grey white--text"><h3>-</h3></v-btn>
                <input v-model="miktar" class="textBox"  placeholder="1" />
                 <v-btn  height="70" width="100"   class="grey white--text"><h3>+</h3></v-btn>
                 <v-btn @click="sepeteEkle(id)" style="margin-left:2%;"  height="70" width="300"   class="red white--text"><h4>SEPETE EKLE</h4></v-btn>
                 <img src="../assets/FavoriEkle.png">
                 <p style="margin-top:6%; margin-left:2%;" > NOT  : <input class="textBox1"  placeholder="Notunuzu Buraya Giriniz" /></p>
                 <img class="top-picture" src="../assets/ArkadasinaOner.png">  <a href="#yorumlar">   <img class="top-picture"  src="../assets/YorumEkle.png"> </a><img class="top-picture"  src="../assets/FiyatAlarmı.png">
                 <p></p>
                 <img class="bottom-picture" src="../assets/paylas.png">
                 
            </div>
        </div>

          <div class="tabs">
    <div>
      
      <button v-for="(tab, index) in tabs" :key="tab.index"
              :class="{active : currentTab === index }"
              @click="currentTab = index">{{tab}}</button>
    </div>
    <div class="tab-content">
      <div v-show="currentTab === 0"><h1>{{productName}}</h1></div>
      <div v-show="currentTab === 1">
        <table style="width:100%;">
           <tr>
    <th><b>Kredi Kartı Tek Ödeme : </b></th>
    <th>{{productPrice}} </th> 
    <th><b>Havale : </b></th>
    <th>{{productPrice}} </th> 
  </tr>
    <tr>
    <th><b>Kapıda Ödeme : </b></th>
    <th>{{productPrice}}</th> 
  </tr>
        </table>
      </div>
<div id="yorumlar" v-show="currentTab === 2">
  Bu ürün için toplam <b> {{comments.length}} </b> yorum yapılmıştır. <a style="color:black;" @click='()=>{yorumGoster=!yorumGoster;}'> <b > Yorum Yaz </b> </a>
    <v-row v-if='yorumGoster'>
        <v-col>
          <v-icon style="background-color:grey; margin-top:-2px; position:sticky;"  color="white" >home</v-icon>        	
          <select style=" border:1px solid black; width:80%; height:25px; padding-left:2%;" name="DOBMonth">
              
              <option value=1>Çok Kötü</option>
              <option value=2>Fena Değil</option>
              <option value=3 selected>İyi</option>
              <option value=4>Çok İyi</option>
              <option value=5>Mükemmel</option>
  
          </select>
          <p>
          <v-icon style="background-color:grey; margin-top:-2px; position:sticky;"  color="white" >home</v-icon>    
          <input v-model="yorumBasligi" style=" margin-top:5%; border:1px solid black; width:80%; height:25px; padding-left:2%;" type="text" placeholder="Yorum Başlığı">
          </p>


<form action="">
  <b>Yorumda isminiz Görünsün mü ?</b>
    <p>
      <input v-model="deger" type="radio"  name="isim" value="1">
        <label  >Hayır</label>
      <input v-model="deger" style="margin-left:3%;" type="radio"  name="isim" value="2">
       <label >Evet</label>
    </p>

</form>
        </v-col>
        <v-col >
          
          <input v-model="yorum" style="
           margin-top:0%;
           border:1px solid black;
           width:150%;
           height:85px;
           padding-left:1%;
               " type="text" placeholder="Yorum">
               <v-btn @click="yorumGonder()" color="grey" style="width:150%;" block>GÖNDER</v-btn>
        </v-col>
      </v-row>

     

      </div>

      <v-row v-show="currentTab==2"  v-for="comment in comments" :key="comment.id">
        
    
              
         <v-col>
              <p > <b> {{comment.kullanici}} </b>    </p>  Evet: 0 Hayır: 0 
              
             <p> <b>Yorumu Onaylıyormusunuz ?</b> </p>
               <v-row> 
                 <v-btn color="success" small >Evet </v-btn> 
                 <v-btn color="primary" small >Hayır </v-btn>
                 
                  </v-row>    
              
         </v-col>    
             
       
                <div > 
                          <p><b>{{comment.baslik}}</b></p>
               <p style=
                      "text-align:start;">      
                      {{ comment.text}}
                   
                          </p>
                   </div>
                  
      
            
       
       
    </v-row>
    </div>
    
  </div>

  <template>
      <v-row justify="center">
      
        <v-dialog
          v-model="sepetAddPopUp"
          max-width="80%"
         max-height="100%"
        >
          <v-card>
            <v-card-title class="headline">Ürün Sepetinize Eklendi</v-card-title>
          
  <v-row style="width:100%; background-color:rgb(230, 227, 227);" > 
          <v-col style="border-right:1px solid rgb(216, 212, 212);" cols=2>
          <b class="sepetDivfont">Ürün</b>

          </v-col>
          <v-col style="border-right:1px solid rgb(216, 212, 212);" cols=3>
          <b class="sepetDivfont">Ürün Adı</b>

          </v-col>
          <v-col class="miktarBrm" cols=2>
          <b class="sepetDivfont">Miktar Birim</b>

          </v-col>

          <v-col class="miktarBrm" cols=2>
          <b class="sepetDivfont">Birim Fiyat</b>

          </v-col>
          <v-col class="toplamTutarKısmı" >
          <b class="sepetDivfont">Toplam Tutar</b>

          </v-col>
          <v-col class="miktarBrm" cols=2>
          <b class="sepetDivfont">Sil</b>

          </v-col>
  </v-row>
  <v-row v-for="urun in sepetUrunleri" :key="urun.id"  >
        <v-col style="border-bottom:1px solid rgb(216, 212, 212);" cols=2>
          <div  >
          <img style="margin-left:4%; border:1px solid rgb(216, 212, 212);; height:40%; width:70%;" 
          src="../assets/images/AfiaMarka.jpg"/>

                      
          </div>
          

          </v-col>
          <v-col style="border-bottom:1px solid rgb(216, 212, 212);" cols=3  >
            
              <b>{{urun.brand}}</b>
              <p class="fontSz">{{urun.title}}</p>
              
                        

          </v-col>
          <v-col class="gösterme" style="margin-left:2%; border-bottom:1px solid rgb(216, 212, 212);" cols=2>
            <v-row style="border:1px solid rgb(216, 212, 212); width:80%; height:30%; text-align:center;">

                  <p style="text-align:left; margin-top:3%; margin-left:1%;" >ADET:</p>
                  
                  <button style="width:18%; height:75%; margin-top:3%; margin-left:4%; border:1px solid rgb(216, 212, 212) ;"> -</button>
                                  <p style="margin-top:6%; margin-left:5%; " >  {{miktar}} </p>
                  <button style="width:18%; height:75%; margin-top:3%; margin-left:9%; border:1px solid rgb(216, 212, 212) ;"> +</button>
            </v-row>

          </v-col>

          <v-col  class="gösterme" style="border-bottom:1px solid rgb(216, 212, 212);" cols=2>
            <b> {{urun.price}} </b>
          </v-col>
          <v-col style="border-bottom:1px solid rgb(216, 212, 212);" >
          
          <p>{{toplamTutar=urun.price}}</p>

          </v-col>
          <v-col class="gösterme" style="border-bottom:1px solid rgb(216, 212, 212);" cols=1>
          
                <button @click="urunSil(urun.id)" class="silBtn">X</button>

          </v-col>
</v-row>
            

            <v-card-actions>
             <v-row>
                  <v-col cols=3>
                  <v-btn style=" margin-top:25px;background-color:green; color:white;"
                
                    block
                    
                    
                    text
                    @click="()=>{sepetAddPopUp=false;}"
                  >
                    Alışverişe Devam
                  </v-btn>
                  </v-col>
                  <v-spacer></v-spacer>

                <v-col class="butonS" cols=3>
                  <div class="fontSz" style=" border: 1px solid grey; text-align:center; margin-top:-19px;"> <b>Sepet Toplamı: </b> {{sepetToplami}} TL </div>
                  <v-btn  style="margin-left:-25px; margin-top:10px; background-color:green; color:white;"
                
                    block
                    text
                    @click="()=>{this.$router.push('/sepet')}"
                  >
                    Sepete Git
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template> 
        
  
<Footer></Footer>
  </v-app>
</template>
<style scoped>
@media screen and (max-width: 540px) {
  .butonS {
    max-width: 59%;
  }
  .top-side-main {
    display: none;
    border-style: ridge;
    width: 98%;
    height: 900px;
    align-self: center;
    margin-top: 2%;
    margin-bottom: 5%;
  }
  .not {
    border: 0.5px solid grey;
    width: 70%;
    height: 70px;
  }
  .sepeteEkleBtn {
    width: 70%;
    margin-left: 10%;
  }
  .mobilMain {
    display: block !important;
  }
  .top-left {
    border-style: ridge;
    width: 90% !important;
    height: 440px !important;
  }
  .productNameMobil {
    background-color: #d5d5d5;
    width: 85%;
    margin-left: 4%;
    height: 60px;
    font-size: 16px;
    text-align: center;
    display: flex !important;
  }
  .gosterGenel {
    display: initial !important;
  }
  .adetGosterim {
    border: solid 1px grey;
    width: 50px;
    height: 48px;
  }

  .miktarBrm {
    display: none;
  }
  .gösterme {
    display: none;
  }
  .sepetDivfont {
    text-align: center;
    margin-left: 10%;
    font-size: 15px;
  }
  .toplamTutarKısmı {
    width: 60px;
  }
  .fontSz {
    font-size: 13px !important;
  }
}

.miktarBrm {
  border-right: 1px solid rgb(216, 212, 212);
}
.toplamTutarKısmı {
  border-right: 1px solid rgb(216, 212, 212);
}
.fontSz {
  font-size: 18px;
}

.gosterGenel {
  display: none;
}

.productNameMobil {
  display: none;
}

.mobilMain {
  display: none;
}

.top-side-main {
  border-style: ridge;
  width: 98%;
  height: 900px;
  align-self: center;
  margin-top: 2%;
  margin-bottom: 5%;
}
.top-left {
  border-style: ridge;
  width: 47%;
  height: 840px;
  margin-top: 1.8%;
  margin-left: 2%;
  float: left;
}
.top-right {
  width: 47%;
  margin-left: 2%;

  float: right;
  margin-right: 2%;
  margin-top: 1.8%;
  height: auto;
  text-align: left;
}
.prResim {
  width: 80%;
  height: 90%;
  margin-left: 9%;
  margin-top: 4%;
}
.yaziB {
  margin-top: 4%;
  font-weight: 300;
}
.price {
  margin-top: 4%;
  font-weight: 700;
  color: red;
  font-size: 50px;
}
.textBox {
  width: 90px;
  height: 68px;
  text-align: center;
}
.textBox1 {
  width: 70%;
  height: 80px;
  text-align: left;
  margin-left: 2%;
}
.top-picture {
  width: 20%;
  margin-left: 3%;
  height: 20%;
}
.bottom-picture {
  width: 30%;
  height: 20%;
  margin-left: 3%;
}

.tabs {
  margin-left: 5%;
}
.active {
  border: 1px solid white;
}
button {
  padding: 10px;
  background-color: #d5d5d5;
  text-align: left;
  width: 30%;
}
button.active {
  background-color: white;
  color: #ee1c24;
}
.tab-content div {
  padding: 30px;
  border: 1px solid white;
  width: 90%;
  margin: 0 auto;
  float: left;
  background-color: white;
  margin-top: -0.1%;
}
table,
th,
td {
  border: 0.1px solid black;
  border-collapse: collapse;
  font-weight: 400;
}
th {
  width: 30%;
  padding: 5px;
}
</style>

<script>
import Header from "@/components/Header.vue";

import Footer from "@/components/Footer.vue";

import Vue from "vue";
import axios from "axios";
Vue.use(axios);

export default {
  name: "MainPage",
  el: "#app",
  components: {
    Header: Header,
    Footer: Footer,
  },
  data() {
    return {
      id: "",
      productName: "",
      comments: [],
      productPrice: "",
      currentTab: 2,
      tabs: ["Ürün Özellikleri", "Ödeme Seçenekleri", `Yorumlar`],
      sepetCount: 0,
      sepetUrunleri: [],
      miktar: 1,
      sepetAddPopUp: false,
      yorumGoster: false,
      currentUser: "",
      yorumBasligi: "",
      yorum: "",
      deger: 0,
    };
  },
  watch: {
    sepetUrunleri: {
      handler() {
        console.log("Sepet Ürünleri Değişti");
        localStorage.setItem(
          "sepetUrunleri",
          JSON.stringify(this.sepetUrunleri)
        );
        console.log(this.sepetUrunleri);
        console.log("!!!!!!");
        var toplam = 0;
        for (var i = 0; i < this.sepetUrunleri.length; i++) {
          toplam = toplam + this.sepetUrunleri[i].price;
        }
        this.sepetToplami = toplam;
        localStorage.setItem("sepetToplami", this.sepetToplami);
      },
      deep: true,
    },
    sepetCount: {
      handler() {
        console.log("countda değişti");
        localStorage.setItem("sepetCount", this.sepetCount);
      },
      deep: true,
    },
  },

  async created() {
    try {
      if (
        localStorage.getItem("sepetUrunleri") ||
        localStorage.getItem("sepetCount")
      ) {
        this.sepetUrunleri = JSON.parse(localStorage.getItem("sepetUrunleri"));
        this.sepetCount = localStorage.getItem("sepetCount");
        this.sepetToplami = localStorage.getItem("sepetToplami");
      }
      if (localStorage.getItem("currentUser")) {
        this.currentUser = localStorage.getItem("currentUser");
      }

      //SAYFA YENİLENİNCE ID VE BİLGİLERİ TEKRAR KORUMAK LAZIM
      this.id = this.$route.params.id;
      this.productPrice = this.$route.params.price;
      this.productName = this.$route.params.name;
      this.comments = this.$route.params.comments;
    } catch (err) {
      console.log("err", err);
    }
  },
  mounted: {},
  methods: {
    async sepeteEkle(id) {
      console.log(id);

      const urunler = await axios.get(`${process.env.VUE_APP_URL}/products`);
      var urunBulListesi = urunler.data;
      for (var i = 0; i < urunBulListesi.length; i++) {
        if ((urunBulListesi[i].id = id)) {
          var addProduct = urunBulListesi[i];
          this.sepetUrunleri.push(addProduct);
          break;
        }
      }

      this.sepetCount++;
      console.log("braka");
      this.sepetAddPopUp = true;
    },

    yorumGonder() {
      var token = localStorage.getItem("token");
      axios
        .post(`${process.env.VUE_APP_URL}/comment`, {
          id: this.id,
          text: this.yorum,
          baslik: this.yorumBasligi,
          deger: this.deger,
          kullanici: this.currentUser,
          token: token,
        })
        .then(function(response) {
          console.log("Buradaki response ne ?");
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });

      this.$router.push("/");
    },
    urunSil(id) {
      for (var i = 0; i < this.sepetUrunleri.length; i++) {
        if (this.sepetUrunleri[i].id == id) {
          this.sepetUrunleri.splice(i, 1);
          localStorage.setItem(
            "sepetUrunleri",
            JSON.stringify(this.sepetUrunleri)
          );
          this.sepetCount--;
          localStorage.setItem("sepetCount", this.sepetCount);
          var toplam = 0;
          for (var k = 0; k < this.sepetUrunleri.length; k++) {
            toplam = toplam + this.sepetUrunleri[k].price;
          }
          this.sepetToplami = toplam;
          localStorage.setItem("sepetToplami", this.sepetToplami);
        }
      }
    },
  },
};
</script>