<template>
	<v-container fluid="true" >
		<div style="
		border-right:1px solid rgb(216, 212, 212);
		border-left:1px solid rgb(216, 212, 212);
		border-bottom:1px solid rgb(216, 212, 212);
		
		
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
			
			<p>{{toplamTutar}}</p>

			</v-col>
			<v-col style="border-bottom:1px solid rgb(216, 212, 212);" cols=1>
			
            <button class="silBtn">X</button>

			</v-col>
			
			
		
       

</v-row>

	<v-row style="margin-left:1px;">
	<v-col cols=8>
		
			<button class="besliButon" >Yazdır</button>
			<button class="besliButon" >Sepeti Güncelle</button>
			<button class="besliButon" >Sepeti Temizle</button>
			<button class="besliButon" >Alışverişe Devam</button>
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
	   
	   <div style=" margin-top:-4%;margin-left:-11%;  border:1px solid black; width:100%; height:30%; font-size:18px; text-align:end; overflow:auto;" >'{{}}'</div>
	   <div style="margin-left:-11%; border:1px solid black; width:100%; height:30%; font-size:18px; text-align:end ;">'{{}}'</div>
	</v-col>
</v-row> 

<v-row>
	<v-col cols=9>
 <p style="font-size:19px;"> Sepetinizde değişiklik yaptıysanız <b>güncellemeyi unutmayın.</b> Ödeme ve onay sayfasına kadar satın alma işleminizi iptal edebilirsiniz.</p>
	</v-col>

	<v-col>
 
			<button @click.prevent="next()" class="stnAlBtn" >Satın Al</button>
			<v-icon  style=
			"margin-left:-20%;
			 position:absolute;
			 margin-top:4%;
			 color:white;
			 
			 " 
			 
			 x-large   >shopping_cart</v-icon> 


	</v-col>


</v-row>

<br><br><br>
    <button @click.prevent="next()">Next</button>
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
						
						"> ARA TOPLAM  :  {{toplamTutar}} </div>
						<div style="border:1px solid rgb(230, 227, 227); 
						margin-left:1px; 
						text-overflow:ellipsis;
						font-size:20px;
						
						"> KARGO :   10 TL</div>
							
					   	<div style="border:1px solid rgb(230, 227, 227); 
						margin-left:1px; 
						text-overflow:ellipsis;
						font-size:20px;
						
						"> <b>GENEL TOPLAM : {{TOPLAM}} </b></div>
							
							
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


    <button @click.prevent="next()" class="devamBtn" >Devam</button>


    

  </div>
   <v-container fluid=true>
  <div class="odemeDiv" v-show="step === 3">
	  <v-row style="border-bottom:1px solid rgb(230, 227, 227);">
   			<v-icon  style=" margin-left:4%;  " x-large   >shopping_cart</v-icon>
            <p style="font-size:25px; color:grey; margin-left:2%; margin-top:1%;">ÖDEME SEÇENEKLERİ</p>

	 </v-row>
    <v-row style="margin-left: 1%; border-bottom:1px solid rgb(230, 227, 227);">
		<button @click="()=>{this.subStep=1}" class="substeps">KREDİ KARTI</button>
		<button @click="()=>{this.subStep=2}" class="substeps">HAVALE/EFT</button>
		<button @click="()=>{this.subStep=3}" class="substeps">KAPIDA ÖDEME</button>
	</v-row>

	 <div v-show="subStep === 1">
    	<h1>Step 1</h1>
    
  
    </div>
	<div v-show="subStep === 2">
    	<h1>2</h1>
    
  
    </div>
	<div v-show="subStep === 3">
    	<h1>3</h1>
    
  
    </div>


  

    <button @click.prevent="prev()">Previous</button>
    
    
  </div>
  </v-container>
  <div class="onayDiv" v-show="step === 4">
    <h1>Step Four</h1>
    
    

  

    <button @click.prevent="next()">Previous</button>
    <input type="submit" value="Save">
    
  </div>
  

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
 
	export default{

	

		data(){
			return{
				step:1,
				absolute: false,
				active: true,
				opacity: 0,
				buffer: 100,
				height: 25,
				striped: true,
				value: 25,
				sepetUrunleri:[],
				dialog: false,
				miktar:0,
				toplamTutar:0,
				goster:false,
				currentUser:'',
				subStep:1,
				selectedSepet:true,
				selectedAdres:false,
				selectedOdeme:false,
				selectedOnay:false,
				cardFontsepet:true,
				cardFontonay:false,
				cardFontodeme:false,
				cardFontadres:false,
				
			
			};
		},
		methods:{
			next() {
			this.step++;
			this.value+=25;
			this.selectedSepet=false;
			},
			sepetIslemleri(){
			this.step=1;
			this.value=25;
			this.selectedSepet=true;
			this.cardFontsepet=true;
			this.selectedAdres=false;
			this.selectedOdeme=false;
			this.selectedOnay=false;
			this.cardFontadres=false;
			this.cardFontodeme=false;
			this.cardFontonay=false;
			},
			adresIslemleri(){
			 if( this.sepetUrunleri.length == 0 || this.sepetUrunleri==null  ){
			  this.step=1;
			  window.alert('Ürün seçmeden bu aşamayı geçemezsiniz.');
			 }
			 else if(this.step==1){
				 this.step=1;
			 }
			 else{
			this.step=2;
			this.value=50;
			this.selectedSepet=false;
			this.cardFontsepet=false;
			this.selectedAdres=true;
			this.selectedOdeme=false;
			this.selectedOnay=false;
			this.cardFontadres=true;
			this.cardFontodeme=false;
			this.cardFontonay=false;
			 }
			},
			odemeIslemleri(){
			this.step=3;
			this.value=75;
			this.selectedSepet=false;
			this.cardFontsepet=false;
			this.selectedAdres=false;
			this.selectedOdeme=true;
			this.selectedOnay=false;
			this.cardFontadres=false;
			this.cardFontodeme=true;
			this.cardFontonay=false;
			},
			onayIslemleri(){
			this.step=4;
			this.value=100;
			this.selectedSepet=false;
			this.cardFontsepet=false;
			this.selectedAdres=false;
			this.selectedOdeme=false;
			this.selectedOnay=true;
			this.cardFontadres=false;
			this.cardFontodeme=false;
			this.cardFontonay=true;
			}
			
	  },
	  created(){
		  this.sepetUrunleri=JSON.parse(localStorage.getItem('sepetUrunleri'));
			  console.log(typeof(this.sepetUrunleri));
		  
	  }
		
		
		
	}
		

</script>

<style>

.cardInside{
	color: grey;
	margin-top: 5%;
	margin-left: 35%;
	font-size: 24px;
	
	
	
}
.iconsCss{
	
	color:grey;
    margin-left:15%;
    margin-top:8%;
    
}

.cards{
	width: 100%;
	height: 100px;
	margin-top: -13%;
    background-color:rgb(230, 227, 227); 
	
}
.selectedCard{
	width: 100%;
	height: 100px;
	margin-top: -13%;
    background-color:rgb(230, 227, 227); 
	
}

.sepetDivfont{
	color:black;
	font-size: 17px;
	
}
.siparisNotu{	
	color:grey; 
	background-color:rgb(230, 227, 227);
	border:1px solid rgb(230, 227, 227);
					 
}




.siparisNotu:hover{
	color:white;
	background-color: grey;
}
.silBtn{
	border: 1px solid black;
	width: 25px;
	font-size:25px;
	color: white;
	background-color: grey;

}
.silBtn:hover{
	background-color: black;
}
.besliButon{
	color:white;
	background-color: grey;
	text-align: center;
	margin-left: 1px;
	padding: 2px; 
}
.besliButon:hover{
	background-color: black;
}
.stnAlBtn{
	width:100%;
	height: 140%;
	color: white;
	border-radius: 5%;
	background-color: rgb(226, 170, 65);
	font-size: 20px;
}
.stnAlBtn:hover .devamBtn:hover{
	background-color: rgb(201, 134, 10);
}

.devamBtn{
	width:30%;
	height: 60px;
	color: white;
	border-radius: 5%;
	margin-left: 45%;
	margin-top: 10%;
	background-color: rgb(226, 170, 65);
	font-size: 20px;
}

.substeps{
	padding: 10px;
	font-size: 18px;
	background-color: rgb(241, 235, 235);
	border:1px solid rgb(218, 213, 213);
	color: rgb(112, 107, 107);
}

.substeps:hover{
 background-color: rgb(90, 87, 87);
 color:white;
}
.selectedSepet{
	background-color: rgb(238, 13, 13);
	

}
.selectedAdres{
	background-color: rgb(80, 76, 76);


}
.selectedOdeme{
	background-color:rgb(80, 76, 76);
	

}
.selectedOnay{
	background-color:rgb(80, 76, 76);
	

}
.cardFontsepet{
    color: white;
}
.cardFontadres{
    color: white;
}
.cardFontodeme{
    color: white;
}
.cardFontonay{
    color: white;
}


</style>