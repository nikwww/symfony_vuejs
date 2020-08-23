import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'
import currency from './modules/currency'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product, currency
  }
})
