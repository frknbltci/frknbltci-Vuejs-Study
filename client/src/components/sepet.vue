<template>
	<v-container fluid="true" >
		<div style="
		border-right:1px solid rgb(216, 212, 212);
		border-left:1px solid rgb(216, 212, 212);
		
		
		
		" id="app">
  	<!--	<form action="https://postman-echo.com/post" method="post">  </form> -->
		  
	
	<v-row >
    
		<v-col  cols=3>
        	<a  @click="sepetIslemleri()">
			 <div v-bind:class="{selectedSepet:selectedSepet}" class="cards">
				 <v-icon class="iconsCss" style="position:absolute;" x-large   >shopping_cart</v-icon> 
					 <p v-bind:class="{cardFontsepet:cardFontsepet}" class="cardInside">	SEPET</p>
			</div>
        	</a>
		</v-col>
		
		<v-col cols=3>
			<a @click="adresIslemleri()">
			 <div v-bind:class="{selectedAdres:selectedAdres}" class="cards"  >
		 		 <v-icon class="iconsCss" style="position:absolute;" x-large   >shopping_cart</v-icon> 
					<p v-bind:class="{cardFontadres:cardFontadres}" class="cardInside">	ADRES</p>
		     </div>
			 </a>
		</v-col>
		<v-col  cols=3>
			<a @click="odemeIslemleri()">
			<div v-bind:class="{selectedOdeme:selectedOdeme}" class="cards">
				 <v-icon class="iconsCss" style="position:absolute;" x-large   >shopping_cart</v-icon> 
					<p  v-bind:class="{cardFontodeme:cardFontodeme}" class="cardInside">	ÖDEME</p>
			</div>
			 </a>
		</v-col>
		<v-col cols=3>
			<a @click="onayIslemleri()">
			<div v-bind:class="{selectedOnay:selectedOnay}" class="cards">
				<v-icon class="iconsCss" style="position:absolute;" x-large   >shopping_cart</v-icon> 
					<p v-bind:class="{cardFontonay:cardFontonay}" class="cardInside">	ONAY</p>
		    </div>
			 </a>
		</v-col>
</v-row>
		 <v-row justify="center" align="center">

    <v-container fluid="true" style="margin-top:-2%;"> 
		<v-progress-linear
			    style="background-color:rgb(216, 212, 212);"
				:active="active"
				:background-opacity="opacity"
				:height="height"
				:stream="stream"
				:striped="striped"
				:value="value"
				color="orange"
			>%{{value}}
		</v-progress-linear>
    </v-container>

    
   
  </v-row>



	
  <div  class="sepetDiv" v-show="step === 1">
	<v-container fluid="true">
		
	<v-row style="background-color:rgb(230, 227, 227);" > 
			<v-col style="border-right:1px solid rgb(216, 212, 212);" cols=2>
			<b class="sepetDivfont">Ürün</b>

			</v-col>
			<v-col style="border-right:1px solid rgb(216, 212, 212);" cols=3>
			<b class="sepetDivfont">Ürün Adı</b>

			</v-col>
			<v-col style="border-right:1px solid rgb(216, 212, 212);" cols=2>
			<b class="sepetDivfont">Miktar Birim</b>

			</v-col>

			<v-col style="border-right:1px solid rgb(216, 212, 212);" cols=2>
			<b class="sepetDivfont">Birim Fiyat</b>

			</v-col>
			<v-col style="border-right:1px solid rgb(216, 212, 212);" cols=1>
			<b class="sepetDivfont">Toplam Tutar</b>

			</v-col>
			<v-col style="border-right:1px solid rgb(216, 212, 212);" cols=1>
			<b class="sepetDivfont">Sil</b>

			</v-col>
	</v-row>
    <v-row v-for="urun in sepetUrunleri" :key="urun.id"  >
		<v-col style="border-bottom:1px solid rgb(216, 212, 212);" cols=2>
			<div  >
			<img style="border:1px solid rgb(216, 212, 212);; height:50%; width:80%;" 
			src="../assets/images/AfiaMarka.jpg"/>

                  
			</div>
			

			</v-col>
			<v-col style="border-bottom:1px solid rgb(216, 212, 212);" cols=3  >
				
					<b>{{urun.brand}}</b>
					<p style="font-size:18px;">{{urun.title}}</p>
					<button v-on="on" class="siparisNotu"  @click.stop="dialog = true"
					>Sipariş Notu Ekle</button>
                     

			</v-col>
			<v-col style="margin-left:2%; border-bottom:1px solid rgb(216, 212, 212);" cols=2>
				<v-row style="border:1px solid rgb(216, 212, 212); width:80%; height:30%; text-align:center;">

							<p style="text-align:left; margin-top:3%; margin-left:1%;" >ADET:</p>
							
							<button style="width:18%; height:75%; margin-top:3%; margin-left:4%; border:1px solid rgb(216, 212, 212) ;"> -</button>
															<p style="margin-top:6%; margin-left:5%; " >  {{miktar}} </p>
							<button style="width:18%; height:75%; margin-top:3%; margin-left:9%; border:1px solid rgb(216, 212, 212) ;"> +</button>
				</v-row>

			</v-col>

			<v-col style="border-bottom:1px solid rgb(216, 212, 212);" cols=2>
			   <b> {{urun.price}} </b>
			</v-col>
			<v-col style="border-bottom:1px solid rgb(216, 212, 212);" cols=1>
			
			<p>{{toplamTutar=urun.price}}</p>

			</v-col>
			<v-col style="border-bottom:1px solid rgb(216, 212, 212);" cols=1>
			
            <button @click="urunSil(urun.id)" class="silBtn">X</button>

			</v-col>
			
			
		
       

</v-row>

	<v-row style="margin-left:3px;">
	<v-col cols=8>
		
			<button class="besliButon" >Yazdır</button>
			<button @click="sepetiGuncelle()" class="besliButon" >Sepeti Güncelle</button>
			<button @click="sepetiTemizle()" class="besliButon" >Sepeti Temizle</button>
			<button @click="alisveriseDevam()" class="besliButon" >Alışverişe Devam</button>
			<button class="besliButon" >Alışveriş Listeme Ekle</button>
		
			<div style="background-color:rgb(230, 227, 227); width:100%; height:100px;">
			
				<p style="margin-left:2%; font-size:20px; margin-top:2%;" >	İNDİRİM KUPONU </p>

				<input style="margin-left:2%; background-color:white; border:1px solid; height:40px; width:60%;" type="text" >

				<button style="background-color:grey; margin-left:2%; width:30%;  height:40px; font-size:20px;">UYGULA</button>
				
			
			</div>

   	</v-col>

	<v-col cols=2>
	   
	   <div style="margin-top:-4%; border:1px solid black; width:100%; height:30%; font-size:18px; text-align:center; overflow:auto;">Sepet Toplamı</div>
	   <div style=" border:1px solid black;width:100%; height:30%; font-size:18px; text-align:center; overflow:auto;">Genel Toplamı</div>
	</v-col>
		<v-col  cols=2>
	   
	   <div style=" margin-top:-4%;margin-left:-11%;  border:1px solid black; width:100%; height:30%; font-size:18px; text-align:end; overflow:auto;" ><b>{{sepetToplami}} TL </b></div>
	   <div style="margin-left:-11%; border:1px solid black; width:100%; height:30%; font-size:18px; text-align:end ;"><b>{{sepetToplami}} TL </b></div>
	</v-col>
</v-row> 

<v-row>
	<v-col cols=9>
 <p style="font-size:19px;"> Sepetinizde değişiklik yaptıysanız <b>güncellemeyi unutmayın.</b> Ödeme ve onay sayfasına kadar satın alma işleminizi iptal edebilirsiniz.</p>
	</v-col>

	<v-col>
 
			<button @click.prevent="SatınAl()" class="stnAlBtn" >Satın Al</button>
			<v-icon  style=
			"margin-left:-20%;
			 position:absolute;
			 margin-top:4%;
			 color:white;
			 
			 " 
			 
			 x-large   >shopping_cart</v-icon> 


	</v-col>


</v-row>

    </v-container>

  </div>

  <div  class="adresDiv" v-show="step === 2">
   <v-row>
		<v-col cols=4>
		<v-row>
			<v-icon  style=" margin-left:5%;" x-large   >shopping_cart</v-icon> 
			<p style=" margin-left:2%; font-size:25px; color:grey;">ADRESLER </p>
		</v-row>
		</v-col>
		
		<v-col style="text-align:end;" cols=4>
		
			<v-btn color="success" x-large>YENİ EKLE</v-btn>
		
		</v-col>

   </v-row>
		<v-col style=" margin-top:-5%;  margin-left:75%; width:100%;" cols=3>
			
		
				
					<div style="background-color:rgb(230, 227, 227);">
						<v-row>
							<v-icon  style=" margin-left:4%;  " x-large   >shopping_cart</v-icon> 
							<p style="text-overflow:ellipsis;">SİPARİŞ ÖZETİ</p>
							<button @click="goster=!goster"  style=" text-overflow:ellipsis;  text-align:end; margin-left:30%;" dark> <v-icon>person</v-icon>  </button>
						</v-row>
					</div>
			   		 <div   v-if="goster" 
							style="border:1px solid rgb(230, 227, 227); 
							margin-left:1px; 
							text-overflow:ellipsis;
							position:absolute;
						
						">
							
							<v-row   v-for="urun in sepetUrunleri" :key="urun.id">
								<img style="height:10%; width:20%; margin-left:10%;" 
								src="../assets/images/AfiaMarka.jpg"/>
								<b>{{urun.title}} <p>{{urun.price}} </p></b>
								
							</v-row>
							<div style="border:1px solid rgb(230, 227, 227); 
						margin-left:1px; 
						text-overflow:ellipsis;
						font-size:20px;
						
						"> ARA TOPLAM  :  {{sepetToplami}} </div>
						<div style="border:1px solid rgb(230, 227, 227); 
						margin-left:1px; 
						text-overflow:ellipsis;
						font-size:20px;
						
						"> KARGO :   10 TL</div>
							
					   	<div style="border:1px solid rgb(230, 227, 227); 
						margin-left:1px; 
						text-overflow:ellipsis;
						font-size:20px;
						
						"> <b>GENEL TOPLAM : {{parseFloat(sepetToplami)+10 }} TL </b></div>
							
							
							</div>
				
			
			
		</v-col>

<v-col cols=8>
	
	<div style="margin-top:2%; background-color:rgb(230, 227, 227);">
		<b style="margin-left:1%;">Fatura Adresi</b>
		
		<b style="margin-left:50%;">Teslimat Adresi</b>
		
		
		
	</div>
	<v-row>
		<v-col>
			<v-card >
				<v-card-title style="background-color:grey;">
						<v-row style="margin-left:61%;" >
					  <v-btn color="error" >X</v-btn>
					  <v-btn color="success" >Düzenle</v-btn>
					  </v-row>
				</v-card-title>
				{{currentUser}} 'ın Fatura Adresi
			</v-card>
		</v-col>
		<v-col>
			<v-card >
	 			<v-card-title style=background-color:grey;>
					 	<v-row style="margin-left:61%;" >
					  <v-btn color="error" >X</v-btn>
					  <v-btn color="success" >Düzenle</v-btn>
					  </v-row>
	 			</v-card-title>
				 {{currentUser}} 'ın Teslimat Adresi
				 
			</v-card>
	    </v-col>
	</v-row>
    
</v-col>


    <button @click="odemeyeDevam()" class="devamBtn" >Devam</button>


    

  </div>
   <v-container fluid=true>
	   
	   
<div class="odemeDiv" v-show="step === 3">
	<v-row>
	<v-col cols=8>
	  <v-row style="border-bottom:1px solid rgb(230, 227, 227);">
		  
   			<v-icon  style=" margin-left:4%;  " x-large   >shopping_cart</v-icon>
            <p style="font-size:25px; color:grey; margin-left:2%; margin-top:1%;">ÖDEME SEÇENEKLERİ</p>

	 </v-row>
    <v-row style="margin-left: 1%; border-bottom:1px solid rgb(230, 227, 227);">
		<button v-bind:class="{subSelectedKrediKarti:subSelectedKrediKarti}"
		 @click="()=>{this.subStep=1,this.subSelectedHavale=false,this.subSelectedKapida=false,this.subSelectedKrediKarti=true,this.kapidaOdemeHizmetBedeli=false;}" class="substeps">KREDİ KARTI</button>
		<button v-bind:class="{subSelectedHavale:subSelectedHavale}"
		 @click="()=>{this.subStep=2,this.subSelectedHavale=true,this.subSelectedKapida=false,this.subSelectedKrediKarti=false,this.kapidaOdemeHizmetBedeli=false;}" class="substeps">HAVALE/EFT</button>
		<button v-bind:class="{subSelectedKapida:subSelectedKapida}"
		 @click="()=>{this.subStep=3,this.subSelectedHavale=false,this.subSelectedKrediKarti=false,this.subSelectedKapida=true,this.kapidaOdemeHizmetBedeli=true;}" class="substeps">KAPIDA ÖDEME</button>
	</v-row>
	



	 <div v-show="subStep === 1">
	<v-row>
		<v-icon style="margin-left:4%; margin-top:2%;" x-large> shopping_cart  </v-icon> <h6 style="font-size:18px; margin-left:2%; margin-top:3%;">  Kart Bilgileri</h6>
	</v-row>

	<v-row>	

		<h4 style="margin-left:1%;">Kart Üzerindeki Ad Soyad <p><input  style="padding:2%; width:170%; height:50px; border:1px solid black; margin-top:2%; margin-left:2%;" type="text" placeholder="Ad Soyad" /> </p> </h4>
          
		<img  class="kart" 
								src="../assets/images/kredikartı.jpg"/>

				
    </v-row>
         
    	<h4>Kart Numarası<p><input  style="padding:1%; width:48.1%; height:50px; border:1px solid black; margin-top:2%;" type="text" placeholder="Kart Numarası " /> </p> </h4>
	<v-row>	<b class="bfont" >Ay</b>  <b class="bfont">Yıl</b> <b class="bfont">CVC</b> </v-row>
		<select style=" margin-left:2%; border:1px solid black; width:10%; height:40px; padding-left:1%;" name="DOBMonth">
			<option>- Ay -  </option>
			<option value="Ocak">Ocak</option>
			<option value="Şubat">Şubat</option>
			<option value="Mart">Mart</option>
			<option value="Nisan">Nisan</option>
			<option value="Mayıs">Mayıs</option>
			<option value="Haziran">Haziran</option>
			<option value="Temmuz">Temmuz</option>
			<option value="Ağustos">Ağustos</option>
			<option value="Eylül">Eylül</option>
			<option value="Ekim">Ekim</option>
			<option value="Kasım">Kasım</option>
			<option value="Aralık">Aralık</option>
       </select>
      
	  	<select style="margin-left:2%; border:1px solid black; width:10%; height:40px; padding-left:1%;" name="DOBMonth">
					<option>- Yıl -</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
					<option value="2018">2018</option>
					<option value="2017">2017</option>
					<option value="2016">2016</option>
					<option value="2015">2015</option>
					<option value="2014">2014</option>
       </select>
  

		<input  style="margin-left:3%; padding:1%; width:10%; height:40px; border:1px solid black; margin-top:2%;" type="text" placeholder=" " /> 
    </div>
	<div style="margin-left:2%;" v-show="subStep === 2">
    	<h6>Havale Fiyatı: {{sepetToplami}} TL + 10,00 TL Kargo ücreti = {{parseFloat(sepetToplami)+10}} TL (0 indirimli) idir.
Havalenizi yaparken gönderen bölümünde mutlaka " <b>{{currentUser}}</b> " adını kullanınız.
Aşağıdaki menüden havale göndermek istediğiniz banka hesap numarasını seçip "Devam et" tuşuna basınız.
Havale yaparken alıcı olarak mutlaka ********************  belirtiniz.
Sipariş onaylandıktan sonra oluşacak "SP..." ile başlayan Sipariş Numaranızı havalenizin açıklama bölümünde belirtiniz.</h6>

     <h4 style="color:grey; margin-top:5%; font-size:170%;">BANKA HESAPLARIMIZ </h4>
    

<form action="">

  <input type="radio"  name="gender" value="1">
  <label class="radioButtons" for="male">Türkiye Finans, Aydın/Merkez - Hesap No: 700215 - Nafia Gıda Ltd Şti (IBAN: TR81-0020-6001-9900-7002-1500-01)</label><br>
  <input  type="radio"  name="gender" value="2">
  <label class="radioButtons" for="female">Kuveyt Türk Bankası, Afyonkarahisar/Merkez - Hesap No: 871916 - Nafia Gıda Ltd Şti (IBAN: TR76-0020-5000-0008-7191-6000-08)</label><br>
  <input  type="radio"  name="gender" value="3">
  <label class="radioButtons" for="other">Albaraka Türk, Aydın/Merkez - Hesap No: 4756051 - Nafia Gıda Ltd Şti (IBAN: TR77-0020-3000-0047-5605-0000-01)</label>

</form>


    </div>
	<div style="margin-top:1%; margin-left:1%; font-size:20px;" v-show="subStep === 3">
    	Kapıda ödeme sisteminde kargo şirketleri kapıda ödeme hizmetine karşılık olarak 6,00 TL hizmet bedeli almaktadırlar. Bu bedel kargo ücreti haricinde alınan bir bedeldir.
	Ürün bedeli {{AraToplam }} TL 'dir.

    Toplam ödeyeceğiniz tutar aşağıda belirtilmiştir.   

	{{AraToplam }} TL Ürün Fiyatı + 6,00 TL Kapıda Ödeme Hizmet Bedeli + 10,00 TL Kargo Ücreti

	<p>Toplam : <b> {{parseFloat(sepetToplami)+10+6 }} TL</b> </p>

	<form action="">

  <input type="radio"  name="gender" value="4">
  <label style="width:80%;" class="radioButtons" for="male">Nakit</label><br>


</form>

    
    </div>
	</v-col>
	<v-col style=" position:absolute; margin-top:0%;  margin-left:70%; width:100%;" cols=3>
			
		
				
					<div @click="goster=!goster" style="background-color:rgb(230, 227, 227);">
						<v-row>
							<v-icon  style=" margin-left:35px;  " x-large   >shopping_cart</v-icon> 
							<p style="text-overflow:ellipsis;">SİPARİŞ ÖZETİ</p>
							<button @click="goster=!goster"  style=" text-overflow:ellipsis;  text-align:end; margin-left:30px;" dark> <v-icon>person</v-icon>  </button>
						</v-row>
					</div>
			   		 <div   v-if="goster" 
							style="border:1px solid rgb(230, 227, 227); 
							margin-left:1px; 
							text-overflow:ellipsis;
							position:absolute;
						
						">
							
							<v-row   v-for="urun in sepetUrunleri" :key="urun.id">
								<img style="height:10%; width:20%; margin-left:10%;" 
								src="../assets/images/AfiaMarka.jpg"/>
								<b>{{urun.title}} <p>{{urun.price}} </p></b>
								
							</v-row>
							<div style="border:1px solid rgb(230, 227, 227); 
						margin-left:1px; 
						text-overflow:ellipsis;
						font-size:20px;
						
						"> ARA TOPLAM  :  {{sepetToplami}} </div>
						<div style="border:1px solid rgb(230, 227, 227); 
						margin-left:1px; 
						text-overflow:ellipsis;
						font-size:20px;
						
						"> KARGO :   10 TL</div>

						<div v-if="kapidaOdemeHizmetBedeli" style="border:1px solid rgb(230, 227, 227); 
						margin-left:1px; 
						text-overflow:ellipsis;
						font-size:20px;
						
						"> K.Ö.H.B: 6 TL</div>
							
					   	<div style="border:1px solid rgb(230, 227, 227); 
						margin-left:1px; 
						text-overflow:ellipsis;
						font-size:20px;
						
						"> 
						<b v-if="kapidaOdemeHizmetBedeli" >
							
							 GENEL TOPLAM : {{parseFloat(sepetToplami)+10+6  }}
							 
						 </b>
						 <b v-if="!kapidaOdemeHizmetBedeli" >
							  GENEL TOPLAM : {{parseFloat(sepetToplami)+10  }}
							  
						 </b>
						
						
						
						
						
						</div>
							
							
						</div>
				
			<v-btn @click="siparisiTamamla()" class="siparisiTamamlaBtn" x-large color="success" dark>SİPARİŞİ TAMAMLA</v-btn>
			
		</v-col>	

	
	 </v-row>
</div>
  </v-container>


  <br/><br/>







</div>
<!--Şipariş Notu Pop-Up -->
<template>
  <v-row justify="center">
   
    <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <v-card>
        <v-card-title class="headline">Sipariş Notunuz (Karakter Limiti: 1000/0)</v-card-title>

        <input v-model="message" style="width:400px; height:200px; border:1px inset black; margin-left:10%;">

        <v-card-actions>
          <v-spacer></v-spacer>

          
          <v-btn
		    
		  	block
            color="success"
            text
            @click="dialog = false"
          >
            KAYDET
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>





	</v-container>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      absolute: false,
      active: true,
      opacity: 0,
      buffer: 100,
      height: 25,
      striped: true,
      value: 25,
      sepetUrunleri: [],
      dialog: false,
      miktar: 1,
      toplamTutar: 0,
      goster: false,
      currentUser: "",
      subStep: 1,
      selectedSepet: true,
      selectedAdres: false,
      selectedOdeme: false,
      selectedOnay: false,
      cardFontsepet: true,
      cardFontonay: false,
      cardFontodeme: false,
      cardFontadres: false,
      subSelectedKrediKarti: true,
      subSelectedHavale: false,
      subSelectedKapida: false,
      sepetCount: 0,
      sepetToplami: 0,
      kapidaOdemeHizmetBedeli: false,
    };
  },
  methods: {
    arrayRemove(arr, value) {
      return arr.filter(function(ele) {
        return ele != value;
      });
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
          this.$router.go();
          var toplam = 0;
          for (var k = 0; k < this.sepetUrunleri.length; k++) {
            toplam = toplam + this.sepetUrunleri[k].price;
          }
          this.sepetToplami = toplam;
          localStorage.setItem("sepetToplami", this.sepetToplami);
        }
      }
    },

    sepetiGuncelle() {
      this.$router.go();
    },
    sepetiTemizle() {
      localStorage.removeItem("sepetUrunleri");
      localStorage.removeItem("sepetCount");
      localStorage.removeItem("sepetToplami");
      this.$router.go();
    },
    alisveriseDevam() {
      this.$router.push("/");
    },
    odemeyeDevam() {
      if (!this.currentUser) {
        window.alert("Giriş yapıp adres belirlemelisiniz.");
        this.step = 2;
      } else {
        this.step = 3;
        this.value = 75;
        this.selectedSepet = false;
        this.cardFontsepet = false;
        this.selectedAdres = false;
        this.selectedOdeme = true;
        this.selectedOnay = false;
        this.cardFontadres = false;
        this.cardFontodeme = true;
        this.cardFontonay = false;
      }
    },
    SatınAl() {
      if (this.sepetUrunleri == null || this.sepetUrunleri.length == 0) {
        console.log(this.sepetUrunleri);
        this.step = 1;
        window.alert("Ürün seçmeden bu aşamayı geçemezsiniz.");
      } else {
        console.log(this.sepetUrunleri);
        this.step = 2;
        this.value = 50;
        this.selectedSepet = false;
        this.cardFontsepet = false;
        this.selectedAdres = true;
        this.selectedOdeme = false;
        this.selectedOnay = false;
        this.cardFontadres = true;
        this.cardFontodeme = false;
        this.cardFontonay = false;
      }
    },
    siparisiTamamla() {
      this.step = 4;
      this.value = 100;
      this.selectedSepet = false;
      this.cardFontsepet = false;
      this.selectedAdres = false;
      this.selectedOdeme = false;
      this.selectedOnay = true;
      this.cardFontadres = false;
      this.cardFontodeme = false;
      this.cardFontonay = true;
      window.alert("SİPARİŞİNİZ ALINDI.ANASAYFAYA YÖNLENDİRİLİYORSUNUZ.");
      this.$router.push("/");
      localStorage.removeItem("sepetUrunleri");
      localStorage.removeItem("sepetCount");
      localStorage.removeItem("sepetToplami");
    },
    sepetIslemleri() {
      this.step = 1;
      this.value = 25;
      this.selectedSepet = true;
      this.cardFontsepet = true;
      this.selectedAdres = false;
      this.selectedOdeme = false;
      this.selectedOnay = false;
      this.cardFontadres = false;
      this.cardFontodeme = false;
      this.cardFontonay = false;
    },
    adresIslemleri() {
      if (this.sepetUrunleri == null) {
        this.step = 1;
        window.alert("Ürün seçmeden bu aşamayı geçemezsiniz.");
        console.log(this.sepetUrunleri.length);
      } else if (this.step == 1) {
        this.step = 1;
      } else {
        this.step = 2;
        this.value = 50;
        this.selectedSepet = false;
        this.cardFontsepet = false;
        this.selectedAdres = true;
        this.selectedOdeme = false;
        this.selectedOnay = false;
        this.cardFontadres = true;
        this.cardFontodeme = false;
        this.cardFontonay = false;
      }
    },
    odemeIslemleri() {
      if (this.step == 1) {
        this.step = 1;
      } else if (this.step == 2) {
        this.step = 2;
      } else {
        this.step = 3;
        this.value = 75;
        this.selectedSepet = false;
        this.cardFontsepet = false;
        this.selectedAdres = false;
        this.selectedOdeme = true;
        this.selectedOnay = false;
        this.cardFontadres = false;
        this.cardFontodeme = true;
        this.cardFontonay = false;
      }
    },
    onayIslemleri() {
      if (this.step == 1) {
        this.step = 1;
      } else if (this.step == 2) {
        this.step = 2;
      } else if (this.step == 3) {
        this.step = 3;
      } else {
        this.step = 4;
        this.value = 100;
        this.selectedSepet = false;
        this.cardFontsepet = false;
        this.selectedAdres = false;
        this.selectedOdeme = false;
        this.selectedOnay = true;
        this.cardFontadres = false;
        this.cardFontodeme = false;
        this.cardFontonay = true;
      }
    },
  },
  created() {
    this.sepetUrunleri = JSON.parse(localStorage.getItem("sepetUrunleri"));
    this.sepetCount = localStorage.getItem("sepetCount");
    this.sepetToplami = localStorage.getItem("sepetToplami");
    if (localStorage.getItem("currentUser")) {
      this.currentUser = localStorage.getItem("currentUser");
    }
  },
};
</script>

<style>
.kart {
  border-radius: 2%;
  position: absolute;
  height: 50%;
  width: 40%;
  margin-left: 60%;
}
.cardInside {
  color: grey;
  margin-top: 5%;
  margin-left: 35%;
  font-size: 24px;
}
.iconsCss {
  color: grey;
  margin-left: 15%;
  margin-top: 8%;
}

.cards {
  width: 100%;
  height: 100px;
  margin-top: -13%;
  background-color: rgb(230, 227, 227);
}
.selectedCard {
  width: 100%;
  height: 100px;
  margin-top: -13%;
  background-color: rgb(230, 227, 227);
}

.sepetDivfont {
  color: black;
  font-size: 17px;
}
.siparisNotu {
  color: grey;
  background-color: rgb(230, 227, 227);
  border: 1px solid rgb(230, 227, 227);
}

.siparisNotu:hover {
  color: white;
  background-color: grey;
}
.silBtn {
  border: 1px solid black;
  width: 25px;
  font-size: 25px;
  color: white;
  background-color: grey;
}
.silBtn:hover {
  background-color: black;
}
.besliButon {
  color: white;
  background-color: grey;
  text-align: center;
  margin-left: 1px;
  padding: 2px;
}
.besliButon:hover {
  background-color: black;
}
.stnAlBtn {
  width: 100%;
  height: 140%;
  color: white;
  border-radius: 5%;
  background-color: rgb(226, 170, 65);
  font-size: 20px;
}
.stnAlBtn:hover .devamBtn:hover {
  background-color: rgb(201, 134, 10);
}

.devamBtn {
  width: 30%;
  height: 60px;
  color: white;
  border-radius: 5%;
  margin-left: 45%;
  margin-top: 10%;
  background-color: rgb(226, 170, 65);
  font-size: 20px;
}

.substeps {
  padding: 10px;
  font-size: 18px;
  background-color: rgb(241, 235, 235);
  border: 1px solid rgb(218, 213, 213);
  color: rgb(112, 107, 107);
}

.substeps:hover {
  background-color: rgb(90, 87, 87);
  color: white;
}
.selectedSepet {
  background-color: rgb(238, 13, 13);
}
.selectedAdres {
  background-color: rgb(80, 76, 76);
}
.selectedOdeme {
  background-color: rgb(80, 76, 76);
}
.selectedOnay {
  background-color: rgb(80, 76, 76);
}
.cardFontsepet {
  color: white;
}
.cardFontadres {
  color: white;
}
.cardFontodeme {
  color: white;
}
.cardFontonay {
  color: white;
}
.subSelectedKrediKarti {
  background-color: rgb(80, 76, 76);
  color: white;
}
.subSelectedHavale {
  background-color: rgb(80, 76, 76);
  color: white;
}
.subSelectedKapida {
  background-color: rgb(80, 76, 76);
  color: white;
}
.bfont {
  font-size: 125%;
  margin-left: 8%;
}
.radioButtons {
  border: 1px solid grey;
  height: 20%;
  padding: 1%;
  background-color: rgb(212, 209, 209);
}

.siparisiTamamlaBtn {
  margin-right: 0%;
  position: absolute;
  margin-top: 110%;
}

@media screen and (max-width: 540px) {
  .kart {
    border-radius: 2%;
    position: absolute;
    height: 30% !important;
    width: 54%;
    margin-left: 84%;
    margin-top: 55%;
    display: none;
  }
  .siparisiTamamlaBtn {
    margin-right: 23%;
    position: absolute;
    margin-top: 110%;
    margin-left: -50%;
    width: 20%;
    font-size: 9px;
  }
  .cardInside {
    display: none;
  }
}
</style>