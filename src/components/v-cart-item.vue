<template>
  <div class="card">
    <div class="card-content row">
      <img class="col" :src="'/images/' + product_data.image" alt="Picture" />
      <h5>{{ product_data.name }}</h5>
      <p>{{ product_data.price }}</p>
      <p>{{ product_data.about }}</p>
      <p>Count: {{ product_data.count }}</p>
      <button
        @click="removeFromCart(product_data.article)"
        class="waves-effect waves-light btn purple"
      >
        Remove
      </button>
    </div>
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
