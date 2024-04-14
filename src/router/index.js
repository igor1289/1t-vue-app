import VCart from '@/components/v-cart.vue'
import VCatalog from '@/components/v-catalog.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: VCatalog
  },
  {
    path: '/cart',
    name: 'cart',
    component: VCart,
    props: true
  }
]

export default createRouter({
  history: createMemoryHistory(),
  routes
})
