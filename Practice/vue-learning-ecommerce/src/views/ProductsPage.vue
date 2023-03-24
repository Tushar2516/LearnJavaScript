<template>
  <div class="productsPage">
    <h1>Products</h1>
    <ProductsList :products="products" />
  </div>
</template>

<script>
import ProductsList from '../components/ProductsList.vue'
import {products} from '../temp-data'

export default {
  name: 'ProductsPage',
  components : {
    ProductsList,
  },
  data(){
    return {
      products,
    }

  },
}
</script>