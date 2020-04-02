import Vue from 'vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'
import TreeView from "vue-json-tree-view"
import axios from 'axios'


Vue.use(axios)

Vue.use(TreeView)

Vue.config.productionTip = false


Vue.use(BootstrapVue, {
  breakpoints: [`xs`, 'sm', 'md', 'lg', 'xl', 'xxl']
})
Vue.use(IconsPlugin)

new Vue({
  vuetify,
  render: h => h(App),router
}).$mount('#app')
