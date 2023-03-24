<template>
  <div v-if="product">
    <div class="img-wrap">
      <img :src="product.imageName" alt="">
    </div>
    <div class="product-details">
      <h1>{{product.name}}</h1>
      <h3 class="price">{{product.price}}</h3>
      <button class="add-to-cart">Add To Cart</button>
    </div>
  </div>
  <div v-else>
    <NotFoundPage />
  </div>
</template>

<script>
import  NotFoundPage from './NotFoundPage.vue';
import {products} from '../temp-data'

export default {
  components: { 
    NotFoundPage,
   },
  name:'ProductDetailPage',
  data(){
    return{
      product: products.find(product => product.id === this.$route.params.productId),

    }
  }
}

</script>