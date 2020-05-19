<template>
<container>
 <Header ></Header>

<v-row>
  <v-col >
   <side-bar />

   </v-col>
   <v-col >
     <div class="kapaliyiz">
        <div class="top">
              
                 <h5 style="padding-top:5px; margin-left:1%; font-weight:500;" > İletişim Formu </h5>
             
              </div>
        <div class="main">
           
          <div class="left">
              
          <h6 style="margin-bottom:15px;" >Lütfen iletişim bilgilerinizin doğru olmasına özen gösteriniz.</h6>    
<table style="width:90%">
 
   
  <tr>
 
    <td class="td1">   <img class="icon" src="../assets/icon2.png"></td>
    <td class="td2">     <div class="input">
                         
 <div id="app" class="select" style="margin-top:5%;">
    <v-select  :options="[{value: 1, text: 'Departman'}, {value: 2, text: 'Pazarlama ve Dağıtım'}, {value: 3, text: 'Yönetim'}]" v-model="selectedValue"  />
  </div></div></td>
    
    
  </tr>
  <tr><td><p></p></td><td></td></tr>
  <tr>
    <td class="td1">   <img class="icon" src="../assets/icon1.png"></td>
   <td class="td2">     <div class="input">
             <div style="margin-top:5%;" class="user-input-wrp">
             <br/>
             <input v-model="ad" type="text" class="inputText" required/>
             <span class="floating-label">Adınız</span>
             </div> </div></td>      
  </tr>
    <tr><td><p></p></td><td></td></tr>

      
  <tr>
 
    <td class="td1">   <img class="icon" src="../assets/icon2.png"></td>
    <td class="td2">     <div class="input">
             <div style="margin-top:5%;" class="user-input-wrp">
             <br/>
             <input v-model="soyad" type="text" class="inputText" required/>
             <span class="floating-label">Soyadınız</span>
             </div> </div></td>
    
    
  </tr>
  <tr><td><p></p></td><td></td></tr>
  <tr>
    <td class="td1">   <img class="icon" src="../assets/icon6.png"></td>
   <td class="td2">     <div class="input">
             <div style="margin-top:5%;" class="user-input-wrp">
             <br/>
             <input v-model="email" type="text" class="inputText" required/>
             <span class="floating-label">E-mail adresiniz</span>
             </div> </div></td>      
  </tr>
    <tr><td><p></p></td><td></td></tr>

      
  <tr>
 
    <td class="td1">   <img class="icon" src="../assets/iconT.png"></td>
    <td class="td2">     <div class="input">
             <div style="margin-top:5%;" class="user-input-wrp">
             <br/>
             <input v-model="tel" type="text" class="inputText" required/>
             <span class="floating-label">Telefonunuz</span>
             </div> </div></td>
    
    
  </tr>
 
        
</table>

             </div>      
   
       
              
              <div class="right">
               
<table style="width:90%; margin-top:40px;">
 
   
  <tr>
 
    <td class="td1" style="height:0px; weight:0px; ">   </td>
    <td class="td2" >     <div>
  <b-form-textarea
  v-model="mess"
    id="textarea-rows"
    placeholder="Mesajınız"
    rows="8"
  ></b-form-textarea>
</div></td>
    
    
  </tr>

</table>

<div style="margin-top:10px; background-color:#ececec; width: 90%;    height:40px; ">
<input type="checkbox" id="checkbox" style="float:left; margin-top:2.5%; margin-left:3%;   vertical-align: middle;"  v-model="checked">
<label for="checkbox" style="margin-left:10px;margin-top:0.5%; min-width:20%; "> <h6 style="font-size:12px;"><a style="color:#f1a53b">Gizlilik ve Güvenlik Politikasını </a>Okudum, Kabul Ediyorum.</h6></label>
</div>
<v-btn @click="messageGonder()" style="margin-top:10px;"  height="40" width="90%" color="#6c6c6c"  ><h6 style=" margin-top:5px; color:white; font-weight:370; vertical-align:middle; ">Gönder</h6></v-btn>
</div>  
         
 
              </div>
              
   <div class="bottom">
  <h5 style="padding-top:5px; margin-left:1%;  font-weight:500;" > Ulaşım Haritası </h5>
   </div>
   <GmapMap
  :center="{lat:10, lng:10}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 95%; height: 400px; margin-top:450px;"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>
  </div>
 
  <products />
  </v-col>


 </v-row>
 <fo />
</container>
</template>

<style>
.kapaliyiz {
  margin-left: -65%;
}

.main {
  width: 95%;
  border-style: dashed 0.1px;
  height: auto;
  align-self: center;
  border: 2px solid #ececec;
  margin-top: -2%;
}
.top {
  margin-top: 1%;
  width: 95%;
  height: 35px;
  background-color: #ececec;
  align-self: center;
}
.bottom {
  margin-top: -28%;
  width: 95%;
  height: 35px;
  background-color: #ececec;
  float: left;
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
  width: 100%;
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
  margin-top: -9%;
  font-size: 13px;
}
.user-input-wrp {
  border-style: dotted 1px;
  border-color: black;
  margin-left: 2%;
  position: relative;
  width: 100%;
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
</style>
<script>
import Header from "@/components/Header.vue";
import sideBar from "@/components/sideBar.vue";
import footer from "@/components/Footer.vue";
import VSelect from "@alfsnd/vue-bootstrap-select";
import Vue from "vue";
import axios from "axios";
Vue.use(axios);

export default {
  name: "ContactPage",
  components: {
    Header: Header,
    sideBar: sideBar,
    fo: footer,
    VSelect,
  },
  data() {
    return {
      selectedValue: "Departman",
      ad: "",
      soyad: "",
      email: "",
      tel: "",
      mess: "",
    };
  },
  methods: {
    async messageGonder() {
      await axios
        .post(`${process.env.VUE_APP_URL}/contact`, {
          name: this.ad,
          surname: this.soyad,
          email: this.email,
          phoneNumber: this.tel,
          message: this.mess,
        })
        .then(
          res => {
            if (res.status === 200) {
              this.$router.push("/");
            }
          },
          err => {
            console.log(err.response);
            this.error = err.response.data.error;
          }
        );
    },
  },
  /* mounted() {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)

    this.$refs.mapRef.$mapPromise.then(map => {
      map.panTo({ lat: 1.38, lng: 103.8 });
    });
  },*/
};
</script>