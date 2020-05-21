<template>
    <container>
         <Header class="header"></Header>
           <v-row>
        <v-col class="colD" cols=6>
   <side-bar class="sidebar" />
        </v-col>
         
          <v-col cols=12 class="col" style="margin-left:18% ">

            <div class="top">
                 <h5  style="padding-top:5px; margin-left:1%; font-weight:500;" > İletişim Formu </h5>    
            </div>
            <h6 class="yazi">Lütfen iletişim bilgilerinizin doğru olmasına özen gösteriniz.</h6>    
        <div class="leftD">
          <img class="iconD" src="../assets/icon2.png">
          <v-select class="select" style="width:92.2%;"  :options="[{value: 1, text: 'Departman'}, {value: 2, text: 'Pazarlama ve Dağıtım'}, {value: 3, text: 'Yönetim'}]" v-model="selectedValue"  />
         
          <b-input-group  size="md" style="margin-top:12px;">
             <b-input-group-prepend> <img class="icon" src="../assets/icon1.png"> </b-input-group-prepend>
             <b-form-input v-model="ad"  placeholder="Adınız"></b-form-input> 
          </b-input-group>

          <b-input-group size="md" style="margin-top:12px;">
             <b-input-group-prepend> <img class="icon" src="../assets/icon2.png"> </b-input-group-prepend>
             <b-form-input v-model="soyad"  placeholder="Soyadınız" ></b-form-input> 
          </b-input-group>

          <b-input-group size="md" style="margin-top:12px;">
             <b-input-group-prepend> <img class="icon" src="../assets/icon6.png"> </b-input-group-prepend>
             <b-form-input v-model="email"  placeholder="Email adresiniz"></b-form-input> 
          </b-input-group>
          
          <b-input-group size="md" style="margin-top:12px;">
             <b-input-group-prepend> <img class="iconT" src="../assets/iconT.png"> </b-input-group-prepend>
             <b-form-input v-model="tel"  placeholder="Telefonunuz"></b-form-input> 
          </b-input-group>

        </div>

    <div class="rightD">
    
    <b-form-textarea v-model="mess" id="textarea-rows" placeholder="Mesajınız" rows="6">
    </b-form-textarea>
    <div style="padding-top:10px; margin-top:20px; background-color:#ececec; height:40px; ">
<input type="checkbox" id="checkbox" style="float:left; margin-left:3%;" v-model="checked">
<label for="checkbox" style="margin-left:3%; float:left; "> <h6 style="font-size:12px; margin-top:-1px;"><a style="color:#f1a53b">Gizlilik ve Güvenlik Politikasını </a>Okudum, Kabul Ediyorum.</h6></label>
</div>
<v-btn @click="messageGonder()" style="margin-top:10px;"   height="40" width="100%" color="#6c6c6c"  ><h6 style=" margin-top:5px;  color:white; font-weight:370; vertical-align:middle;">Gönder</h6></v-btn>
     </div>
       </v-col>
     </v-row>
     <fo class="footer"  />
    </container>
</template>
<style scoped>
.main {
  margin-left: 30%;
}
.header {
  margin-bottom: -20px;
}
.sidebar {
  margin-bottom: -2130px;
  margin-top: 10px;
}
.top {
  width: 78%;
  height: 35px;
  background-color: #ececec;
  align-self: center;
  margin-bottom: -20px;
}
.leftD {
  width: 39%;
  float: left;
  padding: 5px;
}
.rightD {
  width: 39%;
  padding: 5px;
  float: left;
}
.icon {
  height: 38.5px;
  width: 40px;
}
.iconT {
  height: 38.5px;
  width: 40px;
}
.iconD {
  max-height: 36.5px;
  max-height: 36.5px;
  width: 40px;
  float: left;
}
.select {
  float: right;
  margin-bottom: 15px;
}
.yazi {
  margin-bottom: 10px;
  margin-left: 5px;
}
.footer {
  margin-top: 730px;
}

@media screen and (max-width: 750px) {
  .colD {
    display: none;
  }
  .rightD {
    width: 95%;
    padding: 5px;
    height: 500px;
    float: none;
    margin-left: -57px;
  }
  .leftD {
    width: 95%;
    padding: 5px;
    margin-left: -57px;
  }
  .iconD {
    display: none;
  }
  .icon {
    display: none;
  }

  .top {
    margin-top: 16px;
    width: 92%;
    margin-left: -57px;
    margin-bottom: 15px;
  }
  .yazi {
    margin-left: -57px;
    margin-top: -10px;
    width: 90%;
  }
  .footer {
    margin-top: 0px;
  }
}
@media screen and (max-width: 400px) {
  .select {
    float: none;
    align-self: center;
    margin-left: 2.5%;
  }
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
};
</script>