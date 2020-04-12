<template>
	<v-container fluid="true" >
		<div id="app">
  	<!--	<form action="https://postman-echo.com/post" method="post">  </form> -->
		  
	
	<v-row >
		<v-col  cols=3>
        	 <div class="cards">
				 <v-icon class="iconsCss" style="position:absolute;" x-large   >shopping_cart</v-icon> 
					 <p class="cardInside">	SEPET</p>
			</div>
		</v-col>
		<v-col cols=3>
			 <div class="cards" @click.prevent="next()" >
		 		 <v-icon class="iconsCss" style="position:absolute;" x-large   >shopping_cart</v-icon> 
					<p class="cardInside">	ADRES</p>
		     </div>
		</v-col>
		<v-col  cols=3>
			<div class="cards">
				 <v-icon class="iconsCss" style="position:absolute;" x-large   >shopping_cart</v-icon> 
					<p class="cardInside">	ÖDEME</p>
			</div>
		</v-col>
		<v-col cols=3>
			<div class="cards">
				<v-icon class="iconsCss" style="position:absolute;" x-large   >shopping_cart</v-icon> 
					<p class="cardInside">	ONAY</p>
		    </div>
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
	<v-col cols=7>
		
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

	   <!--SEPET KISMINDA TOPLAM ÜCRETTE KALDIK -->
	<v-col cols=2>
	   
	   <div style="border:1px solid black;">asd</div>
	   <div style="border:1px solid black;">asd</div>
	</v-col>
		<v-col cols=2>
	   
	   <div style="border:1px solid black;">asd</div>
	   <div style="border:1px solid black;">asd</div>
	</v-col>
</v-row>

<br><br><br>
    <button @click.prevent="next()">Next</button>
    </v-container>

  </div>

  <div  class="adresDiv" v-show="step === 2">
    <h1>Step Two</h1>

  

    


    <button @click.prevent="prev()">Previous</button>
    <button @click.prevent="next()">Next</button>

  </div>

  <div  class="odemeDiv" v-show="step === 3">
    <h1>Step Three</h1>
    
    

  

    <button @click.prevent="prev()">Previous</button>
    <button @click.prevent="next()">next</button>
    
  </div>
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
				toplamTutar:0
				
			
			};
		},
		methods:{
			prev() {
			this.step--;
			},
			next() {
			this.step++;
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
	color:rgb(124, 122, 122);
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
  


</style>