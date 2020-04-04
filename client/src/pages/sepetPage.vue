<template>
<v-app>
 <Header></Header>
<sepet />
<div>asdasdasdasd{{sube}}</div>
<button @click="showStore"> Click me! </button>
</v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Vue from "vue";

import sepet from "@/components/sepet.vue";
import axios from "axios";
Vue.use(axios);

export default {
  name: "sepetPage",
  components: {
    Header: Header,
    sepet: sepet,
  },
  data: () => ({
    sube: [],
  }),
  methods: {
    async showStore() {
      try {
        const sube = await axios.get("http://192.168.1.2:8180/store");
        console.log("sube", sube);
        this.sube = sube.data.subeler;
      } catch (err) {
        console.log("err", err);
      }
    },
  }
};
</script>