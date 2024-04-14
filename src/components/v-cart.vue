<template>
  <div class="v-cart">
    <h4>Cart</h4>
    <router-link :to="{ name: 'catalog' }">
      <div class="v-cart__link_to_catalog waves-effect waves-light btn purple">Back to catalog</div>
    </router-link>
    <vCartItem v-for="item in CART" :key="item.article" :product_data="item" />
    <p v-if="!CART.length">The cart is empty</p>
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
    ...mapGetters(['CART', 'CART_TOTAL'])
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
