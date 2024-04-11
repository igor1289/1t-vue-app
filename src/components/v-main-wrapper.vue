<template>
  <div class="v-main-wrapper">
      <vCatalog />
      <vCart />
  </div>
</template>

<script>
import vCatalog from './v-catalog.vue'
import vCart from './v-cart.vue'

export default {
  name: 'v-main-wrapper',
  components: { vCatalog, vCart },
  props: {}
}
</script>

<style></style>
