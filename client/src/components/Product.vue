<template>
<v-app class="app">



<v-row >
  
  <v-card   class="Cards" 
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
        class="sepetRes"
          v-model="sepetAddPopUp"
          max-width="80%"
         max-height="100%"
         
        >
          <v-card >
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
</v-app>
</template>

<style scoped>
@media screen and (max-width: 540px) {
  .app {
    margin-left: 20%;
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

.app {
  margin-left: -60%;
}

.Cards {
  width: 280px;
  height: 450px;
  margin: 1%;
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
@media screen and (max-width: 750px) {
  .sepetRes {
    max-width: 70%;
  }
}
</style>
<script>
import Vue from "vue";
import axios from "axios";
Vue.use(axios);

export default {
  name: "Product",

  data() {
    return {
      productsList: [],
      productId: "",
      sepetUrunleri: [],
      sepetCount: 0,
      sepetToplami: 0,
      sepetAddPopUp: false,
      miktar: 1,
      err: [],
    };
  },

  watch: {
    sepetUrunleri: {
      handler() {
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
        localStorage.setItem("sepetCount", this.sepetCount);
      },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.getItem("sepetUrunleri"))
      this.sepetUrunleri = JSON.parse(localStorage.getItem("sepetUrunleri"));
    if (localStorage.getItem("sepetCount"))
      this.sepetCount = localStorage.getItem("sepetCount");
    if (localStorage.getItem("sepetToplami"))
      this.sepetToplami = localStorage.getItem("sepetToplami");
  },

  methods: {
    sepeteEkle(product) {
      this.sepetUrunleri.push(product);

      this.sepetCount++;
      this.sepetAddPopUp = true;
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
  async created() {
    try {
      const res = await axios.get(`${process.env.VUE_APP_URL}/products`);
      this.productsList = res.data;
    } catch (err) {
      console.log("err", err);
    }
  },
};
</script>