<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src="'/images/' + product_data.image" alt="Picture" />
    <p>{{ product_data.name }}</p>
    <p>{{ product_data.price }}</p>
    <p>{{ product_data.about }}</p>
    <p>Count: {{ product_data.count }}</p>
    <button @click="removeFromCart(product_data.article)">Remove from cart</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'v-cart-item',
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },

  methods: {
    ...mapActions(['REMOVE_FROM_CART']),

    removeFromCart(article) {
      this.REMOVE_FROM_CART(article)
    }
  }
}
</script>

<style>
.v-cart-item {
  margin: 8px;
  padding: 8px;
  box-shadow: 0 0 5px;
}
</style>
