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
import { store }  from './store'

Vue.prototype.$http = axios



Vue.use(TreeView)
Vue.config.productionTip = false


Vue.use(BootstrapVue, {
  breakpoints: [`xs`, 'sm', 'md', 'lg', 'xl', 'xxl']
})
Vue.use(IconsPlugin)

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
