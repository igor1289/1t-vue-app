<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src="'/images/' + product_data.image" alt="Picture" />
    <p>{{ product_data.name }}</p>
    <p>{{ product_data.price }}</p>
    <p>{{ product_data.about }}</p>
    <button @click="addToCart">+ В корзину</button>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
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
    addToCart() {
      this.$emit('add-to-cart', this.product_data)
    }
  }
}
</script>

<style>
.v-catalog-item {
  margin: 8px;
  padding: 8px;
  box-shadow: 0 0 5px;
}
</style>
