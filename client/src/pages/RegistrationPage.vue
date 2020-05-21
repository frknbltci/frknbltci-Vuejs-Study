<template>

    <v-app>
      <Header ></Header>
          <h6   v-if="hataGoster" style="color:red; font-size:16px; margin-left:40%; "> Kayıtlı Mail Girdiniz </h6>
            <div class="top">
                <img src="../assets/reg1.png" class="reg" style="float:left; margin-left:2%; width:4%;">
                <p></p>
                
                 <h5 style="margin-top:1.7%; margin-left:8%; font-weight:350;" >  ÜYE KAYIT/DÜZENLEME </h5>
             
              </div>
        <div class="main">
           
          <div class="left">
           
          <h6 style="margin-bottom:15px;" >ÜYELİK BİLGİLERİ</h6>    
<table style="width:90%">
 
   
  <tr>
 
    <td class="td1">   <img class="icon" src="../assets/icon1.png"></td>
    <td class="td2">     <div class="input">
             <div style="margin-top:5%;" class="user-input-wrp">
             <br/>
             <input v-model="ad" type="text" class="inputText" required/>
             <span class="floating-label">Ad</span>
             </div> </div></td>
    
    
  </tr>
  <tr><td><p></p></td><td></td></tr>
  <tr>
    <td class="td1">   <img class="icon" src="../assets/icon2.png"></td>
   <td class="td2">     <div class="input">
             <div style="margin-top:5%;" class="user-input-wrp">
             <br/>
             <input v-model="soyad" type="text" class="inputText" required/>
             <span class="floating-label">Soyad</span>
             </div> </div></td>      
  </tr>
    <tr><td><p></p></td><td></td></tr>

      
  <tr>
 
    <td class="td1">   <img class="icon" src="../assets/icon3.png"></td>
    <td class="td2">     <div class="input">
             <div style="margin-top:5%;" class="user-input-wrp">
             <br/>
             <input v-model="firma" type="text" class="inputText" required/>
             <span class="floating-label">Firma</span>
             </div> </div></td>
    
    
  </tr>
  <tr><td><p></p></td><td></td></tr>
  <tr>
    <td class="td1">   <img class="icon" src="../assets/icon4.png"></td>
   <td class="td2">     <div class="input">
             <div style="margin-top:5%;" class="user-input-wrp">
             <br/>
             <input v-model="vergiDairesi" type="text" class="inputText" required/>
             <span class="floating-label">Vergi Dairesi</span>
             </div> </div></td>      
  </tr>
    <tr><td><p></p></td><td></td></tr>

      
  <tr>
 
    <td class="td1">   <img class="icon" src="../assets/icon5.png"></td>
    <td class="td2">     <div class="input">
             <div style="margin-top:5%;" class="user-input-wrp">
             <br/>
             <input v-model="vergiNumarasi" type="text" class="inputText" required/>
             <span class="floating-label">Vergi Numarası</span>
             </div> </div></td>
    
    
  </tr>
  <tr><td><p></p></td><td></td></tr>
  <tr>
    <td class="td1">   <img class="icon" src="../assets/icon6.png"></td>
   <td class="td2">     <div class="input">
             <div style="margin-top:5%;" class="user-input-wrp">
             <br/>
             <input v-model="tcno" type="text" class="inputText" required/>
             <span class="floating-label">TC Kimlik No</span>
             </div> </div></td>      
  </tr>
    <tr><td><p></p></td><td></td></tr>

        
</table>
            <div style="margin-top:-2px; background-color:#ececec; width: 90%;    height:40px; ">
<input  type="checkbox" id="checkbox" style="float:left; margin-top:2.5%; margin-left:3%;   vertical-align: middle;"  >
<label for="checkbox" style="margin-left:10px;margin-top:2.3%; "> <h6 style="font-size:12px;">TC Uyruklu Değilim</h6></label>
</div>

             <h6 style="margin-bottom:15px;" >İLETİŞİM BİLGİLERİ</h6>    
<table style="width:90%">
 
   
  <tr>
 
    <td class="td1">   <img class="icon" src="../assets/iconB.png"></td>
    <td class="td2">     <div class="input">
             <div style="margin-top:5%;" class="user-input-wrp">
             <br/>
             <input v-model="tel" type="text" class="inputText" required/>
             <span class="floating-label">Telefon</span>
             </div> </div></td>
    
    
  </tr>
  <tr><td><p></p></td><td></td></tr>
  <tr>
    <td class="td1">   <img class="icon" src="../assets/icon9.png"></td>
   <td class="td2">     <div class="input">
             <div style="margin-top:5%;" class="user-input-wrp">
             <br/>
             <input v-model="email" type="text" class="inputText" required/>
             <span class="floating-label">E-Mail</span>
             </div> </div></td>      
  </tr>
    <tr><td><p></p></td><td></td></tr>
</table>

 <div id="app" class="select">
    <v-select  :options="[{value: 1, text: 'AFİA GIDA YI NEREDEN TANIDINIZ ?'}, {value: 2, text: 'İrfan Mektebi'}, {value: 3, text: 'Lalegül Tv'}]" v-model="selectedValue"  />
  </div>

             </div>      
   
       
              
              <div class="right">
                  <h6 style="margin-bottom:15px;" >ŞİFRE BİLGİLERİ</h6>    
<table style="width:90%">
 
   
  <tr>
 
    <td class="td1">   <img class="icon" src="../assets/icon7.png"></td>
    <td class="td2">     <div class="input">
             <div style="margin-top:5%;" class="user-input-wrp">
             <br/>
             <input v-model="sifre" type="text" class="inputText" required/>
             <span class="floating-label">ŞİFRE</span>
             </div> </div></td>
    
    
  </tr>
  <tr><td><p></p></td><td></td></tr>
  <tr>
    <td class="td1">  
         <img class="icon" src="../assets/icon8.png">
         </td>
   <td class="td2">  
        <div class="input">
             <div style="margin-top:5%;" class="user-input-wrp">
             <br/>
             <input v-model="sifreTekrar" type="text" class="inputText" required/>
             <span class="floating-label">ŞİFRE TEKRAR</span>
             </div> </div></td>      
  </tr>
    <tr><td><p></p></td><td></td></tr>
</table>
<div class="yaziDiv" style="margin-top:-2px; background-color:#ececec; width: 90%;    height:40px; ">
<input type="checkbox" id="checkbox" class="cb"  style="float:left; margin-top:2.5%; margin-left:3%;   vertical-align: middle;" >
<label for="checkbox" style="margin-left:10px;margin-top:0.3%; "> <h6 class="yazi" style="font-size:12px;">Tarafınızdan gönderilecek bilgilendirme e-postalarını almak istiyorum.</h6></label>
</div>
<div class="yaziDiv" style="margin-top: 10px; background-color:#ececec; width: 90%;    height:40px; ">
<input type="checkbox" id="checkbox" style="float:left; margin-top:2.5%; margin-left:3%;   vertical-align: middle;" >
<label for="checkbox" style="margin-left:10px;margin-top:0.3%; "> <h6 class="yazi" style="font-size:12px;">Tarafınızdan gönderilecek bilgilendirme sms'lerini almak istiyorum.</h6></label>
</div>
<div style="margin-top:10px; background-color:#ececec; width: 90%;    height:40px; ">
<input type="checkbox" id="checkbox" style="float:left; margin-top:2.5%; margin-left:3%;   vertical-align: middle;" >
<label for="checkbox" style="margin-left:10px;margin-top:1.1%; "> <h6 style="font-size:12px;"><a style="color:#f1a53b">Üyelik sözleşmesini Okudum</a>, Kabul Ediyorum.</h6></label>
</div>
<v-btn @click="kayitOl()" style="margin-top:10px;"  height="50" width="90%" color="#6c6c6c"  ><h5 style=" margin-top:5px; color:white; font-weight:370; vertical-align:middle; ">KAYDET</h5></v-btn>
</div>  
        <div class="yaziAlt" style="width:98%; margin-left:1%;  margin-bottom:2%; display:none; border: 2px solid #ececec; height=30px; font-size:14px; background-color:white; padding-left:1%;  float: left;" >  Firmamız hiçbir şekilde e-mailinizi ve kişisel bilgilerinizi ticari amaç uğruna kullanmaz. </div>     
   
              </div>

              
            <fo></fo>
       
       
    </v-app>
</template>

<style scoped>
.main {
  width: 84%;
  border-style: dashed 0.1px;
  height: auto;
  align-self: center;
  border: 2px solid #ececec;
}
.top {
  margin-top: 2%;
  width: 84%;
  height: 60px;
  background-color: #ececec;
  align-self: center;
}
.left {
  float: left;
  width: 50%;
  height: 720px;
  padding-top: 10px;
  padding-left: 2%;
}
.right {
  float: right;

  width: 50%;
  height: 400px;
  padding-top: 10px;
  padding-left: 2%;
}
.select {
  width: 90%;
}
.td1 {
  width: 5%;
  vertical-align: middle;
}
.td2 {
  vertical-align: middle;
  border: 1px solid#cccccc;
  width: 85%;
  height: 100%;
}
.icon {
  width: 60px;
  height: 50px;
}
.input {
  width: 100%;
  background-color: white;
  margin-top: -5%;
}
.user-input-wrp {
  position: relative;
  width: 100%;
  border-style: dotted 1px;
  border-color: black;
  margin-left: 2%;
}
.user-input-wrp .inputText {
  width: 100%;
  outline: none;
  border: none;
  box-shadow: none !important;
}
.user-input-wrp .inputText:focus {
  border-color: blue;
  border-width: medium medium 2px;
}
.user-input-wrp .floating-label {
  position: absolute;
  pointer-events: none;
  top: 18px;
  left: 10px;
  transition: 0.2s ease all;
}
.user-input-wrp input:focus ~ .floating-label,
.user-input-wrp input:not(:focus):valid ~ .floating-label {
  top: 0px;
  left: 10px;
  font-size: 13px;
  opacity: 1;
}
.reg {
  margin-left: 350px;
}

@media screen and (max-width: 750px) {
  .top {
    align-self: center;
    width: 90%;
  }
  .main {
    align-self: center;
    width: 90%;
    padding-left: 5px;
  }
  .left {
    width: 100%;
    height: 720px;
    padding-top: 10px;
  }
  .right {
    float: none;
    width: 100%;
    height: 400px;
    padding-top: 10px;
  }
  .reg {
    display: none;
  }
  .yazi {
    margin-left: 22px;
    margin-top: -55px;
  }
  .yaziAlt {
    margin-top: 105px;
  }
  .yaziDiv {
    padding-bottom: 50px;
  }
}
</style>




<script>
import Header from "@/components/Header.vue";
import footer from "@/components/Footer.vue";
import VSelect from "@alfsnd/vue-bootstrap-select";
import Vue from "vue";
import axios from "axios";
Vue.use(axios);

export default {
  name: "regisPage",
  components: {
    Header: Header,
    fo: footer,
    VSelect,
  },
  data() {
    return {
      selectedValue: "AFİA GIDA YI NEREDEN TANIDINIZ ?",
      ad: "",
      soyad: "",
      firma: "",
      vergiDairesi: "",
      vergiNumarasi: "",
      tcno: "",
      tel: "",
      email: "",
      sifre: "",
      sifreTekrar: "",
      hataGoster: false,
    };
  },
  methods: {
    
    async kayitOl() {
      try {
        this.hataGoster = false;
        let res = await axios.post(`${process.env.VUE_APP_URL}/signup`, {
          name: this.ad,
          surname: this.soyad,
          company: this.firma,
          taxAdmin: this.vergiDairesi,
          taxNumber: this.vergiNumarasi,
          ıdNumber: this.tcno,
          phoneNumber: this.tel,
          email: this.email,
          password: this.sifre,
          password2: this.sifreTekrar,
        });
        console.log("res", res);
        if (res.data.err2) {
          this.hataGoster = true;
          this.email = "";
          console.log("ssdfsdf");
        } else {
          //throw new Error("KAYITLI EMAIL");
          this.$router.push("/");
        }
      } catch (err1) {
        this.hataGoster = true;
        this.email = "";
      }
    },
  },
};
</script>