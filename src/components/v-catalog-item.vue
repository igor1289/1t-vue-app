<template>
  <div class="col s12 m4">
    <div class="card">
      <div class="card-image">
        <img
          class="v-catalog-item__image"
          :src="'/images/' + product_data.image"
          alt="{{ product_data.name }}"
        />
      </div>
      <div class="card-content">
        <span class="card-title">{{ product_data.name }}</span>
        <p>Price: {{ product_data.price }}</p>
        <p>{{ product_data.about }}</p>
        <button @click="addToCart" class="waves-effect waves-light btn purple">Add to cart</button>
      </div>
    </div>
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

<style></style>
