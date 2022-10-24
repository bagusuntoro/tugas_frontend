import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: [
      {
        name: "Indomie Goreng Rendang",
        desc: "Masakan instan terenak di dunia",
        stock: 10,
        price: 3900,
        total: 0,
        qty: 0
      },
      {
        name: "Mie Gelas Rendang",
        desc: "Masakan instan khusus anak kos",
        stock: 10,
        price: 1500,
        total: 0,
        qty: 0
      },
      {
        name: "Bakmi mewah",
        desc: "Anak kost jangan nyoba-nyoba yah...",
        stock: 10,
        price: 10000,
        total: 0,
        qty: 0
      }
    ],
  },
  getters: {
    getData(state) {
      return state.product
    }
  },
  mutations: {
    ADD_PRODUCT(state, index) {
      state.product[index].qty++;
      state.product[index].stock--;
      state.product[index].total = state.product[index].price * state.product[index].qty;
    },
    DELETE_PRODUCT(state, index) {
      state.product[index].stock++;
      state.product[index].qty--;
      state.product[index].total = state.product[index].price * state.product[index].qty;
    },
    CLEAR_PRODUCT(state, index) {
      state.product[index].stock += state.product[index].qty;
      state.product[index].qty = 0;
      state.product[index].total = state.product[index].price * state.product[index].qty;
    }

  },
  actions: {
    addProduct(context, index) {
      context.commit('ADD_PRODUCT', index)
    },
    deleteProduct(context, index) {
      context.commit('DELETE_PRODUCT', index)
    },
    clearProduct(context, index) {
      context.commit('CLEAR_PRODUCT', index)
    }
  },
  modules: {

  }
})