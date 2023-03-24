<template>
    <h1>My Shopping Cart</h1>
    <div v-if="cartItems.length > 0">
      <div class="product-container" v-for ="product in cartItems" :key="product.id" >
        <img class="product-image" :src=product.imageName alt="" />
        <div class="details-wrap">
          <h3>{{product.name}}</h3>
          <p>{{product.price}}</p>
        </div>
        <button class="remove-button"> Remove From Cart</button>
      </div>
      <button class="checkout-button">Proceed To Checkout</button>
    </div>
    <div v-if="cartItems.length === 0">
      <h3>
        <b>
          You Current Have No Items In Your Cart!..
        </b>
      </h3>
    </div>

</template>

<script>

    export default {
        name: 'ShoppingCartList',
        props : ['title','cartItems'],
    }

</script>