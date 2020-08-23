import Vue from 'vue';
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import vuetify from './plugins/vuetify'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import router from './router';

import App from './App';

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app');

export default App;