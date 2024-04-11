<template>
  <div class="v-cart">
    <h1>Cart</h1>
    <vCartItem v-for="item in CART" :key="item.article" :product_data="item" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import vCartItem from './v-cart-item.vue'

export default {
  name: 'v-cart',
  components: {
    vCartItem
  },
  computed: {
    ...mapGetters(['CART'])
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style></style>
