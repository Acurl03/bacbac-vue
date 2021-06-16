import Vue from 'vue'
import App from './App.vue'
import router from './router'
// bootstapt-vue
import {
  BootstrapVue,
  IconsPlugin,
  AlertPlugin,
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.scss'
// vue-fontwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faUser, faTimes, faBars,faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// axios
import axios from 'axios'
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// custom.css
import './assets/css/app.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(AlertPlugin)

library.add(faShoppingCart, faUser, faTimes, faBars, faExternalLinkAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$axios = axios;
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


