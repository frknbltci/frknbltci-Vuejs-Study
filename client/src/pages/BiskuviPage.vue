<template>
    <v-app>
        <Header></Header>
        <br/>
<div class="sideBar">
  <p class="textSide">Kategori</p>
  <hr>
  <ul>
    <div v-for="item in 1" :key="item.id" >
<hr style="margin-top:-16px;"><b-link class="sideBarTitles" v-b-toggle.collapse-1 variant="primary">Bisküvi,Gofret ></b-link>
  <hr>
      <ul style="" href="#" class="card-text">
        <ul style="  margin-left=50px; "><a @click="filterBiskuvi()">Bisküvi({{countBiskuvi}})</a></ul> 
        <ul><a @click="filterGofret()">Gofret({{countGofret}})</a></ul>
        <ul><a @click="filterKraker()">KrakerCesitleri({{countKraker}})</a></ul>
        
      </ul>
   
<hr/>
    </div>
  </ul>
  </div>
  <v-col class="gösterme"> 
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
    
     <div class="rangSlide" >
 <b class="slideBaslik">Fiyat</b>
 <hr/>
 <v-col style >
 <div class="rangeslider"> 
 <h6 class="fiyatText">{{ `1 TL -`+ value + ` TL`}}</h6>
<input v-model="value" type="range"  min="1" max="300"  
				class="myslider" id="sliderRange"> 
</div> 

  </v-col>
 
        <v-btn @click="filterPrice()" style="width:100%; color:white;" color="red" >FİLTRELE</v-btn>
        
        
   </div>
    <a href="https://wa.me/+90-(850)3026555" target="_blank" rel="noopener noreferrer">
     <img style="margin-left:1%;" src="@/assets/images/kargoBedava.jpg" alt="112d6.jpg (1.06 MB)" width="200" height="300" caption="false"></a>
    </v-col>
          <v-col class="urunGosterimi" cols=8>
              <v-row>
  
  <v-card style="margin:1%;" class="Cards"
    width="280" 
    height="450px"   
      v-for="product in productsList"
      :key="product.id" 
       >
      <router-link :to="{  name: 'ProductPage', params: { id: product.id,name:product.title,price:product.price,comments:product.comments }  }"> 
       
    <v-img
      class="white--text align-end"
      height="270px"
      src="@/assets/images/AfiaMarka.jpg" >
    </v-img>
   </router-link>
  
  <v-card-subtitle style="font:bolder; font-size:22px; color:black; background-color:white; margin-top:-5%; " > {{product.brand}}</v-card-subtitle>
   <div style="font-size:17px; color:black; background-color:white; margin-top:-5%; " > {{product.title}} 
       <v-row>
       <div class="sepetIcon">
        <a style="text-decoration:none;"  @click="sepeteEkle(product)" >   <v-icon color="black" style="margin-left:10%;margin-top:10%;" large  >shopping_cart</v-icon> </a>
    </div>      
     <div  class="favIcon">
       <a style="text-decoration:none;"  > <v-icon  color="black" style="margin-left:13%;margin-top:10%;" large  >favorite_border</v-icon></a>
     </div>
     <div class="CardPrice">
         {{product.price}} TL
     </div> 
       </v-row>
        </div>
   
</v-card>
</v-row>
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

                <v-col cols=3>
                  <div class="fontSz" style=" border: 1px solid grey; text-align:center; margin-top:-19px;"> <b>Sepet Toplamı: </b> {{sepetToplami}} TL </div>
                  <v-btn  style="margin-left:-59px; margin-top:29px; background-color:green; color:white;"
                
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
          </v-col>
      <fo />  
    </v-app>
</template>

<style>
@media screen and (max-width: 540px) {
  .sideBar {
    background-color: white;
    width: 14.6%;
    margin-left: 2%;
    border: 0.2px solid rgb(221, 213, 213);
    border-top: none;
    margin-top: 3%;
    display: none;
  }
  .gösterme {
    display: none;
  }
  .urunGosterimi {
    margin-top: -10% !important;
    margin-left: 20%;
  }

  .miktarBrm {
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

.urunGosterimi {
  margin-top: -35%;
  margin-left: 20%;
}
.sideBar {
  background-color: white;
  width: 14.6%;
  margin-left: 2%;
  border: 0.2px solid rgb(221, 213, 213);
  border-top: none;
  margin-top: 3%;
}
.textSide {
  color: red;
  font-size: 20px;
  text-align: left;
  font-size: 30px;
  margin-left: 8%;
}
.tumGorTexts {
  color: black;
  font-weight: bold;
  text-align: center;
}
.sideBar a {
  color: grey;
  text-align: center;
  position: static;
  margin-left: -15px;
}
.sideBarTitles {
  font-size: 15px;
  text-decoration: none;
}
.slideBaslik {
  color: red;
  font-size: 25px;
  margin-left: 15%;
}
.fiyatText {
  margin-left: 15%;
  font-size: 13px;
}
.rangSlide {
  background-color: white;
  width: 15%;
  margin-left: 20px;
  border: 0.2px solid rgb(221, 213, 213);
  margin-top: 0%;
}
.app {
  margin-left: -63%;
}
.CardPrice {
  font-family: "Courier New", Courier, monospace;
  margin-left: 55%;
  margin-top: 20%;
  font-size: 25px;
  font-weight: bold;
  color: red;
}

.sepetIcon {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgb(184, 182, 182);
  background-color: white;
  width: 50px;
  height: 50px;
  color: white;
  margin-top: 20%;
  margin-left: 4%;
}
.favIcon {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgb(184, 182, 182);
  background-color: white;
  width: 50px;
  height: 50px;
  color: white;
  margin-top: 20%;
  margin-left: 25%;
  font: bolder;
}

.favIcon:hover,
.sepetIcon:hover {
  background-color: rgb(235, 13, 13);
  color: black;
}
.sepetDivfont {
  text-align: center;
  margin-left: 10%;
}
.silBtn {
  border: 1px solid black;
  width: 25px;
  font-size: 20px;
  color: white;
  background-color: grey;
}
.silBtn:hover {
  background-color: black;
}
.fiyatText {
  margin-left: 15%;
  font-size: 13px;
}
.sideBarCombo {
  background-color: white;
  width: 15%;
  margin-left: 0.6%;
  border: 0.2px solid rgb(221, 213, 213);
  margin-top: -24px;
  margin-bottom: -11px;
}
.textSide {
  color: red;
  font-size: 20px;
  text-align: center;
}
.fiyatText {
  margin-left: 15%;
  font-size: 13px;
}
.rangeslider {
  width: 100%;
}
.myslider {
  -webkit-appearance: none;
  background: red;
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
  background: red;
  width: 5%;
  height: 15px;

  border-radius: 80%;
}
</style>

<script>
import Vue from "vue";
import axios from "axios";
Vue.use(axios);
import Header from "@/components/Header.vue";
import footer from "@/components/Footer.vue";

export default {
  name: "BiskuviPage",
  components: {
    Header: Header,
    fo: footer,
  },

  data() {
    return {
      categoryList: [],
      productsList: [],
      productId: "",
      sepetUrunleri: [],
      sepetCount: 0,
      sepetToplami: 0,
      sepetAddPopUp: false,
      miktar: 1,
      countBiskuvi: 0,
      countGofret: 0,
      countKraker: 0,
      checkbox: "",
      value: "",
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
  mounted() {
    console.log("App mpunted !");
    if (localStorage.getItem("sepetUrunleri"))
      this.sepetUrunleri = JSON.parse(localStorage.getItem("sepetUrunleri"));
    if (localStorage.getItem("sepetCount"))
      this.sepetCount = localStorage.getItem("sepetCount");
    if (localStorage.getItem("sepetToplami"))
      this.sepetToplami = localStorage.getItem("sepetToplami");
  },

  methods: {
    async filterPrice() {
      const res = await axios.get(`${process.env.VUE_APP_URL}/biskuvi`);
      this.productsList = res.data;
      var fiyatUrunler = [];

      for (var i = 0; i < this.productsList.length; i++) {
        if (this.productsList[i].price < this.value) {
          fiyatUrunler.push(this.productsList[i]);
        }
      }
      this.productsList = fiyatUrunler;
    },
    sepeteEkle(product) {
      console.log("Sepete Eklendi");
      this.sepetUrunleri.push(product);
      console.log(this.sepetUrunleri);
      this.sepetCount++;
      this.sepetAddPopUp = true;
    },
    async filterBiskuvi() {
      const res = await axios.get(`${process.env.VUE_APP_URL}/products`);
      this.productsList = res.data;
      var biskuviUrunler = [];

      for (var i = 0; i < this.productsList.length; i++) {
        if (this.productsList[i].name === "Bisküvi") {
          biskuviUrunler.push(this.productsList[i]);
        }
      }
      this.productsList = biskuviUrunler;
    },
    async filterGofret() {
      const res = await axios.get(`${process.env.VUE_APP_URL}/products`);
      this.productsList = res.data;
      var gofretUrunler = [];
      for (var i = 0; i < this.productsList.length; i++) {
        if (this.productsList[i].name === "Gofret") {
          gofretUrunler.push(this.productsList[i]);
        }
      }
      this.productsList = gofretUrunler;
    },
    async filterKraker() {
      const res = await axios.get(`${process.env.VUE_APP_URL}/products`);
      this.productsList = res.data;

      var krakerUrunler = [];

      for (var i = 0; i < this.productsList.length; i++) {
        if (this.productsList[i].name === "Kraker") {
          krakerUrunler.push(this.productsList[i]);
        }
      }
      this.productsList = krakerUrunler;
    },
    urunSil(id) {
      for (var i = 0; i < this.sepetUrunleri.length; i++) {
        if (this.sepetUrunleri[i].id == id) {
          console.log(this.sepetUrunleri[i]);
          this.sepetUrunleri.splice(i, 1);
          console.log(this.sepetUrunleri);
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
  async created() {
    try {
      const res = await axios.get(`${process.env.VUE_APP_URL}/biskuvi`);
      this.productsList = res.data;
      console.log(this.productsList);
      var a = 0;
      var b = 0;
      var c = 0;
      for (var k = 0; k < this.productsList.length; k++) {
        if (this.productsList[k].name === "Bisküvi") {
          a++;
        } else if (this.productsList[k].name === "Gofret") {
          b++;
        } else {
          c++;
        }
      }
      this.countBiskuvi = a;
      this.countGofret = b;
      this.countKraker = c;
    } catch (err) {
      console.log("err", err);
    }
    try {
      const res = await axios.get(`${process.env.VUE_APP_URL}/category`);
      this.categoryList = res.data;
    } catch (err) {
      console.log("err", err);
    }
  },
};
</script>