<template>
  <div class="productDetailsPage">
    <div class="img-wrap">
      <img :src="product.imageName" alt="">
    </div>
    <div class="product-details">
      <h1>{{product.name}}</h1>
      <h3 class="price">{{product.price}}</h3>
      <button class="add-to-cart">Add To Cart</button>
    </div>

  </div>
</template>

<script>
import Button from '../../../vue-task-tracker/src/components/Button.vue'
import {products} from '../temp-data'

export default {
  components: { Button },
  name:'ProductDetailPage',
  data(){
    return{
      product: products.find(product => product.id === this.$route.params.productId),

    }
  }
}

</script>