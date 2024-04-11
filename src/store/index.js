import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    cart: []
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    ADD_ITEM_TO_CART: (state, item) => {
      let foundItem = state.cart.find((cart_item) => item.article == cart_item.article)

      if (!foundItem) {
        state.cart.push({
          name: item.name,
          article: item.article,
          image: item.image,
          price: item.price,
          about: item.about,
          count: 1
        })
      } else {
        foundItem.count++
      }
    },
    REMOVE_ITEM_FROM_CART: (state, article) => {
      let index = state.cart.findIndex((cart_item) => cart_item.article == article)

      let item = state.cart[index]

      if (item.count == 1) state.cart.splice(index, 1)
      else item.count--
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios('http://localhost:3000/products', { method: 'GET' })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          return products
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
    ADD_TO_CART({ commit }, item) {
      commit('ADD_ITEM_TO_CART', item)
    },
    REMOVE_FROM_CART({ commit }, article) {
      commit('REMOVE_ITEM_FROM_CART', article)
    }
  },
  modules: {}
})
