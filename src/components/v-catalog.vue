<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <vCatalogItem
      v-for="product in PRODUCTS"
      :key="product.article"
      :product_data="product"
      @add-to-cart="onAddToCartEvent"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vCatalogItem from './v-catalog-item.vue'

export default {
  name: 'v-catalog',
  components: { vCatalogItem },
  props: {},
  data() {
    return {
      products: [
        {
          image: '1.png',
          name: 'Analyst',
          price: 2100,
          article: 'T1',
          available: true,
          category: 'it products',
          quantity: 0,
          about: "Hi i'm an Analyst! Nice to meet you!"
        },
        {
          image: '2.png',
          name: 'Designer',
          price: 3150,
          article: 'T2',
          available: true,
          category: 'it products',
          quantity: 0,
          about: 'Hey my friend! Nice to meet you!'
        },
        {
          image: '3.png',
          name: 'Marketer',
          price: 4200,
          article: 'T3',
          available: false,
          category: 'it products',
          quantity: 0,
          about: 'Hello! How have you been?'
        },
        {
          image: '4.png',
          name: 'Developer',
          price: 5300,
          article: 'T4',
          available: true,
          category: 'it products',
          quantity: 0,
          about: 'Nice to meet you! What about Vue?'
        },
        {
          image: '5.png',
          name: 'Business Accelerator',
          price: 6500,
          article: 'T5',
          available: false,
          category: 'it products',
          quantity: 0,
          about: "Hey! We'll solve any problems!"
        },
        {
          image: '6.png',
          name: 'Engineer',
          price: 8700,
          article: 'T6',
          available: true,
          category: 'it products',
          quantity: 0,
          about: "Hi! I've many solutions!"
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['PRODUCTS'])
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),

    onAddToCartEvent(product_data) {
      this.ADD_TO_CART(product_data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log('Data fetched')
      }
    })
  }
}
</script>

<style></style>
